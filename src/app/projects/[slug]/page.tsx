import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PROJECTS_DATA } from "@/data/projects";
import MermaidDiagram from "@/components/MermaidDiagram";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

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

const DELIGHT_DINING_CHART = `flowchart LR
    subgraph Client["Client / React App"]
        direction TB
        Public["Public Routes<br/>Home / Menu / Reservations / Catering / Checkout"]
        Admin["Admin Routes<br/>Dashboard / Menu / Reservations / Orders / Catering"]
        State["Shared State Layer<br/>AuthProvider / CartProvider / ToastProvider"]
        Hooks["Typed Data Hooks<br/>useMenu / useReservations / useOrders / useCatering"]
    end

    subgraph Access["Frontend Data Access"]
        direction TB
        SupabaseJS["Supabase JS Client"]
        Demo["Demo Fallback<br/>localStorage + seeded menu data"]
    end

    subgraph Backend["Supabase Backend"]
        direction TB
        Auth["Supabase Auth<br/>Admin login + protected routes"]
        DB[("Postgres + RLS<br/>Menu / Reservations / Orders / Catering")]
        Booking["Reservation RPC<br/>book_reservation"]
        Edge["Edge Function<br/>send-confirmation"]
    end

    subgraph External["External Service"]
        direction TB
        Resend["Resend Email API"]
    end

    Public --> State
    Admin --> State
    Admin -.-> Auth
    State --> Hooks
    Hooks --> SupabaseJS
    Hooks -.-> Demo
    SupabaseJS --> Auth
    SupabaseJS --> DB
    SupabaseJS --> Booking
    SupabaseJS --> Edge
    Booking --> DB
    Edge --> Resend

    classDef primary fill:#0059bb,stroke:#0070ea,color:#ffffff,stroke-width:2px;
    classDef secondary fill:#ffffff,stroke:#c1c6d7,color:#1b1c1c,stroke-width:1.5px;
    classDef data fill:#e4e2e1,stroke:#0059bb,color:#1b1c1c,stroke-width:2px;
    classDef external fill:#1b1c1c,stroke:#5b5e5e,color:#ffffff,stroke-width:1.5px;

    class Public,Admin,State,Hooks,Auth secondary;
    class SupabaseJS,Booking,Edge primary;
    class DB,Demo data;
    class Resend external;`;

const RAILA_AI_CHAT_CHART = `flowchart LR
    subgraph Client["Client / React App"]
        direction TB
        UI["Chat UI Surface<br/>Sidebar / ChatRoom / InviteGate / AdminPanel"]
        Hooks["Custom Hooks<br/>useAuth / useMessages / useChatList / usePresence / useUnread"]
        Uploads["File Upload + Reactions<br/>Replies / Search / Slash Commands"]
    end

    subgraph Firebase["Firebase Data Layer"]
        direction TB
        Auth["Firebase Auth<br/>Google sign-in + invite approval"]
        Firestore[("Firestore<br/>users / chats / messages / presence / invites / lastRead / typing")]
        Storage["Firebase Storage<br/>image + document uploads"]
        Rules["Security Rules<br/>member-only chat access"]
    end

    subgraph Functions["Cloud Functions"]
        direction TB
        AI["AI Functions<br/>generateAiResponse + summarizeRoom"]
        Invite["Invite Functions<br/>create / redeem / list / toggle"]
    end

    subgraph External["External Service"]
        direction TB
        Gemini["Gemini API"]
    end

    UI --> Hooks
    UI --> Uploads
    Hooks --> Auth
    Hooks --> Firestore
    Uploads --> Storage
    AI --> Firestore
    Invite --> Firestore
    UI --> AI
    UI --> Invite
    Firestore -.-> Rules
    AI --> Gemini

    classDef primary fill:#0059bb,stroke:#0070ea,color:#ffffff,stroke-width:2px;
    classDef secondary fill:#ffffff,stroke:#c1c6d7,color:#1b1c1c,stroke-width:1.5px;
    classDef data fill:#e4e2e1,stroke:#0059bb,color:#1b1c1c,stroke-width:2px;
    classDef external fill:#1b1c1c,stroke:#5b5e5e,color:#ffffff,stroke-width:1.5px;

    class UI,Hooks,Uploads,Auth secondary;
    class AI,Invite primary;
    class Firestore,Storage,Rules data;
    class Gemini external;`;

const AI_RESUME_ANALYZER_CHART = `flowchart LR
    subgraph Client["Client / Resume Review UI"]
        direction TB
        Upload["Resume Upload<br/>PDF / DOCX"]
        JD["Job Description Input"]
        Results["Structured Results View<br/>ATS / Grammar / Keywords / Bullet Feedback"]
    end

    subgraph Flask["Flask Application"]
        direction TB
        API["Upload + Analysis Route"]
        Normalize["Preprocessing + Segmentation"]
        Response["JSON Response Builder"]
    end

    subgraph Pipeline["Analysis Pipeline"]
        direction TB
        Parse["Document Extraction<br/>pdfplumber / python-docx"]
        Format["Formatting + ATS Checks"]
        Keyword["Keyword Ranking + Matching"]
        Writing["Grammar + Bullet Strength Review"]
    end

    subgraph NLP["NLP Components"]
        direction TB
        Spacy["spaCy + NLTK"]
        LT["LanguageTool"]
        Models["Transformers + skillNer"]
    end

    Upload --> API
    JD --> API
    API --> Parse
    Parse --> Normalize
    Normalize --> Format
    Normalize --> Keyword
    Normalize --> Writing
    Format --> Response
    Keyword --> Response
    Writing --> Response
    Spacy --> Keyword
    Spacy --> Writing
    LT --> Writing
    Models --> Keyword
    Models --> Writing
    Response --> Results

    classDef primary fill:#0059bb,stroke:#0070ea,color:#ffffff,stroke-width:2px;
    classDef secondary fill:#ffffff,stroke:#c1c6d7,color:#1b1c1c,stroke-width:1.5px;
    classDef data fill:#e4e2e1,stroke:#0059bb,color:#1b1c1c,stroke-width:2px;
    classDef external fill:#1b1c1c,stroke:#5b5e5e,color:#ffffff,stroke-width:1.5px;

    class Upload,JD,Results secondary;
    class API,Normalize,Response primary;
    class Parse,Format,Keyword,Writing data;
    class Spacy,LT,Models external;`;

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

function DelightDiningArchitectureFallback() {
  const sections = [
    {
      title: "Public Experience",
      tone: "border-primary/30 bg-white/70",
      items: ["Home + Menu", "Reservations + Catering", "Cart + Checkout"],
    },
    {
      title: "Admin Operations",
      tone: "border-primary/30 bg-white/70",
      items: ["Protected Dashboard", "Menu + Reservation Managers", "Orders + Catering Workflows"],
    },
    {
      title: "App State + Hooks",
      tone: "border-primary bg-primary/8",
      items: ["AuthProvider + CartProvider", "Toast Feedback Layer", "Typed data hooks per workflow"],
    },
    {
      title: "Supabase Backend",
      tone: "border-outline-variant bg-surface-container-highest/80",
      items: [
        "Auth + protected admin access",
        "Postgres tables + RLS policies",
        "Atomic reservation booking RPC",
      ],
    },
    {
      title: "Fallback + Notifications",
      tone: "border-on-surface/20 bg-on-surface text-white",
      items: ["Demo-mode localStorage path", "Edge function email trigger", "Resend delivery"],
    },
  ];

  const flows = [
    "1. Public routes load menu, reservation, catering, and checkout flows through typed hooks.",
    "2. Admin routes require auth before exposing dashboard, reservation, order, and menu operations.",
    "3. Supabase persists menu items, reservations, catering inquiries, orders, and order items with RLS protection.",
    "4. Reservation booking uses a database RPC to enforce per-slot capacity before insert.",
    "5. Successful reservation and catering writes invoke the confirmation edge function.",
    "6. If Supabase env vars are missing, the app falls back to local demo data instead of failing hard.",
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
          Public Ordering Flow
        </div>
        <div className="rounded-full bg-primary/10 px-4 py-2 text-center">
          Protected Admin Ops
        </div>
        <div className="rounded-full bg-primary/10 px-4 py-2 text-center">
          Fallback + Email Delivery
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

function RailaAiChatArchitectureFallback() {
  const sections = [
    {
      title: "Client UI",
      tone: "border-primary/30 bg-white/70",
      items: ["Sidebar + ChatRoom", "InviteGate + AdminPanel", "Search / replies / reactions"],
    },
    {
      title: "Hook Layer",
      tone: "border-primary bg-primary/8",
      items: ["useAuth + useMessages", "useChatList + usePresence", "useUnread state tracking"],
    },
    {
      title: "Firebase Core",
      tone: "border-outline-variant bg-surface-container-highest/80",
      items: ["Firebase Auth", "Firestore chats + presence", "Storage for file uploads"],
    },
    {
      title: "Cloud Functions",
      tone: "border-primary/30 bg-surface-container-lowest/90",
      items: ["AI response + room summary", "Invite code lifecycle", "Server-side secret boundary"],
    },
    {
      title: "External AI",
      tone: "border-on-surface/20 bg-on-surface text-white",
      items: ["Gemini API", "No client-side secrets"],
    },
  ];

  const flows = [
    "1. React UI routes chat, DM, invite, and admin interactions through focused custom hooks.",
    "2. Firebase Auth gates access before users can enter the app or redeem invite codes.",
    "3. Firestore stores public chat, group and DM threads, presence, typing indicators, invites, and per-user lastRead state.",
    "4. Firebase Storage handles shared files while Firestore keeps the message metadata and realtime subscriptions.",
    "5. Cloud Functions own AI chat, room summaries, and invite-code workflows instead of exposing secrets in the browser.",
    "6. Gemini sits behind the Cloud Function boundary so AI features stay server-side and easier to secure.",
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
          Realtime Messaging
        </div>
        <div className="rounded-full bg-primary/10 px-4 py-2 text-center">
          Invite + Admin Controls
        </div>
        <div className="rounded-full bg-primary/10 px-4 py-2 text-center">
          Server-side AI
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

function AiResumeAnalyzerArchitectureFallback() {
  const sections = [
    {
      title: "Client Input",
      tone: "border-primary/30 bg-white/70",
      items: ["Resume upload", "Job description entry", "Structured analysis results"],
    },
    {
      title: "Flask App",
      tone: "border-primary bg-primary/8",
      items: ["Upload + analysis endpoint", "Preprocessing + segmentation", "JSON response shaping"],
    },
    {
      title: "Document Parsing",
      tone: "border-primary/30 bg-surface-container-lowest/90",
      items: ["pdfplumber for PDF", "python-docx for DOCX", "Extracted text normalization"],
    },
    {
      title: "Analysis Layers",
      tone: "border-outline-variant bg-surface-container-highest/80",
      items: ["ATS + formatting checks", "Keyword ranking", "Grammar + bullet review"],
    },
    {
      title: "NLP Tooling",
      tone: "border-on-surface/20 bg-on-surface text-white",
      items: ["spaCy + NLTK", "LanguageTool", "Transformers + skillNer"],
    },
  ];

  const flows = [
    "1. The user submits a resume file and target job description through the web interface.",
    "2. Flask accepts the upload and routes PDF and DOCX files through the matching parser.",
    "3. Extracted resume text is normalized into cleaner segments before scoring begins.",
    "4. Separate analysis stages evaluate ATS structure, missing keywords, grammar issues, and bullet quality.",
    "5. NLP components enrich the ranking and writing checks instead of relying on a single opaque score.",
    "6. The backend returns structured JSON so the frontend can render actionable revision feedback.",
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
          Parse + Normalize
        </div>
        <div className="rounded-full bg-primary/10 px-4 py-2 text-center">
          Multi-stage Analysis
        </div>
        <div className="rounded-full bg-primary/10 px-4 py-2 text-center">
          Structured Feedback
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

function ProjectSidebarAction(props: {
  href?: string;
  label: string;
  note?: string;
  icon: React.ReactNode;
}) {
  if (props.href) {
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-primary transition-opacity hover:opacity-80"
      >
        {props.icon}
        {props.label}
      </a>
    );
  }

  if (!props.note) {
    return null;
  }

  return (
    <div className="flex items-start gap-3 text-on-surface-variant">
      <div className="mt-0.5 shrink-0 opacity-70">{props.icon}</div>
      <div className="space-y-1">
        <div className="text-on-surface text-sm font-semibold">{props.label}</div>
        <p className="max-w-xs text-xs font-medium leading-relaxed opacity-80">
          {props.note}
        </p>
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
        <div className="bg-surface-container-low group relative aspect-video w-full overflow-hidden rounded-xl md:h-[500px] md:aspect-auto">
          {project.imageSrc ? (
            <Image
              src={project.imageSrc}
              alt={project.imageAlt || project.title}
              fill
              priority
              sizes="100vw"
              className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.015] md:object-cover md:p-0"
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

            <div className="font-sans space-y-5 text-sm font-semibold">
              <ProjectSidebarAction
                href={project.codeUrl}
                label="View Source Code"
                note={project.codeAvailabilityNote}
                icon={
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
                }
              />
              <ProjectSidebarAction
                href={project.liveUrl}
                label="Live Demo"
                note={project.liveAvailabilityNote}
                icon={
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
                }
              />
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
            ) : project.slug === "delight-dining" ? (
              <div className="bg-surface-container-low mb-12 rounded-xl py-8">
                <MermaidDiagram
                  chart={DELIGHT_DINING_CHART}
                  fallback={<DelightDiningArchitectureFallback />}
                />
              </div>
            ) : project.slug === "raila-ai-chat" ? (
              <div className="bg-surface-container-low mb-12 rounded-xl py-8">
                <MermaidDiagram
                  chart={RAILA_AI_CHAT_CHART}
                  fallback={<RailaAiChatArchitectureFallback />}
                />
              </div>
            ) : project.slug === "ai-resume-analyzer" ? (
              <div className="bg-surface-container-low mb-12 rounded-xl py-8">
                <MermaidDiagram
                  chart={AI_RESUME_ANALYZER_CHART}
                  fallback={<AiResumeAnalyzerArchitectureFallback />}
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
