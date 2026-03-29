import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS_DATA } from "@/data/projects";

export default function Projects() {
  return (
    <>
      {/* Hero Section for Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-8 pb-24 pt-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8">
            <span className="font-sans text-primary mb-4 block text-[0.75rem] font-bold uppercase tracking-[0.15em]">
              PORTFOLIO / 2026
            </span>
            <h2 className="font-display text-on-surface mb-8 text-[3.5rem] font-extrabold leading-[1.1] tracking-tight md:text-[4.5rem] lg:text-[5.5rem]">
              Engineering logic <br />
              into digital structures.
            </h2>
            <p className="font-sans text-on-surface-variant max-w-xl text-lg leading-relaxed">
              A selection of software, AI, data, and systems projects spanning
              product engineering, research, and practical experimentation.
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
                <article
                  key={project.title}
                  className="group flex flex-col rounded-2xl bg-surface p-5 transition-all duration-300 hover:shadow-xl hover:shadow-on-surface/[0.04] hover:-translate-y-1"
                >
                  <div className="bg-surface-container-highest mb-6 aspect-video w-full overflow-hidden rounded-xl">
                    <div className="relative h-full w-full">
                      {project.imageSrc && (
                        <Image
                          src={project.imageSrc}
                          alt={project.imageAlt || project.title}
                          fill
                          sizes="(min-width: 1024px) 42rem, (min-width: 768px) 50vw, 100vw"
                          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-[1.04]"
                        />
                      )}
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.08))] transition-opacity group-hover:opacity-60" />
                    </div>
                  </div>

                  <h3 className="font-display mb-3 text-2xl font-bold text-on-surface md:text-3xl">
                    {project.title}
                  </h3>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="bg-surface-container-high font-sans text-on-surface-variant rounded-md px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-[0.08rem]"
                      >
                        {t}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="font-sans text-on-surface-variant rounded-md px-1 py-1 text-[0.7rem] font-bold">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>

                  <p className="font-sans text-on-surface-variant mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {project.focus && (
                    <p className="font-sans text-on-surface-variant mb-6 text-sm leading-relaxed">
                      <strong className="font-sans font-semibold text-on-surface">
                        Focus:
                      </strong>{" "}
                      {project.focus.replace("Focus: ", "")}
                    </p>
                  )}

                  <div className="mt-auto flex items-center pt-4 border-t border-outline-variant/15">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-primary group/link inline-flex items-center gap-2 font-semibold transition-all hover:gap-3"
                    >
                      View Case Study
                      <svg
                        className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5"
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
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Philosophy Section */}
      <section className="mx-auto max-w-7xl px-8 py-32">
        <div className="grid grid-cols-12 items-start gap-8">
          <div className="col-span-12 md:col-span-4">
            <span className="font-sans text-primary mb-4 block text-[0.75rem] font-bold uppercase tracking-[0.15em]">
              Philosophy
            </span>
            <h2 className="font-display text-4xl font-extrabold tracking-tighter text-on-surface">
              THE CORE
              <br />
              PRINCIPLES.
            </h2>
          </div>
          <div className="col-span-12 grid grid-cols-1 gap-12 md:col-span-8 md:grid-cols-2">
            {[
              {
                title: "Observability First",
                desc: "I value software that can be understood, debugged, and improved over time. Clear signals, honest tradeoffs, and maintainable structure matter more than flashy complexity.",
                num: "01",
              },
              {
                title: "Build What Ships",
                desc: "I care about practical engineering work: products people can use, experiments that can be reproduced, and systems that can be explained clearly in interviews and on teams.",
                num: "02",
              },
            ].map((p) => (
              <div key={p.num} className="group">
                <span className="font-display text-primary/20 text-5xl font-black group-hover:text-primary/40 transition-colors">
                  {p.num}
                </span>
                <h4 className="font-display mt-2 mb-3 text-lg font-bold text-on-surface">
                  {p.title}
                </h4>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
