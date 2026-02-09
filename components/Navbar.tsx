"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import LocaleSwitcher from "./LocaleSwitcher";
import NavbarPill from "./NavbarPill";
import ScrollProgress from "./ScrollProgress";
import ThemeToggle from "./ThemeToggle";
import TrackToggle from "./TrackToggle";
import useActiveSection from "./useActiveSection";
import useHashSync from "./useHashSync";

const SECTION_IDS = ["skills","experience","services","testimonials","projects","blog","contact"] as const;

const MENU_ID = "mobile-menu";
const BRAND_INITIALS = (process.env.NEXT_PUBLIC_BRAND_INITIALS || "A").toUpperCase();


export default function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] || "en") as "en" | "fr";

  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "";

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  const spyActiveId = useActiveSection(isHome ? [...SECTION_IDS] : []);

  const routeActiveId = pathname.startsWith(`/${locale}/blog`)
    ? "blog"
    : pathname.startsWith(`/${locale}/projects`)
      ? "projects"
      : "skills";

  const activeId = isHome ? spyActiveId : routeActiveId;

  // Keep the hash in sync only on the one-page landing.
  // (Hooks must not be called conditionally.)
  useHashSync(isHome ? activeId : "");

  const [mobileOpen, setMobileOpen] = useState(false);
  const [workMenuOpen, setWorkMenuOpen] = useState(false);

  
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

  // Close the "Work with me" dropdown on outside click / Escape
  useEffect(() => {
    if (!workMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setWorkMenuOpen(false);
    };

    const onPointerDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      // Close if clicking outside the dropdown container
      if (!target?.closest?.("[data-workmenu]") ) {
        setWorkMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [workMenuOpen]);

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
    `relative z-10 rounded-full px-3 py-2 text-sm leading-none transition-colors soft-ring ${
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
    { id: "skills", label: t("nav.skills") },
    { id: "experience", label: t("nav.experience") },
    { id: "services", label: t("nav.services") },
    { id: "testimonials", label: t("nav.testimonials") },
    { id: "projects", label: t("nav.projects") },
    { id: "blog", label: t("nav.blog") },
    { id: "contact", label: t("nav.contact") }
  ] as const;

  const hrefFor = (id: (typeof SECTION_IDS)[number]) => {
    // On the landing, we scroll to the section.
    if (isHome) return `#${id}`;

    // On other pages, we route to the appropriate destination.
    // - Blog: go to the blog index page
    // - Others: go back to the landing with the right hash
    if (id === "blog") return `/${locale}/blog`;
    return `/${locale}/#${id}`;
  };

  return (
    <>
      <ScrollProgress />

      <header
        className="fixed inset-x-0 top-0 z-50 h-[var(--nav-h)] border-b border-black/10 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-[#070B1A]/70"
      >
        {/*
          Premium header layout:
          - Wider container (max-w-7xl) to prevent truncation.
          - 3-column grid: left identity / center nav / right controls.
          - Center column uses minmax(0,1fr) semantics via grid + min-w-0 on nav.
        */}
        <div className="mx-auto grid h-full max-w-7xl grid-cols-[auto,1fr,auto] items-center gap-4 px-4 lg:px-6">
          <Link href={`/${locale}`} className="flex items-center gap-3 soft-ring rounded-2xl">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-cyan-500/15 text-cyan-700 dark:text-cyan-200 font-semibold">
              {BRAND_INITIALS}
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Aïcha Imène DAHOUMANE</div>
              <div className="text-xs text-muted-2">{t("nav.tagline")}</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            id="desktop-nav"
            className="relative hidden h-11 min-w-0 items-center justify-center gap-2 overflow-hidden rounded-full px-1 xl:flex"
          >
            <NavbarPill activeId={activeId} containerId="desktop-nav" />
            {sections.map((s) => (
              <Link
                key={s.id}
                className={linkClass(s.id)}
                data-section={s.id}
                href={hrefFor(s.id)}
                aria-current={activeId === s.id ? "page" : undefined}

              >
                {s.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <TrackToggle />
            <ThemeToggle />
            <LocaleSwitcher current={locale} />

            {/* Desktop: Work with me dropdown (Message / Call 15 min) */}
            <div className="relative hidden sm:block" data-workmenu>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2 text-sm font-medium text-black hover:opacity-90 soft-ring"
                onClick={() => setWorkMenuOpen((v) => !v)}
                aria-expanded={workMenuOpen}
                aria-haspopup="menu"
              >
                {t("cta.workWithMe")} <span aria-hidden="true">▾</span>
              </button>

              {workMenuOpen ? (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl dark:border-white/10 dark:bg-[#070B1A]"
                >
                  <Link
                    role="menuitem"
                    href={hrefFor("contact")}
                    className="block px-4 py-3 text-sm hover:bg-black/5 dark:hover:bg-white/10"
                    onClick={() => setWorkMenuOpen(false)}
                  >
                    {t("cta.message")}
                  </Link>

                  <a
                    role="menuitem"
                    href={calendlyUrl || "#"}
                    target={calendlyUrl ? "_blank" : undefined}
                    rel={calendlyUrl ? "noreferrer" : undefined}
                    aria-disabled={!calendlyUrl}
                    className={`block px-4 py-3 text-sm hover:bg-black/5 dark:hover:bg-white/10 ${
                      calendlyUrl ? "" : "pointer-events-none opacity-50"
                    }`}
                    onClick={() => setWorkMenuOpen(false)}
                    title={!calendlyUrl ? t("contact.bookCallMissing") : undefined}
                  >
                    {t("cta.call15")}
                  </a>
                </div>
              ) : null}
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex xl:hidden rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 soft-ring"
              ref={menuButtonRef}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={t("a11y.openMenu")}
              aria-expanded={mobileOpen}
              aria-controls={MENU_ID}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[80] xl:hidden">
          <button
            className="absolute inset-0 bg-black/40"
            tabIndex={-1}
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
            aria-label={t("a11y.closeMenuOverlay")}
          />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm border-l border-black/10 bg-white p-5 shadow-xl dark:border-white/10 dark:bg-[#070B1A]"
            id={MENU_ID}
            role="dialog"
            aria-modal="true"
            aria-label={t("nav.menu")}
            ref={menuRef}>
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">{t("nav.menu")}</div>
              <button
                type="button"
                className="rounded-full border border-black/10 bg-black/5 px-3 py-2 text-sm hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 soft-ring"
                onClick={() => setMobileOpen(false)}
                aria-label={t("a11y.closeMenu")}
              >
                ✕
              </button>
            </div>

            <div className="mt-5 space-y-2">
              {sections.map((s) => (
                <Link
                  key={s.id}
                  href={hrefFor(s.id)}
                  data-section={s.id}
                  className={mobileLinkClass(s.id)}
                  onClick={() => setMobileOpen(false)}
                  aria-current={activeId === s.id ? "page" : undefined}

                >
                  {s.label}
                </Link>
              ))}
            </div>

            <div className="mt-6 border-t border-black/10 pt-5 dark:border-white/10">
              <div className="grid gap-2">
                <Link
                  href={hrefFor("contact")}
                  className="inline-flex w-full justify-center rounded-xl bg-cyan-500 px-5 py-3 text-sm font-medium text-black hover:opacity-90 soft-ring"
                  onClick={() => setMobileOpen(false)}
                >
                  {t("cta.message")}
                </Link>

                <a
                  href={calendlyUrl || "#"}
                  target={calendlyUrl ? "_blank" : undefined}
                  rel={calendlyUrl ? "noreferrer" : undefined}
                  aria-disabled={!calendlyUrl}
                  className={`inline-flex w-full justify-center rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-5 py-3 text-sm hover:bg-black/10 dark:hover:bg-white/10 soft-ring ${
                    calendlyUrl ? "" : "pointer-events-none opacity-50"
                  }`}
                  onClick={() => setMobileOpen(false)}
                  title={!calendlyUrl ? t("contact.bookCallMissing") : undefined}
                >
                  {t("cta.call15")}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}