import { NextResponse } from "next/server";

type Payload = {
  name: string;
  email: string;
  topic?: string;
  message: string;
  // Honeypot: should remain empty
  company?: string;
};

const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT || "";

// In-memory rate limit (good for dev / single instance; for multi-instance use Redis/Upstash)
const WINDOW_SECONDS = Number(process.env.CONTACT_RATE_LIMIT_WINDOW_SECONDS || "600");
const MAX_REQUESTS = Number(process.env.CONTACT_RATE_LIMIT_MAX_REQUESTS || "5");

type Bucket = { resetAt: number; count: number };
const buckets = new Map<string, Bucket>();

function getClientIp(req: Request) {
  const xf = req.headers.get("x-forwarded-for") || "";
  // x-forwarded-for can be "ip, proxy1, proxy2"
  const ip = xf.split(",")[0]?.trim();
  return ip || "unknown";
}

function rateLimit(req: Request) {
  const ip = getClientIp(req);
  const now = Date.now();
  const resetAt = now + WINDOW_SECONDS * 1000;

  const b = buckets.get(ip);
  if (!b || now > b.resetAt) {
    buckets.set(ip, { resetAt, count: 1 });
    return { ok: true, ip };
  }

  if (b.count >= MAX_REQUESTS) {
    return { ok: false, ip, retryAfterSeconds: Math.max(1, Math.ceil((b.resetAt - now) / 1000)) };
  }

  b.count += 1;
  buckets.set(ip, b);
  return { ok: true, ip };
}

function validate({ name, email, message }: { name: string; email: string; message: string }) {
  if (name.length < 2) return "name_too_short";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "invalid_email";
  if (message.length < 10) return "message_too_short";
  return null;
}

/**
 * Contact API (Stage 7)
 * ---------------------
 * - Validates input
 * - Honeypot field ("company") anti-spam
 * - Rate limit (in-memory)
 * - If FORMSPREE_ENDPOINT is set, forwards to Formspree and maps errors
 */
export async function POST(req: Request) {
  const rl = rateLimit(req);
  if (!rl.ok) {
    return NextResponse.json(
      { ok: false, error: "rate_limited", retryAfterSeconds: rl.retryAfterSeconds },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSeconds) } }
    );
  }

  const body = (await req.json().catch(() => null)) as Payload | null;
  if (!body) return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const topic = String(body.topic || "general").trim();
  const message = (body.message || "").trim();
  const company = (body.company || "").trim(); // honeypot

  // Bot check
  if (company) return NextResponse.json({ ok: true }, { status: 200 });

  const v = validate({ name, email, message });
  if (v) return NextResponse.json({ ok: false, error: v }, { status: 400 });

  // Forward to Formspree if configured
  if (FORMSPREE_ENDPOINT) {
    const resp = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({ name, email, topic, message, source: "portfolio-next" })
    });

    if (!resp.ok) {
      // Try parse Formspree error payload
      const data = (await resp.json().catch(() => null)) as any;
      console.error("[FORMSPREE_ERROR]", resp.status, data);

      // Map to a stable error code for UI
      // (We keep it generic; full details remain server-side)
      return NextResponse.json(
        { ok: false, error: "upstream_failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  }

  // Dev fallback
  console.log("[CONTACT]", { name, email, topic, message });
  return NextResponse.json({ ok: true }, { status: 200 });
}
