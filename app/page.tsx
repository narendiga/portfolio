"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [toolsVisible, setToolsVisible] = useState(false);
  const toolsRef = useRef<HTMLDivElement>(null);

  {/* Tools animation */}
  useEffect(() => {
    const element = toolsRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setToolsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  {/* Active navigation section */}
  useEffect(() => {
    const sections = [
      "about",
      "experience",
      "projects",
      "journey",
      "contact",
    ];

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
    <main
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-[#1c1412] text-[#f2e8d5]"
          : "bg-[#f2e8d5] text-[#1c1412]"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-md transition-colors duration-500 ${
          darkMode
            ? "border-[#f2e8d5]/10 bg-[#1c1412]/85"
            : "border-[#1c1412]/10 bg-[#f2e8d5]/85"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          
          {/* Logo */}
          <a
            href="#home"
            className={`font-space-mono text-sm font-bold tracking-[0.08em] transition-colors ${
              darkMode ? "text-[#f2e8d5]" : "text-[#1c1412]"
            }`}
          >
            Naifa.
          </a>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            {["About", "Experience", "Projects", "Journey", "Contact"].map(
              (item) => {
                const sectionId = item.toLowerCase();
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item}
                    href={`#${sectionId}`}
                    className={`group relative inline-block font-glacial text-sm transition-all duration-200 hover:scale-[1.04] ${
                      isActive
                        ? darkMode
                          ? "font-bold text-[#d9a9a9]"
                          : "font-bold text-[#8f2d2d]"
                        : darkMode
                          ? "text-[#f2e8d5]/65 hover:text-[#d9a9a9]"
                          : "text-[#1c1412]/65 hover:text-[#8f2d2d]"
                    }`}
                  >
                    {item}

                    {/* Underline */}
                    <span
                      className={`absolute -bottom-1 left-0 h-[1px] w-full origin-left transition-transform duration-200 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      } ${
                        darkMode
                          ? "bg-[#d9a9a9]"
                          : "bg-[#8f2d2d]"
                      }`}
                    />
                  </a>
                );
              }
            )}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm transition-all ${
                darkMode
                  ? "border-[#f2e8d5]/15 hover:border-[#f2e8d5]/30"
                  : "border-[#1c1412]/15 hover:border-[#1c1412]/30"
              }`}
            >
              {darkMode ? "☼" : "☾"}
            </button>

            {/* Download CV */}
            <a
              href="/cv.pdf"
              download
              className={`font-space-mono hidden rounded-full px-5 py-2.5 text-sm font-medium transition-all sm:block ${
                darkMode
                  ? "bg-[#f2e8d5] text-[#1c1412] hover:bg-[#fff7e8]"
                  : "bg-[#8f2d2d] text-[#f2e8d5] hover:bg-[#752323]"
              }`}
            >
              Download CV
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 lg:px-10"
      >

        <div className="relative portfolio-container">
          <div className="max-w-5xl">

            {/* Small intro */}
            <p
              className={`font-glacial mb-6 text-sm font-medium tracking-[0.18em] uppercase ${
                darkMode ? "text-[#cfc2ad]" : "text-[#8f2d2d]"
              }`}
            >
              Information Systems Graduate
            </p>

            {/* Name */}
            <h1
              className={`leading-[0.9] tracking-[0.125em] ${
                darkMode ? "text-[#f2e8d5]" : "text-[#1c1412]"
              }`}
            >
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

              <span className="font-perandory text-4xl sm:text-5xl md:text-6xl lg:text-[5.75rem] text-[#8f2d2d]">
                <span className="font-edwardian mr-[0.175em] text-[1.6em]">
                  R
                </span>
                endiga
              </span>
            </h1>

            {/* Roles */}
            <p
              className={`font-space-mono mt-10 text-sm sm:text-base ${
                darkMode ? "text-[#f2e8d5]" : "text-[#1c1412]"
              }`}
            >
              Data Analyst&nbsp; · &nbsp;Data Engineer&nbsp; · &nbsp;Business Intelligence
            </p>

            {/* Description */}
            <p
              className={`font-glacial mt-5 max-w-2xl text-base leading-7 sm:text-lg ${
                darkMode
                  ? "text-[#cfc2ad]"
                  : "text-[#1c1412]/65"
              }`}
            >
              Building data-driven solutions through analytics,
              data engineering, and business intelligence.
            </p>

            {/* Availability */}
            <p
              className={`font-glacial mt-8 inline-block border-b pb-1 text-sm ${
                darkMode
                  ? "border-[#8f2d2d] text-[#d9a9a9]"
                  : "border-[#8f2d2d] text-[#8f2d2d]"
              }`}
            >
              Currently open to early-career opportunities.
            </p>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`font-glacial absolute bottom-8 right-0 hidden items-center gap-3 text-xs tracking-[0.18em] uppercase md:flex ${
              darkMode
                ? "text-[#cfc2ad]/50"
                : "text-[#1c1412]/40"
            }`}
          >
            <span>Scroll to explore</span>
            <span className="text-lg">↓</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`scroll-mt-20 relative px-6 pt-14 pb-12 lg:px-10 lg:pt-18 lg:pb-20 ${
          darkMode
            ? "bg-[#1c1412] text-[#f2e8d5]"
            : "bg-[#f2e8d5] text-[#1c1412]"
        }`}
      >
        <div className="portfolio-container">
          <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

            {/* Left — Photo */}
            <div className="relative mx-auto w-full max-w-lg lg:mx-0">
              <div className="relative aspect-[4/5]">

                {/* Lace Paper */}
                <img
                  src="/images/lace-paper.png"
                  alt=""
                  className="absolute left-1/2 top-1/2 h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2 object-contain"
                />

                {/* Photo */}
                <div className="absolute left-[14%] top-[18%] w-[55%] rotate-[-3deg] overflow-hidden rounded-[5px] shadow-xl">
                  <img
                    src="/images/naifa-photo.jpeg"
                    alt="Naifa"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right — Personal Branding */}
            <div>

              {/* Main Statement */}
              <h2
                className={`max-w-3xl leading-[1.05] tracking-[0.01em] ${
                  darkMode
                    ? "text-[#f2e8d5]"
                    : "text-[#1c1412]"
                }`}
              >
                <span className="font-perandory text-4xl sm:text-5xl lg:text-[3.9rem]">
                  Exploring Data, Systems, and What They Can Do.
                </span>
              </h2>

              {/* Description */}
              <div className="mt-10 max-w-2xl">
                <p
                  className={`font-glacial text-base leading-7 sm:text-lg ${
                    darkMode
                      ? "text-[#cfc2ad]"
                      : "text-[#1c1412]/65"
                  }`}
                >
                  I studied Information Systems and enjoy working where data, technology, 
                  and business needs come together. I’ve explored business dashboards,
                  data transformation, and forecasting projects, finding ways to turn raw 
                  information into insights that people can actually use.
                </p>
              </div>

              {/* Quick Information */}
              <div className="mt-12 max-w-2xl">

                {/* Education */}
                <div
                  className={`grid grid-cols-[100px_1fr] items-center gap-6 border-t py-4 ${
                    darkMode
                      ? "border-[#f2e8d5]/15"
                      : "border-[#1c1412]/15"
                  }`}
                >
                  <span
                    className={`font-space-mono text-xs uppercase tracking-[0.12em] ${
                      darkMode
                        ? "text-[#cfc2ad]/60"
                        : "text-[#1c1412]/50"
                    }`}
                  >
                    Education
                  </span>

                  <div>
                    {/* Main Information */}
                    <p
                      className={`font-glacial text-sm sm:text-base ${
                        darkMode
                          ? "text-[#f2e8d5]"
                          : "text-[#1c1412]"
                      }`}
                    >
                      Information Systems, Institut Teknologi Sepuluh Nopember
                    </p>

                    {/* Secondary Information */}
                    <p
                      className={`mt-1.5 font-space-mono text-xs ${
                        darkMode
                          ? "text-[#cfc2ad]/55"
                          : "text-[#1c1412]/45"
                      }`}
                    >
                      2022 — 2026&nbsp;&nbsp;·&nbsp;&nbsp;GPA 3.59 / 4.00 (Cum Laude)
                    </p>
                  </div>
                </div>

                {/* Language */}
                <div
                  className={`grid grid-cols-[100px_1fr] items-center gap-6 border-t py-4 ${
                    darkMode
                      ? "border-[#f2e8d5]/15"
                      : "border-[#1c1412]/15"
                  }`}
                >
                  <span
                    className={`font-space-mono text-xs uppercase tracking-[0.12em] ${
                      darkMode
                        ? "text-[#cfc2ad]/60"
                        : "text-[#1c1412]/50"
                    }`}
                  >
                    Language
                  </span>

                  <span
                    className={`font-glacial text-sm sm:text-base ${
                      darkMode
                        ? "text-[#f2e8d5]"
                        : "text-[#1c1412]"
                    }`}
                  >
                    Indonesian, English
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`relative px-6 py-20 lg:px-10 lg:py-28 ${
          darkMode
            ? "bg-[#1c1412] text-[#f2e8d5]"
            : "bg-[#f2e8d5] text-[#1c1412]"
        }`}
      >
        <div className="portfolio-container">

          {/* Section Introduction */}
          <div className="grid gap-10 border-b-2 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
            <div>
              <h2
                className={`max-w-2xl font-perandory text-5xl leading-[0.95] tracking-[0.01em] sm:text-6xl lg:text-[3.9rem] ${
                  darkMode
                    ? "text-[#f2e8d5]"
                    : "text-[#1c1412]"
                }`}
              >
                Learning through real work and practical experience.
              </h2>
            </div>

            <div className="flex items-end">
              <p
                className={`max-w-md font-glacial text-base leading-7 sm:text-lg ${
                  darkMode
                    ? "text-[#cfc2ad]"
                    : "text-[#1c1412]/65"
                }`}
              >
                From professional experience to academic roles, I’ve learned 
                to approach new challenges with curiosity and a practical mindset.
              </p>
            </div>
          </div>

          {/* Experience List */}
          <div>

            {/* Experience 01 — Pelindo */}
            <article
              className={`grid gap-8 border-b py-12 lg:grid-cols-[1fr_180px] lg:gap-16 ${
                darkMode
                  ? "border-[#f2e8d5]/15"
                  : "border-[#1c1412]/15"
              }`}
            >
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <h3
                    className={`font-glacial text-2xl font-bold sm:text-3xl ${
                      darkMode
                        ? "text-[#f2e8d5]"
                        : "text-[#1c1412]"
                    }`}
                  >
                    PT Pelindo Energi Logistik
                  </h3>
                </div>

                <p
                  className={`mt-3 font-space-mono text-xs font-bold uppercase tracking-[0.06em] ${
                    darkMode
                      ? "text-[#d9a9a9]"
                      : "text-[#8f2d2d]"
                  }`}
                >
                  IT PROJECT SUPPORT INTERN
                </p>

                <p
                  className={`mt-6 max-w-3xl font-glacial text-base leading-7 sm:text-lg ${
                    darkMode
                      ? "text-[#cfc2ad]"
                      : "text-[#1c1412]/65"
                  }`}
                >
                  Worked within the IT division, supporting data-driven
                  reporting and internal digital solutions. The experience
                  brought together dashboard development, data processing,
                  and practical problem-solving in a real business
                  environment.
                </p>

                {/* Highlights */}
                <div className="mt-7 space-y-4">
                  <p
                    className={`relative pl-4 font-glacial text-sm leading-6 sm:text-base before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:rounded-full ${
                      darkMode
                        ? "text-[#f2e8d5] before:bg-[#d9a9a9]"
                        : "text-[#1c1412] before:bg-[#8f2d2d]"
                    }`}
                  >
                    Built an invoice dashboard for management reporting.
                  </p>

                  <p
                    className={`relative pl-4 font-glacial text-sm leading-6 sm:text-base before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:rounded-full ${
                      darkMode
                        ? "text-[#f2e8d5] before:bg-[#d9a9a9]"
                        : "text-[#1c1412] before:bg-[#8f2d2d]"
                    }`}
                  >
                    Developed an internal WhatsApp help-desk chatbot and supported
                    its integration with internal ticketing APIs.
                  </p>

                  <p
                    className={`relative pl-4 font-glacial text-sm leading-6 sm:text-base before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:rounded-full ${
                      darkMode
                        ? "text-[#f2e8d5] before:bg-[#d9a9a9]"
                        : "text-[#1c1412] before:bg-[#8f2d2d]"
                    }`}
                  >
                    Improved chatbot reliability through session handling,
                    queueing, and API error-flow improvements.
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {["Excel", "Power BI", "SQL", "Python", "Node.js", "REST API"].map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-3 py-1.5 font-space-mono text-xs tracking-[0.04em] ${
                        darkMode
                          ? "border-[#f2e8d5]/15 text-[#cfc2ad]"
                          : "border-[#1c1412]/15 text-[#1c1412]/60"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Date */}
              <div className="lg:text-right">
                <p
                  className={`font-space-mono text-xs tracking-[0.08em] ${
                    darkMode
                      ? "text-[#cfc2ad]/60"
                      : "text-[#1c1412]/50"
                  }`}
                >
                  Aug — Dec 2025
                </p>
              </div>
            </article>

            {/* Experience 02 — Teaching Assistant */}
            <article
              className={`grid gap-8 border-b py-12 lg:grid-cols-[1fr_180px] lg:gap-16 ${
                darkMode
                  ? "border-[#f2e8d5]/15"
                  : "border-[#1c1412]/15"
              }`}
            >
              <div>
                <h3
                  className={`font-glacial text-2xl font-bold sm:text-3xl ${
                    darkMode
                      ? "text-[#f2e8d5]"
                      : "text-[#1c1412]"
                  }`}
                >
                  Business Performance Dashboard Practicum
                </h3>

                <p
                  className={`mt-3 font-space-mono text-xs font-bold uppercase tracking-[0.06em] ${
                    darkMode
                      ? "text-[#d9a9a9]"
                      : "text-[#8f2d2d]"
                  }`}
                >
                  TEACHING ASSISTANT
                </p>

                <p
                  className={`mt-6 max-w-3xl font-glacial text-base leading-7 sm:text-lg ${
                    darkMode
                      ? "text-[#cfc2ad]"
                      : "text-[#1c1412]/65"
                  }`}
                >
                  Guided student teams in turning operational data into
                  clear, interactive performance dashboards, with a focus
                  on meaningful metrics, accurate reporting, and readable
                  visualizations.
                </p>

                {/* Highlights */}
                <div className="mt-7 space-y-4">
                  <p
                    className={`relative pl-4 font-glacial text-sm leading-6 sm:text-base before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:rounded-full ${
                      darkMode
                        ? "text-[#f2e8d5] before:bg-[#d9a9a9]"
                        : "text-[#1c1412] before:bg-[#8f2d2d]"
                    }`}
                  >
                    Mentored 6 student groups throughout the practicum.
                  </p>

                  <p
                    className={`relative pl-4 font-glacial text-sm leading-6 sm:text-base before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:rounded-full ${
                      darkMode
                        ? "text-[#f2e8d5] before:bg-[#d9a9a9]"
                        : "text-[#1c1412] before:bg-[#8f2d2d]"
                    }`}
                  >
                    Guided students in structuring data and defining meaningful
                    business metrics for dashboard development.
                  </p>

                  <p
                    className={`relative pl-4 font-glacial text-sm leading-6 sm:text-base before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:rounded-full ${
                      darkMode
                        ? "text-[#f2e8d5] before:bg-[#d9a9a9]"
                        : "text-[#1c1412] before:bg-[#8f2d2d]"
                    }`}
                  >
                    Reviewed dashboard layouts and provided feedback on data
                    visualization and presentation.
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {["Power BI", "Data Visualization", "Business Intelligence"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-3 py-1.5 font-space-mono text-xs tracking-[0.04em] ${
                          darkMode
                            ? "border-[#f2e8d5]/15 text-[#cfc2ad]"
                            : "border-[#1c1412]/15 text-[#1c1412]/60"
                        }`}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Date */}
              <div className="lg:text-right">
                <p
                  className={`font-space-mono text-xs tracking-[0.08em] ${
                    darkMode
                      ? "text-[#cfc2ad]/60"
                      : "text-[#1c1412]/50"
                  }`}
                >
                  Nov — Dec 2025
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`relative px-6 py-20 lg:px-10 lg:py-28 ${
          darkMode
            ? "bg-[#1c1412] text-[#f2e8d5]"
            : "bg-[#f2e8d5] text-[#1c1412]"
        }`}
      >
        <div className="portfolio-container">

          {/* Section Introduction */}
          <div className="grid gap-10 border-b-2 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <h2
                className={`max-w-2xl font-perandory text-4xl leading-[0.95] tracking-[0.01em] sm:text-5xl lg:text-[4rem] ${
                  darkMode
                    ? "text-[#f2e8d5]"
                    : "text-[#1c1412]"
                }`}
              >
                Building with data, solving problems, and learning along the way.
              </h2>
            </div>

            <div className="flex items-end">
              <p
                className={`max-w-md font-glacial text-base leading-7 sm:text-lg ${
                  darkMode
                    ? "text-[#cfc2ad]"
                    : "text-[#1c1412]/65"
                }`}
              >
                A selection of projects across data analytics, data engineering, and forecasting 
                — built through coursework, experimentation, and hands-on problem solving.
              </p>
            </div>
          </div>

          {/* Project 01 */}
          <article
            className={`grid gap-10 border-b py-16 lg:grid-cols-2 lg:items-center lg:gap-20 ${
              darkMode
                ? "border-[#f2e8d5]/15"
                : "border-[#1c1412]/15"
            }`}
          >
            {/* Visual */}
            <div
              className={`flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border ${
                darkMode
                  ? "border-[#f2e8d5]/10 bg-[#241a18]"
                  : "border-[#1c1412]/10 bg-[#eadfca]"
              }`}
            >
              <img
                src="/projects/kpi-dashboard.png"
                alt="IT Performance and KPI Dashboard"
                className="h-full w-full object-contain p-4"
              />
            </div>

            {/* Content */}
            <div>
              <p
                className={`font-space-mono text-xs font-bold uppercase tracking-[0.06em] ${
                  darkMode
                    ? "text-[#d9a9a9]"
                    : "text-[#8f2d2d]"
                }`}
              >
                01 / DASHBOARD
              </p>

              <h3
                className={`font-glacial text-3xl font-bold leading-tight sm:text-4xl ${
                  darkMode
                    ? "text-[#f2e8d5]"
                    : "text-[#1c1412]"
                }`}
              >
                IT Performance & KPI Dashboard
              </h3>

              <p
                className={`mt-4 font-glacial text-base leading-7 sm:text-lg ${
                  darkMode
                    ? "text-[#cfc2ad]"
                    : "text-[#1c1412]/65"
                }`}
              >
                Turning IT performance data into a clearer view of
                organizational performance and strategic targets.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <p
                    className={`font-space-mono text-xs font-bold uppercase tracking-[0.06em] ${
                      darkMode
                        ? "text-[#d9a9a9]"
                        : "text-[#8f2d2d]"
                    }`}
                  >
                    What I Explored
                  </p>

                  <p
                    className={`font-glacial text-sm leading-6 sm:text-base ${
                      darkMode
                        ? "text-[#f2e8d5]"
                        : "text-[#1c1412]"
                    }`}
                  >
                    An interactive dashboard based on the IT Balanced
                    Scorecard framework, bringing key performance
                    indicators and supporting datasets into one visual
                    reporting interface.
                  </p>
                </div>

                <div>
                  <p
                    className={`font-space-mono text-xs font-bold uppercase tracking-[0.06em] ${
                      darkMode
                        ? "text-[#d9a9a9]"
                        : "text-[#8f2d2d]"
                    }`}
                  >
                    Key Work
                  </p>

                  <p
                    className={`font-glacial text-sm leading-6 sm:text-base ${
                      darkMode
                        ? "text-[#f2e8d5]"
                        : "text-[#1c1412]"
                    }`}
                  >
                    Designed performance indicators, prepared datasets,
                    and developed dashboard visualizations for monitoring
                    and reporting.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Excel", "Power BI", "Power Query", "DAX"].map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-3 py-1.5 font-space-mono text-xs tracking-[0.04em] ${
                      darkMode
                        ? "border-[#f2e8d5]/15 text-[#cfc2ad]"
                        : "border-[#1c1412]/15 text-[#1c1412]/60"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Project 02 */}
          <article
            className={`grid gap-10 border-b py-16 lg:grid-cols-2 lg:items-center lg:gap-20 ${
              darkMode
                ? "border-[#f2e8d5]/15"
                : "border-[#1c1412]/15"
            }`}
          >
            {/* Content */}
            <div>
              <p
                className={`font-space-mono text-xs font-bold uppercase tracking-[0.06em] ${
                  darkMode
                    ? "text-[#d9a9a9]"
                    : "text-[#8f2d2d]"
                }`}
              >
                02 / DATA ENGINEERING
              </p>

              <h3
                className={`font-glacial text-3xl font-bold leading-tight sm:text-4xl ${
                  darkMode
                    ? "text-[#f2e8d5]"
                    : "text-[#1c1412]"
                }`}
              >
                Data Integration & Warehousing
              </h3>

              <p
                className={`mt-4 font-glacial text-base leading-7 sm:text-lg ${
                  darkMode
                    ? "text-[#cfc2ad]"
                    : "text-[#1c1412]/65"
                }`}
              >
                Structuring raw operational data into a more consistent
                foundation for analytical use.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <p
                    className={`font-space-mono text-xs font-bold uppercase tracking-[0.06em] ${
                      darkMode
                        ? "text-[#d9a9a9]"
                        : "text-[#8f2d2d]"
                    }`}
                  >
                    What I Explored
                  </p>

                  <p
                    className={`font-glacial text-sm leading-6 sm:text-base ${
                      darkMode
                        ? "text-[#f2e8d5]"
                        : "text-[#1c1412]"
                    }`}
                  >
                    A data warehouse and ETL pipeline using Pentaho Data
                    Integration to transform raw operational data into
                    structured analytical data.
                  </p>
                </div>

                <div>
                  <p
                    className={`font-space-mono text-xs font-bold uppercase tracking-[0.06em] ${
                      darkMode
                        ? "text-[#d9a9a9]"
                        : "text-[#8f2d2d]"
                    }`}
                  >
                    Key Work
                  </p>

                  <p
                    className={`font-glacial text-sm leading-6 sm:text-base ${
                      darkMode
                        ? "text-[#f2e8d5]"
                        : "text-[#1c1412]"
                    }`}
                  >
                    Designed fact and dimension tables and implemented
                    ETL processes to support data consistency and reporting.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Pentaho Data Integration", "SQL"].map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-3 py-1.5 font-space-mono text-xs tracking-[0.04em] ${
                      darkMode
                        ? "border-[#f2e8d5]/15 text-[#cfc2ad]"
                        : "border-[#1c1412]/15 text-[#1c1412]/60"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div
              className={`flex aspect-[4/3] flex-col justify-center gap-4 overflow-hidden rounded-2xl border p-5 ${
                darkMode
                  ? "border-[#f2e8d5]/10 bg-[#241a18]"
                  : "border-[#1c1412]/10 bg-[#eadfca]"
              }`}
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src="/projects/pdi-workflow-1.png"
                  alt="Pentaho Data Integration ETL workflow"
                  className="w-full object-contain"
                />
              </div>

              <div className="overflow-hidden rounded-lg">
                <img
                  src="/projects/pdi-workflow-2.png"
                  alt="Pentaho Data Integration ETL workflow"
                  className="w-full object-contain"
                />
              </div>
            </div>
          </article>

          {/* Project 03 */}
          <article
            className={`grid gap-10 border-b py-16 lg:grid-cols-2 lg:items-center lg:gap-20 ${
              darkMode
                ? "border-[#f2e8d5]/15"
                : "border-[#1c1412]/15"
            }`}
          >
            {/* Visual */}
            <div
              className={`flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border ${
                darkMode
                  ? "border-[#f2e8d5]/10 bg-[#241a18]"
                  : "border-[#1c1412]/10 bg-[#eadfca]"
              }`}
            >
              <img
                src="/projects/forecasting.png"
                alt="Time Series Forecasting project"
                className="h-full w-full object-contain p-4"
              />
            </div>

            {/* Content */}
            <div>
              <p
                className={`font-space-mono text-xs font-bold uppercase tracking-[0.06em] ${
                  darkMode
                    ? "text-[#d9a9a9]"
                    : "text-[#8f2d2d]"
                }`}
              >
                03 / FORECASTING
              </p>

              <h3
                className={`font-glacial text-3xl font-bold leading-tight sm:text-4xl ${
                  darkMode
                    ? "text-[#f2e8d5]"
                    : "text-[#1c1412]"
                }`}
              >
                Time Series Forecasting for Airport Passenger Prediction
              </h3>

              <p
                className={`mt-4 font-glacial text-base leading-7 sm:text-lg ${
                  darkMode
                    ? "text-[#cfc2ad]"
                    : "text-[#1c1412]/65"
                }`}
              >
                Exploring different time-series approaches to understand
                and forecast passenger traffic.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <p
                    className={`font-space-mono text-xs font-bold uppercase tracking-[0.06em] ${
                      darkMode
                        ? "text-[#d9a9a9]"
                        : "text-[#8f2d2d]"
                    }`}
                  >
                    What I Explored
                  </p>

                  <p
                    className={`font-glacial text-sm leading-6 sm:text-base ${
                      darkMode
                        ? "text-[#f2e8d5]"
                        : "text-[#1c1412]"
                    }`}
                  >
                    Forecasted passenger traffic at Sultan Aji Muhammad
                    Sulaiman Sepinggan International Airport using
                    statistical, deep learning, and hybrid time-series
                    models.
                  </p>
                </div>

                <div>
                  <p
                    className={`font-space-mono text-xs font-bold uppercase tracking-[0.06em] ${
                      darkMode
                        ? "text-[#d9a9a9]"
                        : "text-[#8f2d2d]"
                    }`}
                  >
                    Key Work
                  </p>

                  <p
                    className={`font-glacial text-sm leading-6 sm:text-base ${
                      darkMode
                        ? "text-[#f2e8d5]"
                        : "text-[#1c1412]"
                    }`}
                  >
                    Compared SARIMA, LSTM, and hybrid SARIMA–LSTM models
                    through preprocessing, model tuning, and evaluation.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Excel", "Google Colab", "Python"].map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-3 py-1.5 font-space-mono text-xs tracking-[0.04em] ${
                      darkMode
                        ? "border-[#f2e8d5]/15 text-[#cfc2ad]"
                        : "border-[#1c1412]/15 text-[#1c1412]/60"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* Journey Section */}
      <section
        id="journey"
        className={`relative px-6 py-20 lg:px-10 lg:py-28 ${
          darkMode
            ? "bg-[#1c1412] text-[#f2e8d5]"
            : "bg-[#f2e8d5] text-[#1c1412]"
        }`}
      >
        <div className="portfolio-container">

          {/* Section Header */}
          <div className="flex flex-col gap-6 border-b pb-10 lg:flex-row lg:items-end lg:justify-between">
            <h2
              className={`font-perandory max-w-3xl text-4xl leading-[0.95] tracking-[0.01em] sm:text-5xl lg:text-[4rem] ${
                darkMode ? "text-[#f2e8d5]" : "text-[#1c1412]"
              }`}
            >
              Beyond the classroom, every experience became part of the journey.
            </h2>

            <p
              className={`font-glacial max-w-md text-sm leading-6 sm:text-base ${
                darkMode
                  ? "text-[#cfc2ad]"
                  : "text-[#1c1412]/65"
              }`}
            >
              From student organizations to event teams, these experiences
              shaped how I collaborate, communicate, and take responsibility.
            </p>
          </div>

          {/* Journey Items */}
          <div className="grid gap-12 pt-12 md:grid-cols-3 md:gap-8 lg:gap-10">

            {/* Journey 01 */}
            <article>
              <div
                className={`aspect-[4/3] overflow-hidden rounded-2xl border ${
                  darkMode
                    ? "border-[#f2e8d5]/10"
                    : "border-[#1c1412]/10"
                }`}
              >
                <img
                  src="/journey/hmsi.jpeg"
                  alt="Himpunan Mahasiswa Sistem Informasi"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>

              <div className="mt-6">
                <h3
                  className={`font-glacial text-3xl font-bold leading-[1.1] tracking-[-0.02em] ${
                    darkMode
                      ? "text-[#f2e8d5]"
                      : "text-[#1c1412]"
                  }`}
                >
                  Himpunan Mahasiswa Sistem Informasi
                </h3>

                <p
                  className={`font-space-mono mt-3 text-xs font-bold uppercase tracking-[0.06em] ${
                    darkMode
                      ? "text-[#d9a9a9]"
                      : "text-[#8f2d2d]"
                  }`}
                >
                  Secretary of Social Development
                </p>

                <p
                  className={`font-glacial mt-4 text-sm leading-6 sm:text-base ${
                    darkMode
                      ? "text-[#cfc2ad]"
                      : "text-[#1c1412]/65"
                  }`}
                >
                  Supported administrative and operational activities
                  within the division, while contributing to fundraising
                  initiatives and event financial management as Treasurer
                  of SINERGI.
                </p>

                <span
                  className={`mt-5 inline-flex rounded-full border px-3 py-1.5 font-space-mono text-xs tracking-[0.04em] ${
                    darkMode
                      ? "border-[#f2e8d5]/15 text-[#cfc2ad]"
                      : "border-[#1c1412]/15 text-[#1c1412]/60"
                  }`}
                >
                  Best Staff
                </span>
              </div>
            </article>

            {/* Journey 02 */}
            <article>
              <div
                className={`aspect-[4/3] overflow-hidden rounded-2xl border ${
                  darkMode
                    ? "border-[#f2e8d5]/10"
                    : "border-[#1c1412]/10"
                }`}
              >
                <img
                  src="/journey/ise.jpeg"
                  alt="Information Systems Expo 2024"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>

              <div className="mt-6">
                <h3
                  className={`font-glacial text-3xl font-bold leading-[1.1] tracking-[-0.02em] ${
                    darkMode
                      ? "text-[#f2e8d5]"
                      : "text-[#1c1412]"
                  }`}
                >
                  Information Systems Expo (ISE!) 2024
                </h3>

                <p
                  className={`font-space-mono mt-3 text-xs font-bold uppercase tracking-[0.06em] ${
                    darkMode
                      ? "text-[#d9a9a9]"
                      : "text-[#8f2d2d]"
                  }`}
                >
                  Head of Consumption
                </p>

                <p
                  className={`font-glacial mt-4 text-sm leading-6 sm:text-base ${
                    darkMode
                      ? "text-[#cfc2ad]"
                      : "text-[#1c1412]/65"
                  }`}
                >
                  Led the planning, procurement, and distribution of meals
                  for attendees and staff, while supervising team members
                  and coordinating  with vendors to manage quality and budget
                  efficiency.
                </p>
              </div>
            </article>

            {/* Journey 03 */}
            <article>
              <div
                className={`aspect-[4/3] overflow-hidden rounded-2xl border ${
                  darkMode
                    ? "border-[#f2e8d5]/10"
                    : "border-[#1c1412]/10"
                }`}
              >
                <img
                  src="/journey/ilits.jpeg"
                  alt="Ini Lho ITS! 2024"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>

              <div className="mt-6">
                <h3
                  className={`font-glacial text-3xl font-bold leading-[1.1] tracking-[-0.02em] ${
                    darkMode
                      ? "text-[#f2e8d5]"
                      : "text-[#1c1412]"
                  }`}
                >
                  Ini Lho ITS! 2024
                </h3>

                <p
                  className={`font-space-mono mt-3 text-xs font-bold uppercase tracking-[0.06em] ${
                    darkMode
                      ? "text-[#d9a9a9]"
                      : "text-[#8f2d2d]"
                  }`}
                >
                  Secretary &amp; Treasurer of Consumption
                </p>

                <p
                  className={`font-glacial mt-4 text-sm leading-6 sm:text-base ${
                    darkMode
                      ? "text-[#cfc2ad]"
                      : "text-[#1c1412]/65"
                  }`}
                >
                  Managed budgeting, procurement, financial reporting,
                  and meal distribution for an event serving hundreds
                  to thousands of attendees and staff.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className={`relative px-6 py-12 lg:px-10 lg:py-20 ${
          darkMode
            ? "bg-[#1c1412] text-[#f2e8d5]"
            : "bg-[#f2e8d5] text-[#1c1412]"
        }`}
      >
        <div className="portfolio-container">

          {/* Contact Heading */}
          <div className="flex justify-end">
            <h2
              className={`text-right leading-[0.9] tracking-[0.125em] ${
                darkMode ? "text-[#f2e8d5]" : "text-[#1c1412]"
              }`}
            >
              <span className="font-perandory text-4xl sm:text-5xl md:text-6xl lg:text-[5.75rem]">
                <span className="font-edwardian mr-[0.175em] text-[1.6em]">
                  L
                </span>
                et&apos;s
              </span>{" "}

              <span className="font-perandory text-4xl text-[#8f2d2d] sm:text-5xl md:text-6xl lg:text-[5.75rem]">
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
                <img
                  src="/contact/letter.png"
                  alt="A letter inviting you to connect"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="pt-0">

              {/* Currently Open */}
              <p
                className={`font-glacial max-w-xl text-base leading-7 sm:text-lg ${
                  darkMode
                    ? "text-[#cfc2ad]"
                    : "text-[#1c1412]/65"
                }`}
              >
                Currently open to early-career opportunities where I can
                contribute through data analytics, data engineering, and
                business intelligence, while continuing to learn and grow
                through meaningful work.
              </p>

              {/* Contact Links */}
              <div className="mt-7 max-w-xl">

                {/* Email */}
                <a
                  href="mailto:nevamuren@gmail.com"
                  className={`group flex items-center justify-between border-t py-4 transition-colors ${
                    darkMode
                      ? "border-[#f2e8d5]/15"
                      : "border-[#1c1412]/15"
                  }`}
                >
                  <div>
                    <p
                      className={`font-space-mono text-xs uppercase tracking-[0.08em] ${
                        darkMode
                          ? "text-[#cfc2ad]/55"
                          : "text-[#1c1412]/45"
                      }`}
                    >
                      Email
                    </p>

                    <p
                      className={`font-glacial mt-1 text-base transition-colors ${
                        darkMode
                          ? "text-[#f2e8d5] group-hover:text-[#d9a9a9]"
                          : "text-[#1c1412] group-hover:text-[#8f2d2d]"
                      }`}
                    >
                      nevamuren@gmail.com
                    </p>
                  </div>

                  <span
                    className={`font-glacial text-2xl transition-transform duration-300 group-hover:translate-x-1 ${
                      darkMode
                        ? "text-[#f2e8d5]"
                        : "text-[#1c1412]"
                    }`}
                  >
                    ↗
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-between border-t py-4 transition-colors ${
                    darkMode
                      ? "border-[#f2e8d5]/15"
                      : "border-[#1c1412]/15"
                  }`}
                >
                  <div>
                    <p
                      className={`font-space-mono text-xs uppercase tracking-[0.08em] ${
                        darkMode
                          ? "text-[#cfc2ad]/55"
                          : "text-[#1c1412]/45"
                      }`}
                    >
                      LinkedIn
                    </p>

                    <p
                      className={`font-glacial mt-1 text-base transition-colors ${
                        darkMode
                          ? "text-[#f2e8d5] group-hover:text-[#d9a9a9]"
                          : "text-[#1c1412] group-hover:text-[#8f2d2d]"
                      }`}
                    >
                      Connect with me on LinkedIn
                    </p>
                  </div>

                  <span
                    className={`font-glacial text-2xl transition-transform duration-300 group-hover:translate-x-1 ${
                      darkMode
                        ? "text-[#f2e8d5]"
                        : "text-[#1c1412]"
                    }`}
                  >
                    ↗
                  </span>
                </a>

                {/* Bottom Border */}
                <div
                  className={`border-t ${
                    darkMode
                      ? "border-[#f2e8d5]/15"
                      : "border-[#1c1412]/15"
                  }`}
                />

              </div>
            </div>
          </div>
        </div>
      </section>

    </main>

    
  );
}