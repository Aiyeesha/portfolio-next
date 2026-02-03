export type BlogLocale = "en" | "fr";

export type BlogPostMeta = {
  slug: string;
  locale: BlogLocale;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  tags: string[];
};

/**
 * Stage 9 (fixed3)
 * ----------------
 * IMPORTANT:
 * - Do NOT import MDX modules here.
 *   In Next.js Server Components, importing MDX (which uses createContext via @mdx-js/react)
 *   can trigger: "createContext only works in Client Components".
 *
 * We keep this file SERVER-SAFE by storing metadata only.
 * The actual MDX rendering is done behind a Client Component boundary (see BlogPostRenderer).
 */
export const posts: BlogPostMeta[] = [
  {
    slug: "next-intl-app-router",
    locale: "en",
    title: "Next.js App Router i18n with next-intl (practical setup)",
    excerpt: "A clean, production-friendly i18n setup: routing, messages, proxy, and UX tips.",
    date: "2026-02-02",
    tags: ["Next.js", "i18n", "next-intl"]
  },
  {
    slug: "next-intl-app-router",
    locale: "fr",
    title: "i18n Next.js App Router avec next-intl (mise en place pratique)",
    excerpt: "Une configuration i18n propre et “prod-ready” : routage, messages, proxy, et bonnes pratiques UX.",
    date: "2026-02-02",
    tags: ["Next.js", "i18n", "next-intl"]
  },
  {
    slug: "salesforce-cicd-github-actions",
    locale: "en",
    title: "Salesforce CI/CD with GitHub Actions (a pragmatic pipeline)",
    excerpt: "From scratch to a robust pipeline: validation, tests, and safe deployment patterns.",
    date: "2026-02-02",
    tags: ["Salesforce", "CI/CD", "GitHub Actions"]
  },
  {
    slug: "salesforce-cicd-github-actions",
    locale: "fr",
    title: "CI/CD Salesforce avec GitHub Actions (pipeline pragmatique)",
    excerpt: "De zéro à un pipeline robuste : validation, tests, et patterns de déploiement fiables.",
    date: "2026-02-02",
    tags: ["Salesforce", "CI/CD", "GitHub Actions"]
  }
];

export function getPosts(locale: BlogLocale) {
  return posts
    .filter((p) => p.locale === locale)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(locale: BlogLocale, slug: string) {
  return posts.find((p) => p.locale === locale && p.slug === slug) ?? null;
}
