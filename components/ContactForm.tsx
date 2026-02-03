"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import CalendlyModal from "./CalendlyModal";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";

// Convert API error codes into i18n keys
function errorToKey(code: string) {
  switch (code) {
    case "invalid_json":
      return "contact.errors.invalid_json";
    case "name_too_short":
      return "contact.errors.name_too_short";
    case "invalid_email":
      return "contact.errors.invalid_email";
    case "message_too_short":
      return "contact.errors.message_too_short";
    case "rate_limited":
      return "contact.errors.rate_limited";
    case "upstream_failed":
      return "contact.errors.upstream_failed";
    default:
      return "contact.errors.generic";
  }
}

export default function ContactForm() {
  const t = useTranslations();
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ kind: "sending" });

    const form = new FormData(e.currentTarget);

    // Honeypot field (should stay empty)
    const company = String(form.get("company") || "");

    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      message: String(form.get("message") || ""),
      company
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as any;
        const code = String(data?.error || "generic");
        const msg = t(errorToKey(code));
        throw new Error(msg);
      }

      setStatus({ kind: "success" });
      e.currentTarget.reset();
    } catch (err: any) {
      setStatus({ kind: "error", message: err?.message || t("contact.errors.generic") });
    }
  }

  return (
    <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_320px]">
      <form onSubmit={onSubmit} className="card p-6 space-y-3">
        <div>
          <label className="text-xs text-muted-2">{t("contact.nameLabel")}</label>
          <input
            name="name"
            required
            className="mt-2 w-full rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-2 text-sm outline-none focus:border-cyan-400/40 soft-ring"
            placeholder={t("contact.namePlaceholder")}
          />
        </div>

        <div>
          <label className="text-xs text-muted-2">{t("contact.emailLabel")}</label>
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-2 text-sm outline-none focus:border-cyan-400/40 soft-ring"
            placeholder={t("contact.emailPlaceholder")}
          />
        </div>

        {/* Honeypot (hidden for humans) */}
        <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        <div>
          <label className="text-xs text-muted-2">{t("contact.messageLabel")}</label>
          <textarea
            name="message"
            required
            rows={5}
            className="mt-2 w-full rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-2 text-sm outline-none focus:border-cyan-400/40 soft-ring"
            placeholder={t("contact.messagePlaceholder")}
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={status.kind === "sending"}
            className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-medium text-black hover:opacity-90 soft-ring disabled:opacity-60"
          >
            {status.kind === "sending" ? t("contact.sending") : t("contact.send")}
          </button>

          {status.kind === "success" && (
            <span className="text-sm text-emerald-200">{t("contact.success")}</span>
          )}
          {status.kind === "error" && (
            <span className="text-sm text-rose-200">{status.message}</span>
          )}
        </div>

        <p className="pt-2 text-xs text-muted-2">{t("contact.privacyNote")}</p>
      </form>

      <div className="card p-6">
        <div className="text-sm text-muted-2">{t("contact.otherWays")}</div>

        <div className="mt-4 space-y-3">
          {/* Calendly as an embedded modal (falls back if env is missing inside the component) */}
          <CalendlyModal />

          {!process.env.NEXT_PUBLIC_CALENDLY_URL ? (
            <div className="rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-3 text-sm text-muted-2">
              {t("contact.bookCallMissing")}
            </div>
          ) : null}

          {CONTACT_EMAIL ? (
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center justify-between rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-3 text-sm hover:bg-black/10 dark:hover:bg-white/10 soft-ring"
            >
              <span>{t("contact.emailMe")}</span>
              <span className="text-xs text-muted-2">{CONTACT_EMAIL}</span>
            </a>
          ) : (
            <div className="rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-3 text-sm text-muted-2">
              {t("contact.emailMissing")}
            </div>
          )}
        </div>

        <div className="mt-5 text-xs text-muted-2">{t("contact.envHint")}</div>
      </div>
    </div>
  );
}
