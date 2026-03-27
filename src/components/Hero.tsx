import React from "react";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 items-start gap-12 md:grid-cols-12">
      {/* Left Column: Branding & Intro */}
      <div className="md:col-span-8 lg:col-span-9">
        <div className="mb-6">
          <span className="font-sans text-[0.75rem] tracking-[0.1rem] uppercase text-on-surface-variant font-semibold">
            Available for select opportunities
          </span>
        </div>

        <h1 className="font-display tracking-tight leading-none text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-extrabold text-on-surface mb-8">
          Diptesh Shahi Thakuri
        </h1>

        <div className="max-w-3xl lg:ml-24 md:ml-12 ml-0">
          <h2 className="font-display text-2xl font-medium leading-tight text-on-surface-variant md:text-3xl mb-8">
            Backend Software Engineer & CS Graduate.{" "}
            <span className="text-primary italic">
              Building scalable, efficient systems
            </span>{" "}
            and solving complex architectural challenges.
          </h2>

          <div className="mt-12 flex flex-wrap gap-4">
            <button className="bg-gradient-primary text-on-primary rounded-full px-8 py-4 font-sans text-sm font-bold tracking-wide transition-all hover:brightness-105 active:scale-95">
              View Projects
            </button>
            <button className="bg-surface-container-highest text-on-surface rounded-full px-8 py-4 font-sans text-sm font-bold tracking-wide transition-all hover:opacity-80 active:scale-95">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: Contextual Detail / Tech Stack */}
      <div className="space-y-12 pt-12 md:col-span-4 md:pt-24 lg:col-span-3">
        <div className="space-y-4">
          <h3 className="text-outline font-sans text-[0.75rem] font-bold uppercase tracking-[0.15em]">
            Core Competencies
          </h3>
          <div className="flex flex-col gap-2">
            {["System Design", "Distributed Systems", "API Orchestration"].map(
              (skill) => (
                <div
                  key={skill}
                  className="group flex items-center justify-between border-b border-outline-variant/20 py-2"
                >
                  <span className="font-sans text-sm text-on-surface-variant">
                    {skill}
                  </span>
                  <svg
                    className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              )
            )}
          </div>
        </div>

        <div className="bg-surface-container-highest relative overflow-hidden rounded-xl p-6">
          <div className="bg-primary absolute left-0 top-0 h-full w-1"></div>
          <code className="text-on-surface-variant block font-mono text-sm leading-relaxed">
            <span className="text-primary">const</span> engineer = {"{"}
            <br />
            &nbsp;&nbsp;focus: <span className="text-primary-container">"Infrastructure"</span>,
            <br />
            &nbsp;&nbsp;obsessed_with: <span className="text-primary-container">"Low Latency"</span>,
            <br />
            &nbsp;&nbsp;status: <span className="text-primary-container">"Ready to Scale"</span>
            <br />
            {"}"};
          </code>
        </div>
      </div>
    </section>
  );
}
