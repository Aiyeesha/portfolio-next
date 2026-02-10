"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
};

type LatestPostsProps = {
  /** Optional locale forwarded from a Server Component (e.g. app/[locale]/page.tsx). */
  locale?: "en" | "fr";
  className?: string;
};

export default function LatestPosts({ className = "", locale: localeProp }: LatestPostsProps) {
  const t = useTranslations();
  // Hook must be called unconditionally; we use `localeProp` when provided.
  const hookLocale = useLocale() as "en" | "fr";
  const locale = localeProp ?? hookLocale;
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        const res = await fetch(`/api/blog/latest?locale=${locale}&limit=2`);
        const data = await res.json();
        if (!cancelled && data?.ok) setPosts(data.posts || []);
      } catch {
        // ignore
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [locale]);

  return (
    <div className={className}>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {loading ? (
          <>
            <div className="card p-6 text-muted-2">{t("blog.latest_loading")}</div>
            <div className="card p-6 text-muted-2">{t("blog.latest_loading")}</div>
          </>
        ) : posts.length ? (
          posts.map((p) => (
            <Link key={p.slug} href={`/${locale}/blog/${p.slug}`} className="card p-6 hover:bg-black/10 dark:hover:bg-white/5 soft-ring">
              <div className="text-xs text-muted-2">{p.date}</div>
              <div className="mt-2 text-xl font-semibold">{p.title}</div>
              <div className="mt-2 text-muted">{p.excerpt}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
            </Link>
          ))
        ) : (
          <div className="card p-6 text-muted md:col-span-2">
            {t("blog.latest_empty")}
          </div>
        )}
      </div>

      <div className="mt-5">
        <Link href={`/${locale}/blog`} className="text-sm text-cyan-700 dark:text-cyan-200 hover:opacity-90">
          {t("blog.latest_cta")} →
        </Link>
      </div>
    </div>
  );
}
