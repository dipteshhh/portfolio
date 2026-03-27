import React from "react";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";

export default function Projects() {
  return (
    <>
      {/* Hero Section for Projects */}
      <section className="mx-auto max-w-7xl px-8 pb-24 pt-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8">
            <span className="font-sans text-primary mb-4 block text-[0.75rem] font-bold uppercase tracking-[0.15em]">
              PORTFOLIO / 2024
            </span>
            <h2 className="font-display text-on-surface mb-8 text-[3.5rem] font-extrabold leading-[1.1] tracking-tight md:text-[4.5rem] lg:text-[5.5rem]">
              Engineering logic <br />
              into digital structures.
            </h2>
            <p className="font-sans text-on-surface-variant max-w-xl text-lg leading-relaxed">
              A selection of backend architectures designed for scale,
              resilience, and high-performance throughput. No fluff—just
              optimized systems.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="bg-surface-container-low py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
            {PROJECTS_DATA.map((project) => {
              return (
                <article key={project.title} className="group flex flex-col">
                  <div className="bg-surface-container-highest mb-8 aspect-video w-full overflow-hidden rounded-lg">
                    <div className="relative h-full w-full">
                      {project.imageSrc && (
                        <img
                          src={project.imageSrc}
                          alt={project.imageAlt || project.title}
                          className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                        />
                      )}
                      <div className="bg-primary/5 absolute inset-0 transition-colors group-hover:bg-transparent" />
                    </div>
                  </div>

                  <h3 className="font-display mb-4 text-3xl font-bold text-on-surface">
                    {project.title}
                  </h3>
                  
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.techStack.map((t) => (
                      <span
                        key={t}
                        className="bg-surface-container-high font-sans text-on-surface-variant rounded-sm px-3 py-1 text-[0.75rem] font-bold uppercase tracking-[0.1rem]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <p className="font-sans text-on-surface-variant mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {project.focus && (
                    <p className="font-sans text-on-surface-variant mb-8 leading-relaxed">
                      <strong className="font-sans font-semibold text-on-surface">Focus:</strong> {project.focus.replace("Focus: ", "")}
                    </p>
                  )}

                  <div className="mt-auto flex flex-wrap gap-6">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-primary group/link inline-flex items-center gap-2 font-semibold transition-all hover:gap-4"
                    >
                      View Case Study
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="text-on-surface-variant hover:text-primary transition-colors font-sans text-sm font-semibold"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        className="text-on-surface-variant hover:text-primary transition-colors font-sans text-sm font-semibold"
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Philosophy Section */}
      <section className="mx-auto max-w-7xl px-8 py-32">
        <div className="grid grid-cols-12 items-center gap-8">
          <div className="col-span-12 md:col-span-4">
            <h2 className="font-display text-4xl font-extrabold tracking-tighter text-on-surface">
              THE CORE<br />PRINCIPLES.
            </h2>
          </div>
          <div className="col-span-12 grid grid-cols-1 gap-12 md:col-span-8 md:grid-cols-2">
            <div>
              <h4 className="font-display mb-2 text-lg font-bold text-on-surface">
                Observability First
              </h4>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                Systems aren't finished until they're measurable. Every project
                includes structured logging, tracing, and metrics as first-class
                citizens.
              </p>
            </div>
            <div>
              <h4 className="font-display mb-2 text-lg font-bold text-on-surface">
                Failure is Expected
              </h4>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                Designing for resilience means building circuit breakers, retries,
                and graceful degradation into every service boundary.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
