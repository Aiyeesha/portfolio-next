"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useTrack } from "./providers";
import ProfileFactsCard from "@/components/ProfileFactsCard";

export default function TrackAwareHero() {
  const t = useTranslations();
  const { track } = useTrack();

  // Public env vars (optional)
  const calendlyUrl = useMemo(() => process.env.NEXT_PUBLIC_CALENDLY_URL || "", []);
  const profilePdfUrl = useMemo(
    () => process.env.NEXT_PUBLIC_PROFILE_PDF_URL || "/profile.pdf",
    []
  );

  // Public env var (optional). If not set, we use the bundled avatar in /public/avatar.webp
  const avatarUrl = useMemo(
    () => process.env.NEXT_PUBLIC_AVATAR_URL || "/avatar.webp",
    []
  );
  const [src, setSrc] = useState<string>(avatarUrl);

  return (
    <div className="grid items-center gap-8 lg:gap-10 lg:grid-cols-[120px_1fr_400px]">
      {/* Avatar */}
      <div className="mx-auto lg:mx-0">
        <div className="relative h-[108px] w-[108px] lg:h-[112px] lg:w-[112px] overflow-hidden rounded-full ring-1 ring-black/10 dark:ring-white/10 shadow-[0_0_0_6px_rgba(34,211,238,0.08)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
  src={src}
  alt={t("hero.avatar_alt")}
  fill
  priority
  sizes="120px"
  className="object-cover"
  onError={() => setSrc("/avatar-placeholder.svg")}
/>

        </div>
      </div>

      {/* Text */}
      <div>
        {/* Proposition de valeur (above the fold) */}
        <p className="text-sm font-medium text-cyan-800 dark:text-cyan-200">
          {track === "salesforce" ? t("hero.value_salesforce") : t("hero.value_itops")}
        </p>

        <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
          <span className="block">
            {track === "salesforce" ? t("hero.title_salesforce") : t("hero.title_itops")}
          </span>
          <span className="mt-2 block text-lg sm:text-xl font-semibold text-cyan-700 dark:text-cyan-200">
            {track === "salesforce" ? t("hero.subtitle_salesforce") : t("hero.subtitle_itops")}
          </span>
        </h1>

        <p className="mt-3 max-w-2xl text-muted text-base sm:text-lg">
          {track === "salesforce" ? t("hero.intro_salesforce") : t("hero.intro_itops")}
        </p>

        {/* Proof chips (fast scanning) */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="chip">{t("hero.proof1")}</span>
          <span className="chip">{t("hero.proof2")}</span>
          <span className="chip">{t("hero.proof3")}</span>
        </div>

        {/* CTAs */}
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-medium text-black hover:opacity-90 soft-ring"
            href="#contact"
          >
            {t("cta.message")}
          </a>

          <a
            className={`rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 px-5 py-2 text-sm hover:bg-black/10 dark:hover:bg-white/10 soft-ring ${
              calendlyUrl ? "" : "pointer-events-none opacity-50"
            }`}
            href={calendlyUrl || "#"}
            target={calendlyUrl ? "_blank" : undefined}
            rel={calendlyUrl ? "noreferrer" : undefined}
            aria-disabled={!calendlyUrl}
            title={!calendlyUrl ? t("contact.bookCallMissing") : undefined}
          >
            {t("cta.call15")}
          </a>

          <a
            className="rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 px-5 py-2 text-sm hover:bg-black/10 dark:hover:bg-white/10 soft-ring"
            href={profilePdfUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t("cta.downloadProfile")}
          </a>
        </div>

        <p className="mt-3 text-xs text-muted-2">{t("hero.note")}</p>
      </div>

      {/* At a glance (desktop: right column) */}
      <div className="hidden lg:block">
        <ProfileFactsCard delayMs={140} />
      </div>

      {/* At a glance (mobile: below hero text) */}
      <div className="lg:hidden">
        <ProfileFactsCard delayMs={140} />
      </div>
    </div>
  );
}
