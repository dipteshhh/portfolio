# Diptesh Shahi Thakuri – Software Engineering Portfolio

A cleanly architected, editorial-style engineering portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS v4**.

## Overview
This platform serves as a modern, dynamic showcase for my systems-level programming and full-stack software development experience. It features my academic research, professional internships, and an expanding suite of highly technical project case studies. The architecture relies on a singular centralized data layer allowing rapid, programmatic content scaling.

## Key Features
* **Dynamic Case Study Routing**: Highly dynamic page generation leveraging Next.js App Router for zero-friction project additions (`/projects/[slug]`).
* **Design System (No-Line)**: A strict constraint-based architectural style defining elevation solely via programmatic background layer shifts, natively eliminating visual clutter.
* **Component-Driven Pipeline**: Decoupled, reusable `React` functional modules for Home Hero matrices, Grid architectures, and asynchronous syntax/Mermaid graph parsing.

## Tech Stack
* **Framework**: React 19 + Next.js 15 (App Router)
* **Styling**: Tailwind CSS v4 (Inline `@theme` Semantic Variables)
* **Language**: TypeScript (Strict Mode Validation)
* **Visuals**: Mermaid.js (Client-side decoupled diagram SVG rendering)

## Project Structure Overview
```text
src/
├── app/
│   ├── globals.css           # Tailwind v4 constraints and semantic token injections
│   ├── layout.tsx            # Inter & Manrope webfont abstraction integration
│   ├── page.tsx              # Index route orchestrating component arrays
│   └── projects/[slug]/      # Dynamic case-study string-template renderer
├── components/               # Layout fragments (Hero, Experience, Projects, MermaidDiagram)
└── data/
    └── projects.ts           # Global strongly-typed data source powering dynamic routing
```

## How to Run Locally

1. **Clone the repository**:
```bash
git clone https://github.com/dipteshhh/diptesh-portfolio.git
cd diptesh-portfolio
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm run dev
```

4. **Navigate to the dashboard**:
Open [http://localhost:3000](http://localhost:3000)

## How to Build for Production
To test production isomorphic prerendering pipelines locally:
```bash
npm run build
npm run start
```

## Dynamic Route Notes
This repo utilizes structured data bridging. Adding a new project is structurally operationalized: simply inject a new JSON payload object conforming to `Project` inside `src/data/projects.ts` and Next.js will natively extend the homepage grid iterators and spawn static `[slug]` rendering endpoints securely.

## Deployment
*(Deployment Target Pending - Vercel Next.js edge configuration)*

## Author
**Diptesh Shahi Thakuri**  
*Open to backend, full-stack, and systems engineering roles.*  
* **LinkedIn**: [Connect with me](https://www.linkedin.com/in/diptesh-shahi-thakuri-5642b624b/)
* **GitHub**: [@dipteshhh](https://github.com/dipteshhh)
