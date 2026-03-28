import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PROJECTS_DATA } from "@/data/projects";
import MermaidDiagram from "@/components/MermaidDiagram";

const LEARNEASE_CHART = `flowchart LR
    subgraph Client["Client / Browser"]
        direction TB
        UI["Next.js App Router UI"]
        Poll["Document Upload<br/>Status Polling"]
    end

    subgraph Backend["Single-Replica Express Backend"]
        direction TB
        API["API Handlers"]
        Auth["OAuth Session Verification"]
        Extract["Text Extraction<br/>Hash Deduplication"]
        Worker["Async Guide Worker<br/>Startup Recovery"]
        Gate["LLM Pre-Classifier Gate"]
    end

    subgraph Storage["Data Layer"]
        direction TB
        DB[("SQLite<br/>Metadata + Status")]
        Disk[("Encrypted File Cache<br/>+ Extracted Text")]
    end

    subgraph External["External Service"]
        direction TB
        OpenAI["OpenAI API<br/>Strict JSON Grounding"]
    end

    UI --> API
    Poll -.-> API
    API -.-> Auth
    API --> Extract
    API --> Worker
    Extract --> Disk
    Extract --> DB
    Worker --> Gate
    Gate --> OpenAI
    OpenAI --> Worker
    Worker --> DB
    API -.-> DB

    classDef primary fill:#0059bb,stroke:#0070ea,color:#ffffff,stroke-width:2px;
    classDef secondary fill:#ffffff,stroke:#c1c6d7,color:#1b1c1c,stroke-width:1.5px;
    classDef data fill:#e4e2e1,stroke:#0059bb,color:#1b1c1c,stroke-width:2px;
    classDef external fill:#1b1c1c,stroke:#5b5e5e,color:#ffffff,stroke-width:1.5px;

    class UI,Poll secondary;
    class API,Auth,Extract,Worker,Gate primary;
    class DB,Disk data;
    class OpenAI external;`;

function LearnEaseArchitectureFallback() {
  const sections = [
    {
      title: "Client / Browser",
      tone: "border-primary/30 bg-white/70",
      items: ["Next.js App Router UI", "Document Upload + Status Polling"],
    },
    {
      title: "Backend / API",
      tone: "border-primary bg-primary/8",
      items: [
        "API Handlers",
        "OAuth Session Verification",
      ],
    },
    {
      title: "Processing Layer",
      tone: "border-primary/30 bg-surface-container-lowest/90",
      items: [
        "Text Extraction + Hash Deduplication",
        "Async Guide Worker + Startup Recovery",
        "LLM Pre-Classifier Gate",
      ],
    },
    {
      title: "Data Layer",
      tone: "border-outline-variant bg-surface-container-highest/80",
      items: ["SQLite Metadata + Status", "Encrypted File Cache + Text"],
    },
    {
      title: "External Service",
      tone: "border-on-surface/20 bg-on-surface text-white",
      items: ["OpenAI API", "Strict JSON Grounding"],
    },
  ];

  const flows = [
    "1. UI uploads documents to API handlers",
    "2. Extraction pipeline deduplicates content and stores files",
    "3. API returns 202 while async generation continues in-process",
    "4. Pre-classifier and constrained prompt call OpenAI",
    "5. Structured results are cached in SQLite",
    "6. Frontend polling retrieves completed study guides",
  ];

  return (
    <div className="rounded-xl border border-outline-variant/30 bg-white/60 p-6 shadow-[0_20px_40px_rgba(27,28,28,0.04)]">
      <div className="grid gap-4 xl:grid-cols-5">
        {sections.map((section) => (
          <div
            key={section.title}
            className={`rounded-2xl border p-4 ${section.tone}`}
          >
            <h3 className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.18em]">
              {section.title}
            </h3>
            <div className="mt-4 space-y-2">
              {section.items.map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-surface-container-lowest/80 px-3 py-2 text-sm font-medium text-on-surface shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="my-6 grid gap-3 text-xs font-bold uppercase tracking-[0.14em] text-primary md:grid-cols-3">
        <div className="rounded-full bg-primary/10 px-4 py-2 text-center">
          Upload + Extract
        </div>
        <div className="rounded-full bg-primary/10 px-4 py-2 text-center">
          Async Generation
        </div>
        <div className="rounded-full bg-primary/10 px-4 py-2 text-center">
          Poll + Deliver
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {flows.map((flow) => (
          <div
            key={flow}
            className="rounded-xl border border-outline-variant/20 bg-surface-container-low px-4 py-3 text-sm leading-relaxed text-on-surface-variant"
          >
            {flow}
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function ProjectCaseStudy(props: {
  params: Promise<{ slug: string }>;
}) {
  // In Next.js 15, route parameters are asynchronous and must be awaited.
  const resolvedParams = await props.params;
  const slug = resolvedParams.slug;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-8 pb-32 pt-32 md:px-8">
      {/* Minimalist Header */}
      <header className="mb-20">
        <div className="mb-6 flex items-center gap-2">
          <Link
            href="/"
            className="font-sans text-on-surface-variant hover:text-primary flex items-center gap-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] transition-colors"
          >
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
          <span className="text-on-surface-variant opacity-50">/</span>
          <span className="bg-surface-container-highest font-sans text-primary rounded-sm px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em]">
            Case Study
          </span>
        </div>
        <h1 className="font-display text-on-surface mb-8 text-5xl font-extrabold leading-[1.1] tracking-tighter md:text-7xl">
          {project.title.replace(/\s*\(.*?\)\s*/g, "")}
        </h1>
        <p className="font-sans text-on-surface-variant max-w-2xl text-xl font-light leading-relaxed">
          {project.description}
        </p>
      </header>

      {/* Visual Anchor Placeholder (No-Line surface) */}
      <div className="mb-32">
        <div className="bg-surface-container-low group relative h-[500px] w-full overflow-hidden rounded-xl">
          {project.imageSrc ? (
            <Image
              src={project.imageSrc}
              alt={project.imageAlt || project.title}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
            />
          ) : (
            <div className="text-on-surface-variant absolute inset-0 flex items-center justify-center font-bold tracking-widest uppercase">
              [ Featured Graphic / System Diagram ]
            </div>
          )}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.12))] transition-opacity group-hover:opacity-60" />
        </div>
      </div>

      {/* Content Grid */}
      <article className="grid grid-cols-1 items-start gap-16 md:grid-cols-12">
        {/* Sticky Sidebar Meta Panel */}
        <aside className="order-2 space-y-12 md:order-1 md:col-span-4 md:sticky md:top-32">
          <div className="bg-surface-container-low rounded-xl p-8">
            <h4 className="font-sans text-on-surface-variant mb-6 text-[0.7rem] font-bold uppercase tracking-widest">
              Technical Stack
            </h4>
            <div className="mb-8 flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span
                  key={t}
                  className="bg-surface-container-high font-sans text-on-surface-variant rounded-sm px-3 py-1 text-[0.75rem] font-bold uppercase tracking-[0.1rem]"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="font-sans space-y-4 text-sm font-semibold">
              <a
                href={project.codeUrl || "#"}
                className={`flex items-center gap-2 transition-opacity ${
                  project.codeUrl
                    ? "text-primary hover:opacity-80"
                    : "text-on-surface-variant cursor-not-allowed opacity-50"
                }`}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                View Source Code
              </a>
              <a
                href={project.liveUrl || "#"}
                className={`flex items-center gap-2 transition-opacity ${
                  project.liveUrl
                    ? "text-primary hover:opacity-80"
                    : "text-on-surface-variant cursor-not-allowed opacity-50"
                }`}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </aside>

        {/* Main Long-form Content Column */}
        <div className="font-sans order-1 space-y-24 md:order-2 md:col-span-8">
          {/* Section: Overview */}
          <section>
            <h2 className="font-display text-on-surface mb-8 text-3xl font-bold tracking-tight">
              Executive Overview
            </h2>
            <div className="text-on-surface-variant space-y-6 leading-relaxed whitespace-pre-line">
              <p>{project.executiveSummary}</p>
            </div>
          </section>

          {/* Section: Architecture */}
          <section>
            <div className="bg-primary/20 mb-12 h-px w-24"></div>
            <h2 className="font-display text-on-surface mb-8 text-3xl font-bold tracking-tight">
              System Architecture
            </h2>
            <p className="text-on-surface-variant mb-12 leading-relaxed whitespace-pre-line">
              {project.systemArchitecture}
            </p>
            {project.slug === "learn-ease" ? (
              <div className="bg-surface-container-low mb-12 rounded-xl py-8">
                <MermaidDiagram
                  chart={LEARNEASE_CHART}
                  fallback={<LearnEaseArchitectureFallback />}
                />
              </div>
            ) : (
              <div className="bg-surface-container-low flex h-64 items-center justify-center rounded-xl p-12 text-center">
                <p className="text-on-surface-variant font-mono text-sm font-bold uppercase tracking-widest opacity-60">
                  [ Diagram Placeholder ]
                </p>
              </div>
            )}
          </section>

          {/* Section: Technical Decisions */}
          <section>
            <h2 className="font-display text-on-surface mb-8 text-3xl font-bold tracking-tight">
              Technical Deep-Dive
            </h2>
            <div className="space-y-12">
              <div>
                <h3 className="font-display text-on-surface mb-4 flex items-center gap-3 text-xl font-bold">
                  <span className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-full text-xs">
                    01
                  </span>
                  Implementation Core
                </h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed whitespace-pre-line">
                  {project.technicalDeepDive}
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
