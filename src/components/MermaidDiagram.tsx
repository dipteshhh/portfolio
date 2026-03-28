"use client";

import React, { useEffect, useId, useRef, useState } from "react";

interface MermaidDiagramProps {
  chart: string;
  className?: string;
  fallback?: React.ReactNode;
}

const MERMAID_CONFIG = {
  startOnLoad: false,
  theme: "base",
  securityLevel: "loose",
  suppressErrorRendering: true,
  deterministicIds: true,
  fontFamily: "Inter, sans-serif",
  themeVariables: {
    background: "transparent",
    primaryColor: "#0059bb",
    primaryBorderColor: "#0070ea",
    primaryTextColor: "#ffffff",
    secondaryColor: "#ffffff",
    secondaryBorderColor: "#c1c6d7",
    secondaryTextColor: "#1b1c1c",
    tertiaryColor: "#e4e2e1",
    tertiaryBorderColor: "#c1c6d7",
    tertiaryTextColor: "#1b1c1c",
    lineColor: "#6d7373",
    textColor: "#1b1c1c",
    mainBkg: "#ffffff",
    clusterBkg: "#f8fbff",
    clusterBorder: "#d7e3f5",
    edgeLabelBackground: "#fbf9f8",
    fontSize: "15px",
  },
  flowchart: {
    htmlLabels: true,
    useMaxWidth: false,
    curve: "linear",
    nodeSpacing: 48,
    rankSpacing: 72,
    padding: 10,
  },
} as const;

let mermaidLoader: Promise<typeof import("mermaid").default> | null = null;

async function getMermaid() {
  if (!mermaidLoader) {
    mermaidLoader = import("mermaid").then(({ default: mermaid }) => {
      mermaid.initialize(MERMAID_CONFIG);

      return mermaid;
    });
  }

  return mermaidLoader;
}

export default function MermaidDiagram({
  chart,
  className = "",
  fallback,
}: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const renderVersionRef = useRef(0);
  const [error, setError] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);
  const uniqueId = `mermaid-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    let isCancelled = false;
    const container = containerRef.current;
    const renderVersion = renderVersionRef.current + 1;

    renderVersionRef.current = renderVersion;

    async function renderDiagram() {
      if (!container || !chart.trim()) {
        return;
      }

      container.innerHTML = "";

      try {
        setError(false);
        setIsReady(false);

        const mermaid = await getMermaid();

        if (
          isCancelled ||
          renderVersionRef.current !== renderVersion ||
          !container.isConnected ||
          containerRef.current !== container
        ) {
          return;
        }

        container.removeAttribute("data-processed");
        container.id = uniqueId;
        container.textContent = chart;

        await Promise.race([
          mermaid.run({
            nodes: [container],
            suppressErrors: false,
          }),
          new Promise<never>((_, reject) => {
            window.setTimeout(() => {
              reject(new Error("Mermaid render timed out."));
            }, 5000);
          }),
        ]);

        if (
          isCancelled ||
          renderVersionRef.current !== renderVersion ||
          !container.isConnected ||
          containerRef.current !== container
        ) {
          return;
        }

        if (!container.querySelector("svg")) {
          throw new Error("Mermaid render completed without producing an SVG.");
        }

        const svg = container.querySelector("svg");

        if (svg) {
          svg.removeAttribute("style");
          svg.setAttribute("width", "100%");
          svg.style.height = "auto";
          svg.style.maxWidth = "1120px";
        }

        if (!isCancelled) {
          setError(false);
          setIsReady(true);
        }
      } catch (err) {
        if (
          isCancelled ||
          renderVersionRef.current !== renderVersion ||
          !container.isConnected ||
          containerRef.current !== container
        ) {
          return;
        }

        console.error("Mermaid syntax rendering failed:", err);

        if (!isCancelled) {
          container.innerHTML = "";
          setError(true);
          setIsReady(false);
        }
      }
    }

    renderDiagram();

    return () => {
      isCancelled = true;
      renderVersionRef.current += 1;
    };
  }, [chart, uniqueId]);

  return (
    <div className={`relative w-full overflow-x-auto ${className}`}>
      <div
        ref={containerRef}
        aria-label="System architecture diagram"
        className={`mx-auto w-full min-w-[860px] max-w-[1120px] items-center justify-center px-6 py-4 outline-none ${
          isReady ? "flex" : "pointer-events-none absolute inset-0 opacity-0"
        }`}
      />
      {!isReady && fallback}
      {error && !fallback && (
        <div className="py-4 text-center">
          <p className="font-sans text-[0.65rem] font-bold uppercase tracking-widest text-on-surface-variant opacity-50">
            [ Diagram Failed to Render ]
          </p>
        </div>
      )}
    </div>
  );
}
