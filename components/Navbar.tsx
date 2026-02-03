"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import ThemeToggle from "./ThemeToggle";
import TrackToggle from "./TrackToggle";
import LocaleSwitcher from "./LocaleSwitcher";
import useActiveSection from "./useActiveSection";
import useHashSync from "./useHashSync";
import ScrollProgress from "./ScrollProgress";
import NavbarPill from "./NavbarPill";

const SECTION_IDS = ["about","skills","experience","services","testimonials","projects","blog","contact"] as const;

export default function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] || "en") as "en" | "fr";

  const activeId = useActiveSection([...SECTION_IDS]);
  useHashSync(activeId);

  const [mobileOpen, setMobileOpen] = useState(false);

  
  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
// Close on Escape + prevent background scroll when menu is open
  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  
useEffect(() => {
  // Focus management for mobile menu: trap focus when open and restore focus when closed.
  const onKeyDown = (e: KeyboardEvent) => {
    if (!mobileOpen) return;

    if (e.key === "Escape") {
      e.preventDefault();
      // Close by clicking the menu button if present, so state stays consistent.
      menuButtonRef.current?.click();
      return;
    }

    if (e.key !== "Tab") return;

    const container = menuRef.current;
    if (!container) return;

    const focusables = Array.from(
      container.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => !el.hasAttribute("disabled"));

    if (focusables.length === 0) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement as HTMLElement | null;

    if (e.shiftKey) {
      if (active === first || !container.contains(active)) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (active === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  document.addEventListener("keydown", onKeyDown);
  return () => document.removeEventListener("keydown", onKeyDown);
}, [mobileOpen]);

useEffect(() => {
  if (mobileOpen) {
    // Focus first focusable element inside menu on open.
    setTimeout(() => {
      const container = menuRef.current;
      const first = container?.querySelector<HTMLElement>('a[href], button:not([disabled])');
      first?.focus();
    }, 0);
  } else {
    // Restore focus to menu button on close.
    menuButtonRef.current?.focus();
  }
}, [mobileOpen]);
const linkClass = (id: string) =>
    `relative z-10 rounded-full px-3 py-2 text-sm transition-colors soft-ring ${
      activeId === id
        ? "text-cyan-700 dark:text-cyan-200"
        : "text-slate-600 hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
    }`;

  const mobileLinkClass = (id: string) =>
    `block w-full rounded-xl px-4 py-3 text-left text-sm transition-colors soft-ring ${
      activeId === id
        ? "bg-cyan-500/10 text-cyan-700 dark:text-cyan-200"
        : "text-slate-700 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
    }`;

  const sections = [
    { id: "about", label: t("nav.about") },
    { id: "skills", label: t("nav.skills") },
    { id: "experience", label: t("nav.experience") },
    { id: "services", label: t("nav.services") },
    { id: "testimonials", label: t("nav.testimonials") },
    { id: "projects", label: t("nav.projects") },
    { id: "blog", label: t("nav.blog") },
    { id: "contact", label: t("nav.contact") }
  ] as const;

  return (
    <>
      <ScrollProgress />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-[#070B1A]/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={`/${locale}`} className="flex items-center gap-3 soft-ring rounded-2xl">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-cyan-500/15 text-cyan-700 dark:text-cyan-200 font-semibold">
              S
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">SWANN</div>
              <div className="text-xs text-muted-2">{t("nav.tagline")}</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            id="desktop-nav"
            className="relative hidden items-center gap-2 overflow-hidden rounded-full px-1 md:flex"
          >
            <NavbarPill activeId={activeId} containerId="desktop-nav" />
            {sections.map((s) => (
              <a
                key={s.id}
                className={linkClass(s.id)}
                data-section={s.id}
                href={`#${s.id}`}
              >
                {s.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <TrackToggle />
            <ThemeToggle />
            <LocaleSwitcher current={locale} />

            <a
              data-section="contact"
              href="#contact"
              className="hidden sm:inline-flex rounded-full bg-cyan-500 px-5 py-2 text-sm font-medium text-black hover:opacity-90 soft-ring"
            >
              {t("cta.workWithMe")}
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex md:hidden rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 soft-ring"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[80] md:hidden" ref={menuRef}>
          <button
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu overlay"
          />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm border-l border-black/10 bg-white p-5 shadow-xl dark:border-white/10 dark:bg-[#070B1A]">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">{t("nav.menu")}</div>
              <button
                type="button"
                className="rounded-full border border-black/10 bg-black/5 px-3 py-2 text-sm hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 soft-ring"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 space-y-2">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  data-section={s.id}
                  className={mobileLinkClass(s.id)}
                  onClick={() => setMobileOpen(false)}
                >
                  {s.label}
                </a>
              ))}
            </div>

            <div className="mt-6 border-t border-black/10 pt-5 dark:border-white/10">
              <a
                href="#contact"
                className="inline-flex w-full justify-center rounded-xl bg-cyan-500 px-5 py-3 text-sm font-medium text-black hover:opacity-90 soft-ring"
                onClick={() => setMobileOpen(false)}
              >
                {t("cta.workWithMe")}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
