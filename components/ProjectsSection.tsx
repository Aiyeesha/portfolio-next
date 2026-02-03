"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import Link from "next/link";
import { projects } from "@/content/projects";
import { useTrack } from "@/app/[locale]/providers";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const tones: Record<string, string> = {
  client: "badge badge-client",
  personal: "badge badge-personal",
  training: "badge badge-training"
};

export default function ProjectsSection() {
  const t = useTranslations();
  const { track } = useTrack();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  const [q, setQ] = useState("");
  const [active, setActive] = useState<string>("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    projects
      .filter((p) => p.track === track)
      .forEach((p) => p.categories.forEach((c) => set.add(c)));
    return ["All", ...Array.from(set)];
  }, [track]);

  const filtered = useMemo(() => {
    const base = projects.filter((p) => p.track === track);
    return base.filter((p) => {
      const inCat = active === "All" ? true : p.categories.includes(active);
      const text = (p.title + " " + p.excerpt + " " + p.tags.join(" ")).toLowerCase();
      const inQ = q.trim() === "" ? true : text.includes(q.trim().toLowerCase());
      return inCat && inQ;
    });
  }, [track, active, q]);

  return (
    <div>
      <div className="mb-6">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t("projects.search")}
          className="w-full rounded-full border border-black/10 bg-black/5 soft-ring dark:border-white/10 dark:bg-white/5 px-5 py-3 text-sm outline-none placeholder:text-slate-400 dark:text-muted-2 focus:border-cyan-400/40 soft-ring"
        />
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-2 text-sm soft-ring ${
              active === c
                ? "border-cyan-400/40 bg-cyan-500/10 text-cyan-700 dark:text-cyan-200"
                : "border-white/10 text-muted hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((p, idx) => (
          <Reveal key={p.slug} delayMs={Math.min(280, idx * 60)}><div className="card p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              {p.badge && (
                <span className={tones[p.badge.tone]}>
                  {p.badge.label}
                </span>
              )}
            </div>

            <p className="mt-3 text-sm text-muted">{p.excerpt}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="chip"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <Link
                href={`/${locale}/projects/${p.slug}`}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
              >
                {t("projects.details")}
              </Link>

              {p.pdfUrl && (
                <a
                  href={p.pdfUrl}
                  className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-black hover:opacity-90"
                >
                  {t("projects.requirements")}
                </a>
              )}
            </div>
          </div></Reveal>
        ))}
      </div>
    </div>
  );
}
