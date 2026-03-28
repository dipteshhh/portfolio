import React from "react";
import ContactButton from "./ContactButton";

export default function Hero() {
  return (
    <section className="relative grid grid-cols-1 items-start gap-12 md:grid-cols-12">
      {/* Decorative gradient blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-24 h-[420px] w-[420px] rounded-full opacity-[0.07] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary-container), var(--color-primary), transparent 70%)",
        }}
      />

      {/* Left Column: Branding & Intro */}
      <div className="md:col-span-8 lg:col-span-9">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 font-sans text-[0.75rem] tracking-[0.1rem] uppercase text-on-surface-variant font-semibold">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Seeking New-Grad Opportunities
          </span>
        </div>

        <h1 className="font-display tracking-tight leading-none text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-extrabold text-on-surface mb-8">
          Diptesh Shahi
          <br />
          Thakuri
        </h1>

        <div className="max-w-3xl lg:ml-24 md:ml-12 ml-0">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <p className="font-sans text-[0.75rem] font-bold uppercase tracking-[0.15em] text-primary">
              University of Toledo &bull; B.S. Computer Science &bull; Graduating Summer 2026
            </p>
          </div>

          <h2 className="font-display text-xl font-medium leading-relaxed text-on-surface-variant md:text-2xl mb-10">
            New-grad software engineer focused on{" "}
            <span className="text-primary font-semibold italic">
              backend systems, applied AI, and data-driven products
            </span>
            &mdash;with experience across product engineering, ML research, and
            network security.
          </h2>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-gradient-primary text-on-primary rounded-full px-8 py-4 font-sans text-sm font-bold tracking-wide transition-all hover:brightness-105 hover:shadow-lg hover:shadow-primary/20 active:scale-95"
            >
              View Projects
            </a>
            <a
              href="/Thakuri_Diptesh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-on-surface/15 bg-transparent text-on-surface px-8 py-3.5 font-sans text-sm font-bold tracking-wide transition-all hover:border-primary hover:text-primary active:scale-95"
            >
              View Resume
            </a>
            <ContactButton className="text-on-surface-variant hover:text-primary px-4 py-3.5 font-sans text-sm font-bold tracking-wide transition-colors flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </ContactButton>
          </div>
        </div>
      </div>

      {/* Right Column: Contextual Detail / Tech Stack */}
      <div className="space-y-10 pt-12 md:col-span-4 md:pt-24 lg:col-span-3">
        <div className="space-y-3">
          <h3 className="text-on-surface font-sans text-[0.75rem] font-bold uppercase tracking-[0.15em]">
            Core Competencies
          </h3>
          <div className="flex flex-col gap-1">
            {[
              "Software Engineering",
              "Applied AI / Machine Learning",
              "Backend and Data Systems",
            ].map((skill) => (
              <div
                key={skill}
                className="group flex items-center gap-3 rounded-lg py-2.5 px-3 -ml-3 transition-all hover:bg-surface-container-low"
              >
                <span className="h-5 w-0.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                <span className="font-sans text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-highest relative overflow-hidden rounded-xl p-6 transition-shadow hover:shadow-ambient">
          <div className="bg-primary absolute left-0 top-0 h-full w-1" />
          <code className="text-on-surface-variant block font-mono text-sm leading-relaxed">
            <span className="text-primary">const</span> engineer = {"{"}
            <br />
            &nbsp;&nbsp;focus: <span className="text-primary-container">&quot;Software + AI + Data&quot;</span>,
            <br />
            &nbsp;&nbsp;building: <span className="text-primary-container">&quot;Practical Systems&quot;</span>,
            <br />
            &nbsp;&nbsp;status: <span className="text-primary-container">&quot;Graduating Summer 2026&quot;</span>
            <br />
            {"}"};
          </code>
        </div>
      </div>
    </section>
  );
}
