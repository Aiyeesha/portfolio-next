import { getTranslations } from "next-intl/server";

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";

  return (
    <div className="py-14">
      <h1 className="text-3xl font-semibold">{t("title")}</h1>

      <div className="mt-8 grid gap-6">
        <section className="card p-6">
          <h2 className="text-lg font-semibold">{t("analyticsTitle")}</h2>
          <p className="text-muted-2 mt-2 text-sm">{t("analyticsBody")}</p>
        </section>

        <section className="card p-6">
          <h2 className="text-lg font-semibold">{t("cookiesTitle")}</h2>
          <p className="text-muted-2 mt-2 text-sm">{t("cookiesBody")}</p>
        </section>

        <section className="card p-6">
          <h2 className="text-lg font-semibold">{t("formTitle")}</h2>
          <p className="text-muted-2 mt-2 text-sm">{t("formBody")}</p>
          <p className="text-muted-2 mt-3 text-sm">{t("retention")}</p>
          {contactEmail ? (
            <p className="text-muted-2 mt-3 text-sm">{t("contact", { email: contactEmail })}</p>
          ) : null}
        </section>
      </div>
    </div>
  );
}
