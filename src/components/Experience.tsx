import React from "react";
import Image from "next/image";

type ExperienceEntry = {
  id: string;
  date: string;
  company: string;
  role: string;
  description: string;
  bullets: string[];
  skills: string[];
  imageSrc?: string;
  imageAlt?: string;
};

const EXPERIENCE_DATA: ExperienceEntry[] = [
  {
    id: "actual-reality",
    date: "SEP 2025 — DEC 2025",
    company: "ACTUAL REALITY TECHNOLOGIES",
    role: "Software Developer Intern",
    description:
      "Worked on a four-person software team delivering enterprise web applications for client-facing business workflows.",
    bullets: [
      "Owned frontend implementation work on the Top-Down Estimate Maker built for SSOE",
      "Built reusable React UI components with Tailwind CSS and shadcn/ui for desktop and mobile workflows",
      "Helped shape a shared monorepo setup using pnpm, Turborepo, and Nx to support team development",
    ],
    skills: ["Next.js", "TypeScript", "React", "Tailwind", "shadcn/ui", "Turborepo"],
    imageSrc: "/covers/actual-reality-cover.svg",
    imageAlt: "Linear-style ticket tracker cover showing supervisor-assigned frontend and backend work for client delivery",
  },
  {
    id: "utoledo-ml",
    date: "SUMMER 2025",
    company: "UNIVERSITY OF TOLEDO",
    role: "Undergraduate Research Assistant (ML)",
    description:
      "Conducted machine learning research on predictive disease diagnosis using structured healthcare datasets in MATLAB.",
    bullets: [
      "Compared Logistic Regression, Decision Trees, SVMs, and Random Forests across diabetes, heart disease, and breast cancer datasets",
      "Built a reproducible preprocessing and evaluation workflow with feature analysis and hyperparameter tuning",
      "Reported best ROC AUC results of 80.7% for diabetes, 93.1% for heart disease, and 99.9% for breast cancer",
    ],
    skills: ["MATLAB", "Machine Learning", "Model Evaluation"],
    imageSrc: "/covers/utoledo-ml-cover.svg",
    imageAlt: "Custom University of Toledo ML research cover showing healthcare datasets, model comparison, and evaluation metrics",
  },
];

export default function Experience() {
  return (
    <>
      <section id="experience" className="mx-auto max-w-7xl px-8 py-32">
        <header className="mb-24 max-w-3xl">
          <div className="mb-4">
            <span className="font-sans text-[0.75rem] font-bold uppercase tracking-[0.15em] text-primary">
              Experience
            </span>
          </div>
          <h2 className="font-display mb-8 text-5xl font-extrabold tracking-tighter text-on-surface md:text-6xl">
            Shipping <span className="text-primary">software</span>, research,
            and systems work.
          </h2>
          <p className="font-sans text-lg font-light leading-relaxed text-on-surface-variant max-w-2xl">
            A concise timeline of internship delivery, research execution, and
            technical problem-solving across software engineering and applied ML.
          </p>
        </header>

        {/* Timeline Section */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div
            className="absolute left-0 h-full w-0.5 opacity-20 md:left-1/2 md:-translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--color-primary) 15%, var(--color-primary) 85%, transparent)",
            }}
          />

          <div className="space-y-32">
            {EXPERIENCE_DATA.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <article
                  key={exp.id}
                  className={`relative flex flex-col items-start md:items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Marker */}
                  <div className="absolute left-0 z-10 h-4 w-4 -translate-y-1/2 rounded-full bg-primary ring-8 ring-primary/10 md:left-1/2 md:translate-y-0 md:-translate-x-1/2" />

                  {/* Content Card */}
                  <div
                    className={`ml-10 md:ml-0 md:w-1/2 ${
                      isEven ? "md:pl-16" : "md:pr-16"
                    }`}
                  >
                    <div
                      className={`bg-surface-container-low rounded-xl p-8 ${
                        isEven ? "border-l-4" : "border-r-4"
                      } border-primary`}
                    >
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                        <span className="bg-surface-container-highest font-sans text-[0.625rem] font-bold uppercase tracking-[0.15em] text-on-surface-variant rounded-sm px-3 py-1">
                          {exp.date}
                        </span>
                        <div className="font-display text-primary flex items-center gap-2 text-sm font-bold tracking-tight">
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      <h3 className="font-display text-on-surface mb-4 text-2xl font-bold">
                        {exp.role}
                      </h3>

                      <div className="font-sans text-on-surface-variant mb-6 flex-col space-y-4 text-sm leading-relaxed">
                        <p>{exp.description}</p>
                        <ul className="space-y-3">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="flex gap-3">
                              <span className="text-primary mt-1 select-none font-bold">
                                /
                              </span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-surface-container-high font-sans text-on-surface-variant rounded-sm px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-wider"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual Accent */}
                  <div
                    className={`hidden md:block md:w-1/2 ${
                      isEven ? "text-right md:pr-16" : "text-left md:pl-16"
                    }`}
                  >
                    {exp.imageSrc && (
                      <div className="relative h-48 w-full overflow-hidden rounded-xl shadow-[0_18px_32px_rgba(27,28,28,0.12)]">
                        <Image
                          src={exp.imageSrc}
                          alt={exp.imageAlt || exp.company}
                          fill
                          sizes="(min-width: 768px) 42vw, 100vw"
                          className="object-cover transition-transform duration-500 hover:scale-[1.015]"
                        />
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Code Block Visual Break */}
      <section className="bg-surface-container-low py-24">
        <div className="mx-auto max-w-4xl px-8">
          <div className="bg-surface-container-highest group relative overflow-hidden rounded-lg shadow-sm">
            <div className="bg-primary absolute bottom-0 left-0 top-0 w-1" />
            <div className="border-outline-variant/20 flex items-center gap-2 border-b bg-surface-container-highest/50 px-6 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="font-sans text-on-surface-variant ml-4 text-[0.625rem] font-bold uppercase tracking-[0.15em]">
                optimization_logic.py
              </span>
            </div>
            <pre className="text-on-surface-variant overflow-x-auto p-8 font-mono text-xs leading-relaxed md:text-sm">
              <span className="text-primary">def</span> <span className="text-primary-container">process_pipeline</span>
              (data_stream):{"\n"}
              {"    "}
              <span className="text-on-surface-variant opacity-70">
                # Implement non-blocking asynchronous processing
              </span>
              {"\n"}
              {"    "}
              <span className="text-primary">async for</span> chunk{" "}
              <span className="text-primary">in</span> data_stream.batch(
              <span className="text-primary-container">1024</span>):{"\n"}
              {"        "}
              <span className="text-primary">if</span> validate(chunk):{"\n"}
              {"            "}
              <span className="text-primary">await</span> cache.set_many(
              {"{"}c.id: c.payload <span className="text-primary">for</span> c{" "}
              <span className="text-primary">in</span> chunk{"}"}, expire=
              <span className="text-primary-container">3600</span>){"\n"}
              {"            "}
              <span className="text-primary">yield</span> Response(status=
              <span className="text-green-600">&quot;PROCESSED&quot;</span>, id=chunk.id)
            </pre>
          </div>
        </div>
      </section>
    </>
  );
}
