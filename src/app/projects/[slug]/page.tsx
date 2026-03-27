import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS_DATA } from "@/data/projects";
import MermaidDiagram from "@/components/MermaidDiagram";

const LEARNEASE_CHART = `flowchart TD
subgraph Client [Client / Browser]
UI[Next.js App Router UI]
Poll[Polling Mechanism]
end

subgraph Backend [Backend: Single-Replica Express]
    API[API Handlers]
    Auth[Google OAuth & HMAC]
    Ext[Text Extraction & Hash Deduplication]
    Async[Async Generation Loop \\n & Startup Recovery]
    Gate[LLM Pre-Classifier Gate]
end

subgraph Storage [Data Layer]
    DB[(SQLite DB \\n Metadata & Status)]
    Disk[(Encrypted Local Disk \\n Files & Extracted Text)]
end

subgraph External [External Services]
    OpenAI[OpenAI API \\n Strict JSON Grounding]
end

%% Core Flows
UI -- 1. Upload PDF --> API
API --> Ext
Ext -- 2. Save Hash --> Disk
Ext -- 3. Update Status --> DB

UI -- 4. POST /api/study-guide --> API
API -- 5. Returns 202 Accepted --> UI
API -. 6. Triggers Async Job .-> Async
Async --> Gate
Gate -- 7. Constrained Prompt --> OpenAI
OpenAI -- 8. Structured JSON --> Async
Async -- 9. Persist Cached Result --> DB

Poll -- 10. GET /api/documents/:id --> API
API -- 11. Read Status --> DB
API -- 12. Return Data --> UI

%% Styling using our Design System
classDef primary fill:#0059bb,stroke:#0070ea,color:#fff,stroke-width:2px;
classDef secondary fill:#f6f3f2,stroke:#c1c6d7,color:#1b1c1c,stroke-width:1px;
classDef database fill:#e4e2e1,stroke:#0059bb,color:#1b1c1c,stroke-width:2px,stroke-dasharray: 5 5;
classDef external fill:#1b1c1c,stroke:#5b5e5e,color:#fff,stroke-width:1px;

class UI,Poll secondary;
class API,Auth,Ext,Async,Gate primary;
class DB,Disk database;
class OpenAI external;`;

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
            <img
              src={project.imageSrc}
              alt={project.imageAlt || project.title}
              className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
            />
          ) : (
            <div className="text-on-surface-variant absolute inset-0 flex items-center justify-center font-bold tracking-widest uppercase">
              [ Featured Graphic / System Diagram ]
            </div>
          )}
          <div className="bg-primary/5 absolute inset-0 transition-colors group-hover:bg-transparent" />
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
                <MermaidDiagram chart={LEARNEASE_CHART} />
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
