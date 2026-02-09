import Reveal from "@/components/Reveal";
import { useTranslations } from "next-intl";

/**
 * ProfileNarrative
 * ----------------
 * The long-form profile text (fully localized), without extra section padding.
 * This is intended to live directly under the Hero.
 */
export default function ProfileNarrative() {
  const t = useTranslations();

  return (
    <div className="mx-auto max-w-3xl">
      <Reveal>
        <p className="text-muted">{t("profile.p1")}</p>
      </Reveal>

      <Reveal delayMs={60}>
        <p className="mt-4 text-muted">{t("profile.p2")}</p>
      </Reveal>

      <Reveal delayMs={90}>
        <p className="mt-4 text-muted">{t("profile.p3")}</p>
      </Reveal>

      <Reveal delayMs={120}>
        <p className="mt-4 text-muted">{t("profile.p4")}</p>
      </Reveal>
    </div>
  );
}
