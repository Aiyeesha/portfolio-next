import SkipToContent from "@/components/SkipToContent";
import Navbar from "@/components/Navbar";
import TrackAwareHero from "./track-aware-hero";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import Testimonials from "@/components/Testimonials";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectsSection from "@/components/ProjectsSection";
import ContactForm from "@/components/ContactForm";
import ContactQuickLinks from "@/components/ContactQuickLinks";
import TrackAwareSkills from "@/components/TrackAwareSkills";
import TrackAwareServices from "@/components/TrackAwareServices";
import LatestPosts from "@/components/LatestPosts";
import { getExperienceItems, getCertificationItems } from "@/content/experience";
import { testimonials } from "@/content/testimonials";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations();
  const locale = useLocale() as "en" | "fr";
  const experienceItems = getExperienceItems(locale);
  const certificationItems = getCertificationItems(locale);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#070B1A] dark:text-white">
      <div className="page-gradient" />
      <div className="relative z-10">
        <SkipToContent targetId="main" label={t("a11y.skip")} />
      <Navbar />

        <main id="main" className="mx-auto max-w-6xl px-6 pt-28">
          {/* HERO */}
          <section id="about" className="py-10">
            <TrackAwareHero />
          </section>

          {/* SKILLS */}
          <section id="skills" className="py-14">
            <Reveal>
              <h2 className="text-3xl font-semibold">{t("sections.skills_title")}</h2>
            </Reveal>
            <Reveal delayMs={70}>
              <p className="mt-3 text-muted">{t("sections.skills_subtitle")}</p>
            </Reveal>

                        <TrackAwareSkills locale={locale} />
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="py-14">
            <Reveal>
              <h2 className="text-3xl font-semibold">{t("sections.experience_title")}</h2>
            </Reveal>
            <Reveal delayMs={70}>
              <p className="mt-3 text-muted">{t("sections.experience_subtitle")}</p>
            </Reveal>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Reveal delayMs={110}>
                <div>
                  <h3 className="text-xl font-semibold">{t("sections.roles_title")}</h3>
                  <div className="mt-4">
                    <Accordion items={experienceItems} defaultOpenId="exp-1" />
                  </div>
                </div>
              </Reveal>

              <Reveal delayMs={170}>
                <div>
                  <h3 className="text-xl font-semibold">{t("sections.certifications_title")}</h3>
                  <div className="mt-4">
                    <Accordion items={certificationItems} />
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* SERVICES */}
          <section id="services" className="py-14">
            <Reveal>
              <h2 className="text-3xl font-semibold">{t("sections.services_title")}</h2>
            </Reveal>
            <Reveal delayMs={70}>
              <p className="mt-3 text-muted">{t("sections.services_subtitle")}</p>
            </Reveal>

                        <TrackAwareServices locale={locale} />
          </section>

          {/* TESTIMONIALS */}
          <section id="testimonials" className="py-14">
            <Reveal>
              <h2 className="text-3xl font-semibold">{t("sections.testimonials_title")}</h2>
            </Reveal>
            <Reveal delayMs={70}>
              <p className="mt-3 text-muted">{t("sections.testimonials_subtitle")}</p>
            </Reveal>

            <div className="mt-8">
              <Testimonials items={testimonials} />
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="py-14">
            <Reveal>
              <h2 className="text-3xl font-semibold">{t("sections.projects_title")}</h2>
            </Reveal>
            <Reveal delayMs={70}>
              <p className="mt-3 text-muted">{t("sections.projects_subtitle")}</p>
            </Reveal>

            <div className="mt-8">
              <ProjectsSection locale={locale} />
            </div>
          </section>

          {/* BLOG */}
          <section id="blog" className="py-14">
            <Reveal>
              <h2 className="text-3xl font-semibold">{t("sections.blog_title")}</h2>
            </Reveal>
            <Reveal delayMs={70}>
              <p className="mt-3 text-muted">{t("sections.blog_subtitle")}</p>
            </Reveal>

            <div className="mt-8">
              <LatestPosts locale={locale} />
            </div>

            <div className="mt-6">
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-5 py-2 text-sm hover:bg-black/10 dark:hover:bg-white/10 soft-ring"
                href={`/${locale}/blog`}
              >
                {t("blogIndex.ctaAllPosts")} →
              </Link>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="py-14">
            <Reveal>
              <h2 className="text-3xl font-semibold">{t("sections.contact_title")}</h2>
            </Reveal>
            <Reveal delayMs={70}>
              <p className="mt-3 text-muted">{t("sections.contact_subtitle")}</p>
            </Reveal>

            <div className="mt-6 grid gap-4 lg:grid-cols-[320px_1fr]">
              <Reveal delayMs={110}>
                <ContactQuickLinks />
              </Reveal>

              <Reveal delayMs={170}>
                <ContactForm />
              </Reveal>
            </div>
          </section>
        </main>

        <footer className="border-t border-black/10 dark:border-white/10 py-10">
          <div className="mx-auto max-w-6xl px-6 text-sm text-muted-2">
            © {new Date().getFullYear()} Aïcha Imène DAHOUMANE — Built with Next.js
          </div>
        </footer>
      </div>
    </div>
  );
}
