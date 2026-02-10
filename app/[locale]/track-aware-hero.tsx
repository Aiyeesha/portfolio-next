"use client";

import { useTrack } from "./providers";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

export default function TrackAwareHero() {
  const t = useTranslations();
  const { track } = useTrack();

  // Public env var (optional). If not set, we use the bundled avatar in /public/avatar.webp
  const avatarUrl = useMemo(
    () => process.env.NEXT_PUBLIC_AVATAR_URL || "/avatar.webp",
    []
  );
  const [src, setSrc] = useState<string>(avatarUrl);

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[140px_1fr]">
      {/* Avatar */}
      <div className="mx-auto lg:mx-0">
        <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full ring-1 ring-black/10 dark:ring-white/10 shadow-[0_0_0_6px_rgba(34,211,238,0.08)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={t("hero.avatar_alt")}
            className="h-full w-full object-cover"
            onError={() => setSrc("/avatar-placeholder.svg")}
          />
        </div>
      </div>

      {/* Text */}
      <div>
        <h1 className="text-5xl font-semibold leading-tight">
  <span className="block">
    {track === "salesforce" ? t("hero.title_salesforce") : t("hero.title_itops")}
  </span>
  <span className="mt-2 block text-2xl font-semibold text-cyan-700 dark:text-cyan-200">
    {track === "salesforce" ? t("hero.subtitle_salesforce") : t("hero.subtitle_itops")}
  </span>
</h1>

        <p className="mt-5 max-w-2xl text-muted">
          {track === "salesforce" ? t("hero.intro_salesforce") : t("hero.intro_itops")}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-medium text-black hover:opacity-90 soft-ring"
            href="#contact"
          >
            {t("cta.call")}
          </a>
          <a
            className="rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 px-5 py-2 text-sm hover:bg-black/10 dark:hover:bg-white/10 soft-ring"
            href="/cv.pdf"
          >
            {t("cta.downloadCv")}
          </a>
        </div>

        <p className="mt-4 text-xs text-muted-2">
          {t("hero.note")}
        </p>
      </div>
    </div>
  );
}
