"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import {
  ABOUT_DESCRIPTION,
  ABOUT_HEADLINE,
  ABOUT_INFO,
  CERTIFICATIONS,
  CERTIFICATIONS_HEADLINE,
  CERTIFICATIONS_INTRO,
  CERTIFICATIONS_LINK_LABEL,
  CONTACT_INTRO,
  CONTACT_LINKEDIN_LABEL,
  EMAIL,
  EXPERIENCES,
  EXPERIENCE_HEADLINE,
  EXPERIENCE_INTRO,
  JOURNEY,
  JOURNEY_HEADLINE,
  JOURNEY_INTRO,
  LINKEDIN_URL,
  PROJECTS,
  PROJECTS_HEADLINE,
  PROJECTS_INTRO,
} from "./content";

const NAV_ITEMS = [
  "About",
  "Experience",
  "Projects",
  "Certifications",
  "Leadership",
  "Contact",
];

function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split("**").map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-bold">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      /* abaikan */
    }
  };

  {/* Theme */}
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(saved ? saved === "dark" : prefersDark);
    } catch {
      /* localStorage tidak tersedia: tetap pakai mode terang */
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    const next = !darkMode;

    const applyTheme = () => {
      flushSync(() => setDarkMode(next));
      document.documentElement.classList.toggle("dark", next);
    };

    const doc = document as Document & {
      startViewTransition?: (callback: () => void) => unknown;
    };

    if (doc.startViewTransition) {
      doc.startViewTransition(applyTheme);
    } else {
      setDarkMode(next);
    }

    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* abaikan */
    }
  };

  {/* Active navigation section */}
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => item.toLowerCase());

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-paper text-ink">
      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-12 lg:px-20">

          {/* Logo */}
          <a
            href="#home"
            className="font-space-mono text-sm font-bold tracking-[0.08em]"
          >
            Naifa.
          </a>

          {/* Navigation Links (desktop) */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item}
                  href={`#${sectionId}`}
                  className={`group relative inline-block font-glacial text-sm transition-all duration-200 hover:scale-[1.04] ${
                    isActive
                      ? "font-bold text-accent"
                      : "text-ink/65 hover:text-accent"
                  }`}
                >
                  {item}

                  {/* Underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-accent transition-transform duration-200 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-sm transition-all hover:border-ink/30"
            >
              {darkMode ? "☼" : "☾"}
            </button>

            {/* Email Me */}
            <a
              href={`mailto:${EMAIL}`}
              onClick={copyEmail}
              className="font-space-mono hidden min-w-[8.5rem] rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-paper transition-all hover:bg-brand-hover text-center sm:block dark:bg-ink dark:text-paper dark:hover:bg-[#fff7e8]"
            >
              {emailCopied ? "Email Copied ✓" : "Email Me"}
            </a>

            {/* Menu Button (mobile) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-base transition-all hover:border-ink/30 md:hidden"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="border-t border-ink/10 bg-paper px-6 pb-6 pt-2 md:hidden"
          >
            {NAV_ITEMS.map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item}
                  href={`#${sectionId}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block border-b border-ink/10 py-4 font-glacial text-base ${
                    isActive ? "font-bold text-accent" : "text-ink/75"
                  }`}
                >
                  {item}
                </a>
              );
            })}

            <a
              href={`mailto:${EMAIL}`}
              onClick={() => {
                copyEmail();
                setMenuOpen(false);
              }}
              className="font-space-mono mt-5 block rounded-full bg-brand px-5 py-3 text-center text-sm font-medium text-paper dark:bg-ink dark:text-paper"
            >
              Email Me
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 lg:px-10"
      >

        <div className="relative portfolio-container">
          <div className="max-w-5xl">

            {/* Small intro */}
            <p className="font-glacial mb-6 text-sm font-medium tracking-[0.18em] text-brand uppercase dark:text-muted">
              Information Systems Fresh Graduate
            </p>

            {/* Name */}
            <h1 className="leading-[0.9] tracking-[0.125em]">
              <span className="font-perandory text-4xl sm:text-5xl md:text-6xl lg:text-[5.75rem]">
                <span className="font-edwardian mr-[0.175em] text-[1.6em]">
                  N
                </span>
                aifa
              </span>{" "}

              <span className="font-perandory text-4xl sm:text-5xl md:text-6xl lg:text-[5.75rem]">
                <span className="font-edwardian mr-[0.175em] text-[1.6em]">
                  M
                </span>
                umtazah
              </span>

              <br />

              <span className="font-perandory text-4xl text-brand sm:text-5xl md:text-6xl lg:text-[5.75rem]">
                <span className="font-edwardian mr-[0.175em] text-[1.6em]">
                  R
                </span>
                endiga
              </span>
            </h1>

            {/* Roles */}
            <p className="font-space-mono mt-10 text-sm sm:text-base">
              Data Analyst&nbsp; · &nbsp;Data Engineer&nbsp; · &nbsp;Business Intelligence
            </p>

            {/* Description */}
            <p className="font-glacial mt-5 max-w-3xl text-base leading-7 text-muted sm:text-lg">
              Turning raw data into business insights through SQL, Python,
              and Power BI dashboards.
            </p>

            {/* Availability */}
            <p className="font-glacial mt-8 inline-block border-b border-brand pb-1 text-sm text-accent">
              Currently open to early-career opportunities.
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="font-glacial absolute bottom-8 right-0 hidden items-center gap-3 text-xs tracking-[0.18em] text-muted/70 uppercase md:flex">
            <span>Scroll to explore</span>
            <span className="text-lg">↓</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative scroll-mt-20 overflow-x-clip bg-paper px-6 pt-14 pb-12 text-ink lg:px-10 lg:pt-18 lg:pb-20"
      >
        <div className="portfolio-container">

          {/* Photo + Statement */}
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-16">

            {/* Left — Photo */}
            <div className="relative mx-auto w-full max-w-xl lg:mx-0">

              {/* Ukuran foto + lace */}
              <div className="relative aspect-[4/5] origin-center scale-105 lg:scale-[0.97]">

                {/* Lace Paper */}
                <Image
                  src="/images/lace-paper.png"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 90vw"
                  className="object-contain"
                />

                {/* Photo */}
                <div className="absolute left-[14%] top-[18%] w-[55%] rotate-[-3deg] overflow-hidden rounded-[5px] shadow-xl">
                  <Image
                    src="/images/naifa-photo.jpeg"
                    alt="Portrait of Naifa Mumtazah Rendiga"
                    width={0}
                    height={0}
                    sizes="(min-width: 1024px) 30vw, 55vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right — Personal Branding */}
            <div>

              {/* Main Statement */}
              <h2 className="max-w-3xl leading-[1.05] tracking-[0.01em]">
                <span className="font-perandory text-4xl sm:text-5xl lg:text-[3.4rem]">
                  {ABOUT_HEADLINE}
                </span>
              </h2>

              {/* Description */}
              <p className="font-glacial mt-8 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                <Rich text={ABOUT_DESCRIPTION} />
              </p>
            </div>
          </div>

          {/* Quick Information (full width) */}
          <div className="mt-16 border-b border-ink/15 lg:mt-5">
            {ABOUT_INFO.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[100px_1fr] items-baseline gap-6 border-t border-ink/15 py-4 sm:grid-cols-[160px_1fr]"
              >
                <span className="font-space-mono text-sm uppercase tracking-[0.12em] text-ink/50">
                  {row.label}
                </span>

                <div>
                  {/* Main Information */}
                  <p className="font-glacial text-base sm:text-lg">
                    {row.title}
                    {row.titleMeta && (
                      <span className="font-space-mono text-sm text-ink/45">
                        <span className="mx-2.5">•</span>
                        {row.titleMeta}
                      </span>
                    )}
                  </p>

                  {/* Detail */}
                  {row.detail && (
                    <p className="font-glacial mt-1 text-base text-muted sm:text-lg">
                      <Rich text={row.detail} />
                      {row.detailMeta && (
                        <span className="font-space-mono text-sm text-ink/45">
                          <span className="mx-2.5">•</span>
                          {row.detailMeta}
                        </span>
                      )}
                    </p>
                  )}

                  {/* Note */}
                  {row.note && (
                    <p className="font-glacial mt-2 text-base italic text-muted">
                      <Rich text={row.note} />
                    </p>
                  )}

                  {/* Tags */}
                  {row.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {row.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-ink/15 px-3 py-1.5 font-space-mono text-xs tracking-[0.04em] text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="relative scroll-mt-20 bg-paper px-6 py-20 text-ink lg:px-10 lg:py-28"
      >
        <div className="portfolio-container">

          {/* Section Introduction */}
          <div className="grid gap-10 border-b-2 border-ink pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
            <div>
              <h2 className="max-w-2xl font-perandory text-5xl leading-[0.95] tracking-[0.01em] sm:text-6xl lg:text-[3.9rem]">
                {EXPERIENCE_HEADLINE}
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-md font-glacial text-base leading-7 text-muted sm:text-lg">
                {EXPERIENCE_INTRO}
              </p>
            </div>
          </div>

          {/* Experience List */}
          <div>
            {EXPERIENCES.map((exp) => (
              <article
                key={exp.organization}
                className="border-b border-ink/15 py-12"
              >
                {/* Title + Date (di HP, tanggal tampil di atas) */}
                <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <h3 className="font-glacial text-2xl font-bold sm:text-3xl">
                    {exp.organization}
                  </h3>

                  <p className="shrink-0 font-space-mono text-sm tracking-[0.08em] text-ink/50">
                    {exp.date}
                  </p>
                </div>

                <p className="mt-3 font-space-mono text-sm font-bold uppercase tracking-[0.06em] text-accent">
                  {exp.role}
                </p>

                {/* Highlights */}
                <div className="mt-7 space-y-4">
                  {exp.highlights.map((text) => (
                    <p
                      key={text}
                      className="relative pl-4 font-glacial text-base leading-7 before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:rounded-full before:bg-accent"
                    >
                      <Rich text={text} />
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-ink/15 px-3 py-1.5 font-space-mono text-xs tracking-[0.04em] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative scroll-mt-20 bg-paper px-6 py-20 text-ink lg:px-10 lg:py-28"
      >
        <div className="portfolio-container">

          {/* Section Introduction */}
          <div className="grid gap-10 border-b-2 border-ink pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <h2 className="max-w-2xl font-perandory text-4xl leading-[0.95] tracking-[0.01em] sm:text-5xl lg:text-[4rem]">
                {PROJECTS_HEADLINE}
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-md font-glacial text-base leading-7 text-muted sm:text-lg">
                {PROJECTS_INTRO}
              </p>
            </div>
          </div>

          {/* Project List */}
          {PROJECTS.map((project, index) => (
            <article
              key={project.title}
              className={`grid gap-10 border-b border-ink/15 py-16 lg:items-center lg:gap-10 ${
                index % 2 === 1
                  ? "lg:grid-cols-[1.06fr_0.94fr]"
                  : "lg:grid-cols-[0.94fr_1.06fr]"
              }`}
            >
              {/* Visual */}
              <div className={index % 2 === 1 ? "lg:order-last" : ""}>
                {project.images.length === 1 ? (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink/10 bg-ink/5">
                    <div className="absolute inset-4">
                      <Image
                        src={project.images[0].src}
                        alt={project.images[0].alt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="rounded-xl object-contain"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex aspect-[4/3] flex-col justify-center gap-4 overflow-hidden rounded-2xl border border-ink/10 bg-ink/5 p-5">
                    {project.images.map((image) => (
                      <div key={image.src} className="overflow-hidden rounded-lg">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={0}
                          height={0}
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="h-auto w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {project.link && (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-4 inline-flex items-center gap-3 border-b border-accent pb-1 font-space-mono text-sm font-bold uppercase tracking-[0.06em] text-accent hover:text-brand-hover dark:hover:text-ink"
                  >
                    {project.link.label}
                    <span className="text-base transition-transform duration-200 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                )}
              </div>

              {/* Content */}
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <p className="font-space-mono text-sm font-bold uppercase tracking-[0.06em] text-accent">
                    {String(index + 1).padStart(2, "0")} / {project.category}
                  </p>

                  <span className="rounded-full border border-ink/15 px-3 py-1 font-space-mono text-sm tracking-[0.04em] text-muted">
                    {project.type}
                    <span className="mx-2">•</span>
                    {project.year}
                  </span>
                </div>

                <h3 className="mt-3 font-glacial text-3xl font-bold leading-tight sm:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-4 font-glacial text-base leading-7 text-muted sm:text-lg">
                  {project.description}
                </p>

                <div className="mt-8 space-y-6">
                  <div>
                    <p className="mb-1.5 font-space-mono text-sm font-bold uppercase tracking-[0.06em] text-accent">
                      What I Explored
                    </p>
                    <p className="font-glacial text-base leading-7">
                      <Rich text={project.explored} />
                    </p>
                  </div>

                  <div>
                    <p className="mb-1.5 font-space-mono text-sm font-bold uppercase tracking-[0.06em] text-accent">
                      Key Work
                    </p>
                    <p className="font-glacial text-base leading-7">
                      <Rich text={project.keyWork} />
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-ink/15 px-3 py-1.5 font-space-mono text-xs tracking-[0.04em] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}

        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="relative scroll-mt-20 bg-paper px-6 py-20 text-ink lg:px-10 lg:py-28"
      >
        <div className="portfolio-container">

          {/* Section Introduction */}
          <div className="grid gap-10 border-b-2 border-ink pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <h2 className="max-w-2xl font-perandory text-4xl leading-[0.95] tracking-[0.01em] sm:text-5xl lg:text-[4rem]">
                {CERTIFICATIONS_HEADLINE}
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-md font-glacial text-base leading-7 text-muted sm:text-lg">
                {CERTIFICATIONS_INTRO}
              </p>
            </div>
          </div>

          {/* Course List (isi ada di content.ts) */}
          <div>
            {CERTIFICATIONS.map((cert) => (
              <article
                key={cert.title}
                className="border-b border-ink/15 py-12"
              >
                {/* Title + Date (di HP, tanggal tampil di atas) */}
                <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <h3 className="font-glacial text-2xl font-bold leading-tight sm:text-3xl">
                    {cert.title}
                  </h3>

                  <p className="shrink-0 font-space-mono text-sm tracking-[0.08em] text-ink/50">
                    {cert.date}
                  </p>
                </div>

                <p className="mt-3 font-space-mono text-sm font-bold uppercase tracking-[0.06em] text-accent">
                  {cert.issuer}
                </p>

                <p className="mt-5 font-glacial text-base leading-7 text-muted sm:text-lg">
                  {cert.description}
                </p>

                <p className="mb-3 mt-7 font-space-mono text-sm font-bold uppercase tracking-[0.06em] text-accent">
                  Key Competencies
                </p>

                <div className="flex flex-wrap gap-2">
                  {cert.competencies.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-ink/15 px-3 py-1.5 font-space-mono text-xs tracking-[0.04em] text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex border-b border-accent pb-1 font-space-mono text-sm font-bold uppercase tracking-[0.04em] text-accent transition-colors hover:text-brand-hover dark:hover:text-ink"
          >
            {CERTIFICATIONS_LINK_LABEL} ↗
          </a>
        </div>
      </section>

      {/* Leadership Section */}
      <section
        id="leadership"
        className="relative scroll-mt-20 bg-paper px-6 py-20 text-ink lg:px-10 lg:py-28"
      >
        <div className="portfolio-container">

          {/* Section Header */}
          <div className="flex flex-col gap-6 border-b-2 border-ink pb-10 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-perandory max-w-3xl text-4xl leading-[0.95] tracking-[0.01em] sm:text-5xl lg:text-[4rem]">
              {JOURNEY_HEADLINE}
            </h2>

            <p className="font-glacial max-w-md text-base leading-7 text-muted sm:text-lg">
              {JOURNEY_INTRO}
            </p>
          </div>

          {/* Journey Items */}
          <div className="grid gap-14 pt-12 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {JOURNEY.map((item) => (
              <article key={item.organization} className="w-full">

                {/* Photo */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-ink/10">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-6">
                  <h3 className="font-glacial text-3xl font-bold leading-[1.1] tracking-[-0.02em]">
                    {item.organization}
                  </h3>

                  <p className="font-space-mono mt-3 text-sm font-bold uppercase tracking-[0.06em] text-accent">
                    {item.role}
                  </p>

                  {/* Date + Focus */}
                  <p className="font-space-mono mt-2 text-sm text-ink/45">
                    {item.date}
                    <span className="mx-2.5">•</span>
                    {item.focus}
                  </p>

                  <p className="font-glacial mt-4 text-base leading-7 text-muted">
                    <Rich text={item.description} />
                  </p>

                  {item.badge && (
                    <span className="mt-5 inline-flex rounded-full border border-ink/15 px-3 py-1.5 font-space-mono text-xs tracking-[0.04em] text-muted">
                      {item.badge}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative scroll-mt-20 bg-paper px-6 py-12 text-ink lg:px-10 lg:py-20"
      >
        <div className="portfolio-container">

          {/* Contact Heading */}
          <div className="flex justify-end">
            <h2 className="text-right leading-[0.9] tracking-[0.125em]">
              <span className="font-perandory text-4xl sm:text-5xl md:text-6xl lg:text-[5.75rem]">
                <span className="font-edwardian mr-[0.175em] text-[1.6em]">
                  L
                </span>
                et&apos;s
              </span>{" "}

              <span className="font-perandory text-4xl text-brand sm:text-5xl md:text-6xl lg:text-[5.75rem]">
                <span className="font-edwardian mr-[0.175em] text-[1.6em]">
                  C
                </span>
                onnect!
              </span>
            </h2>
          </div>

          {/* Contact Content */}
          <div className="mt-7 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

            {/* Letter Image */}
            <div className="flex items-start justify-center lg:-mt-45 lg:justify-start">
              <div className="w-full max-w-md">
                <Image
                  src="/contact/letter.png"
                  alt="A letter inviting you to connect"
                  width={0}
                  height={0}
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div>

              {/* Currently Open */}
              <p className="font-glacial text-base leading-7 text-muted sm:text-lg">
                {CONTACT_INTRO}
              </p>

              {/* Contact Links */}
              <div className="mt-7">

                {/* Email (membuka aplikasi email dan menyalin alamat) */}
                <a
                  href={`mailto:${EMAIL}`}
                  onClick={copyEmail}
                  className="group flex items-center justify-between border-t border-ink/15 py-4"
                >
                  <div>
                    <p className="font-space-mono text-sm uppercase tracking-[0.08em] text-ink/45">
                      Email
                    </p>

                    <p className="font-glacial mt-1 text-base transition-colors group-hover:text-accent sm:text-lg">
                      {EMAIL}
                    </p>
                  </div>

                  {emailCopied ? (
                    <span className="font-space-mono text-sm text-accent">
                      Copied ✓
                    </span>
                  ) : (
                    <span className="font-glacial text-2xl transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  )}
                </a>

                {/* LinkedIn */}
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-t border-ink/15 py-4"
                >
                  <div>
                    <p className="font-space-mono text-sm uppercase tracking-[0.08em] text-ink/45">
                      LinkedIn
                    </p>

                    <p className="font-glacial mt-1 text-base transition-colors group-hover:text-accent sm:text-lg">
                      {CONTACT_LINKEDIN_LABEL}
                    </p>
                  </div>

                  <span className="font-glacial text-2xl transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>

                {/* Bottom Border */}
                <div className="border-t border-ink/15" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    
  );
}