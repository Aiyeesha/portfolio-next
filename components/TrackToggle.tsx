"use client";

import { useTrack } from "@/app/[locale]/providers";

export default function TrackToggle() {
  const { track, setTrack } = useTrack();

  return (
    <div className="flex rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-1">
      <button
        type="button"
        onClick={() => setTrack("itops")}
        className={`rounded-full px-3 py-1.5 text-sm ${
          track === "itops" ? "bg-cyan-500/20 text-cyan-700 dark:text-cyan-200" : "text-slate-600 dark:text-slate-900 dark:text-white/70 hover:text-slate-900 dark:text-white"
        }`}
      >
        IT Ops
      </button>
      <button
        type="button"
        onClick={() => setTrack("salesforce")}
        className={`rounded-full px-3 py-1.5 text-sm ${
          track === "salesforce" ? "bg-cyan-500/20 text-cyan-700 dark:text-cyan-200" : "text-slate-600 dark:text-slate-900 dark:text-white/70 hover:text-slate-900 dark:text-white"
        }`}
      >
        Salesforce
      </button>
    </div>
  );
}
