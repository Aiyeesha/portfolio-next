"use client";

import { useMemo, useState } from "react";
import type { Testimonial } from "@/content/testimonials";
import Reveal from "./Reveal";

/**
 * Testimonials
 * ------------
 * Lightweight "carousel" without dependencies:
 * - One active testimonial
 * - Previous / Next controls
 * - List selector on the side (desktop)
 */
export default function Testimonials({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);

  const current = useMemo(() => items[index], [items, index]);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
      <Reveal>
        <div className="card p-6">
          <div className="text-sm text-muted-2">Testimonials</div>
          <p className="mt-4 text-lg leading-relaxed text-strong">
            “{current.quote}”
          </p>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div>
              <div className="font-semibold">{current.name}</div>
              <div className="text-sm text-muted-2">
                {current.role}
                {current.company ? ` · ${current.company}` : ""}
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 soft-ring"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                type="button"
                onClick={next}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 soft-ring"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delayMs={120}>
        <div className="card p-6">
          <div className="text-sm text-muted-2">All</div>
          <div className="mt-4 space-y-2">
            {items.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setIndex(i)}
                className={[
                  "w-full text-left rounded-xl border px-4 py-3 transition-colors",
                  i === index
                    ? "border-cyan-400/40 bg-cyan-500/10 text-cyan-700 dark:text-cyan-200"
                    : "border-white/10 bg-white/5 text-slate-700 dark:text-white/80 hover:bg-white/10 soft-ring"
                ].join(" ")}
              >
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-2">
                  {t.role}
                  {t.company ? ` · ${t.company}` : ""}
                </div>
              </button>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
