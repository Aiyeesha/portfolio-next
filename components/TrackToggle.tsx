"use client";

import { useTrack } from "@/app/[locale]/providers";
import { useTranslations } from "next-intl";

export default function TrackToggle() {
  const { track, setTrack } = useTrack();
  const t = useTranslations();

  return (
    <div
      role="group"
      aria-label={t("a11y.chooseTrack")}
      className="flex rounded-full border border-black/10 bg-black/5 p-1 dark:border-white/10 dark:bg-white/5"
    >
      <button
        type="button"
        onClick={() => setTrack("itops")}
        aria-pressed={track === "itops"}
        aria-label={t("a11y.chooseItOps")}
        className={`rounded-full px-3 py-1.5 text-sm ${
          track === "itops"
            ? "bg-cyan-500/20 text-cyan-700 dark:text-cyan-200"
            : "text-slate-600 hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
        }`}
      >
        {t("tracks.itops")}
      </button>
      <button
        type="button"
        onClick={() => setTrack("salesforce")}
        aria-pressed={track === "salesforce"}
        aria-label={t("a11y.chooseSalesforce")}
        className={`rounded-full px-3 py-1.5 text-sm ${
          track === "salesforce"
            ? "bg-cyan-500/20 text-cyan-700 dark:text-cyan-200"
            : "text-slate-600 hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
        }`}
      >
        {t("tracks.salesforce")}
      </button>
    </div>
  );
}
