import type { MetadataRoute } from "next";
import { readAllPosts } from "@/content/blog/fs";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const pages: MetadataRoute.Sitemap = [
    { url: `${base}/en`, lastModified: new Date() },
    { url: `${base}/fr`, lastModified: new Date() },
    { url: `${base}/en/blog`, lastModified: new Date() },
    { url: `${base}/fr/blog`, lastModified: new Date() },
    { url: `${base}/en/blog/tags`, lastModified: new Date() },
    { url: `${base}/fr/blog/tags`, lastModified: new Date() }
  ];

  for (const locale of ["en","fr"] as const) {
    const posts = readAllPosts(locale);
    for (const p of posts) {
      pages.push({
        url: `${base}/${locale}/blog/${p.slug}`,
        lastModified: new Date(p.date)
      });
    }
  }

  return pages;
}
