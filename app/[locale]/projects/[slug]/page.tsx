import { projects } from "@/content/projects";
import { projectDetails } from "@/content/projectDetails";
import { notFound } from "next/navigation";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";

type Params = { slug: string; locale: string };

function Stat({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="card p-5">
      <div className="text-xs text-muted-2">{label}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      {note ? <div className="mt-2 text-sm text-muted-2">{note}</div> : null}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-4 card p-6">{children}</div>
    </section>
  );
}

export default async function ProjectDetailsPage({ params }: { params: Promise<Params> }) {
  const { slug, locale } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const extra = projectDetails.find((d) => d.slug === slug);
  const localized = extra?.locales?.[locale as "en" | "fr"] ?? extra?.locales?.en;

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#070B1A] dark:text-white">
      <div className="page-gradient" />
      <main className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <div className="text-sm text-muted-2">Project</div>
            <h1 className="mt-2 text-4xl font-semibold leading-tight">{project.title}</h1>
            <p className="mt-4 max-w-3xl text-muted">{localized?.heroSubtitle ?? project.excerpt}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={`/${locale}#projects`}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm hover:bg-white/10 soft-ring"
              >
                ← Back to projects
              </Link>

              {project.pdfUrl && (
                <a
                  href={project.pdfUrl}
                  className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-medium text-black hover:opacity-90 soft-ring"
                >
                  Requirements (PDF)
                </a>
              )}
            </div>
          </div>

          <div className="grid w-full gap-3 md:max-w-sm">
            <Stat label="Track" value={project.track === "salesforce" ? "Salesforce" : "IT Ops"} />
            <Stat label="Type" value={project.categories[0] ?? "—"} />
            <Stat label="Scope" value={project.badge?.label ?? "—"} />
          </div>
        </div>

        {extra?.gallery?.length ? (
          <Section title={locale === "fr" ? "Aperçu" : "Overview"}>
            <ImageGallery images={extra.gallery} />
            <p className="mt-4 text-sm text-muted-2">
              {locale === "fr"
                ? "Place tes captures dans /public/projects/<slug>/ (png/jpg/svg) et mets à jour content/projectDetails.ts."
                : "Put your screenshots in /public/projects/<slug>/ (png/jpg/svg) and update content/projectDetails.ts."}
            </p>
          </Section>
        ) : null}

        {(localized?.sections ?? []).map((s, idx) => {
          if (s.type === "bullets") {
            return (
              <Section key={`${s.title}-${idx}`} title={s.title}>
                <ul className="list-disc pl-5 text-muted space-y-2">
                  {s.items.map((it, i) => (
                    <li key={`${i}-${it.slice(0, 16)}`}>{it}</li>
                  ))}
                </ul>
              </Section>
            );
          }

          if (s.type === "text") {
            return (
              <Section key={`${s.title}-${idx}`} title={s.title}>
                <div className="text-muted space-y-3">
                  {s.paragraphs.map((p, i) => (
                    <p key={`${i}-${p.slice(0, 16)}`}>{p}</p>
                  ))}
                </div>
              </Section>
            );
          }

          if (s.type === "metrics") {
            return (
              <section key={`${s.title}-${idx}`} className="mt-10">
                <h2 className="text-xl font-semibold">{s.title}</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {s.items.map((m, i) => (
                    <Stat key={`${m.label}-${i}`} label={m.label} value={m.value} note={m.note} />
                  ))}
                </div>
              </section>
            );
          }

          if (s.type === "timeline") {
            return (
              <Section key={`${s.title}-${idx}`} title={s.title}>
                <ol className="relative border-l border-white/10 pl-5 text-muted space-y-4">
                  {s.steps.map((st, i) => (
                    <li key={`${st.title}-${i}`} className="relative">
                      <div className="absolute -left-[6px] mt-1 h-3 w-3 rounded-full bg-cyan-400/70" />
                      <div className="font-medium text-strong">{st.title}</div>
                      <div className="text-sm">{st.description}</div>
                    </li>
                  ))}
                </ol>
              </Section>
            );
          }

          return null;
        })}
      </main>
    </div>
  );
}
