"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { openContactModal } from "./ContactModal";

const NAV_LINKS = [
  { label: "Home", href: "/#hero", sectionId: "hero" },
  { label: "Experience", href: "/#experience", sectionId: "experience" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "Research", href: "/#research", sectionId: "research" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const sectionIds = NAV_LINKS.map((link) => link.sectionId);
    let ticking = false;

    const updateActiveSection = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((element): element is HTMLElement => element !== null);

      if (sections.length === 0) {
        return;
      }

      const activationOffset = Math.max(140, window.innerHeight * 0.18);
      const activationLine = window.scrollY + activationOffset;
      const orderedSections = sections
        .map((section) => ({
          id: section.id,
          top: section.getBoundingClientRect().top + window.scrollY,
        }))
        .sort((a, b) => a.top - b.top);

      let nextActiveSection = orderedSections[0].id;

      for (const section of orderedSections) {
        if (section.top <= activationLine) {
          nextActiveSection = section.id;
          continue;
        }

        break;
      }

      setActiveSection((current) =>
        current === nextActiveSection ? current : nextActiveSection
      );
    };

    const requestUpdate = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [isHomePage]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-outline-variant/10 shadow-ambient"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <Link
          href="/"
          onClick={() => {
            setActiveSection("hero");
            setMobileOpen(false);
          }}
          className="font-display text-on-surface text-lg font-extrabold tracking-tight"
        >
          DST<span className="text-primary">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = isHomePage && activeSection === link.sectionId;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setActiveSection(link.sectionId)}
                className={`relative font-sans text-[0.75rem] font-bold uppercase tracking-[0.15em] transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
          <button
            onClick={openContactModal}
            className="bg-gradient-primary text-on-primary rounded-full px-5 py-2 font-sans text-[0.75rem] font-bold tracking-wide transition-all hover:brightness-105 active:scale-95"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-on-surface md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="glass border-t border-outline-variant/10 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-8 py-4">
            {NAV_LINKS.map((link) => {
              const isActive = isHomePage && activeSection === link.sectionId;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.sectionId);
                    setMobileOpen(false);
                  }}
                  className={`rounded-lg px-4 py-3 font-sans text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-primary/5 text-primary"
                      : "text-on-surface-variant hover:bg-surface-container-low"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              onClick={() => { openContactModal(); setMobileOpen(false); }}
              className="bg-gradient-primary text-on-primary mt-2 rounded-full px-5 py-3 text-center font-sans text-sm font-bold tracking-wide"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
