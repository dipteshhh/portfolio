"use client";

import React, { useEffect, useState, useRef, useId } from "react";
import mermaid from "mermaid";

// Initialize globally just once. Using "base" to let CSS take over primarily,
// and matching the typography of the portfolio.
mermaid.initialize({
  startOnLoad: false,
  theme: "base",
  fontFamily: "var(--font-inter), sans-serif",
});

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export default function MermaidDiagram({ chart, className = "" }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  // React 18 useId() might contain colons which break DOM IDs, strip them
  const uniqueId = `mermaid-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    let isMounted = true;

    async function renderDiagram() {
      try {
        setError(false);
        // Wipe prior string block for safety on re-renders
        if (containerRef.current) {
          containerRef.current.innerHTML = "";
        }
        
        // mermaid.render returns an object { svg, bindFunctions }
        const { svg } = await mermaid.render(uniqueId, chart);
        
        if (isMounted) {
          setSvgContent(svg);
        }
      } catch (err) {
        console.error("Mermaid syntax rendering failed:", err);
        if (isMounted) {
          setError(true);
        }
      }
    }

    if (chart) {
      renderDiagram();
    }

    return () => {
      isMounted = false;
    };
  }, [chart, uniqueId]);

  if (error) {
    return (
      <div className={`py-4 text-center ${className}`}>
        <p className="font-sans text-[0.65rem] font-bold uppercase tracking-widest text-on-surface-variant opacity-50">
          [ Diagram Failed to Render ]
        </p>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      {/* We use min-w-max inside the scrolling overflow to prevent text wrapping on massive diagrams. */}
      {svgContent && (
        <div
          ref={containerRef}
          dangerouslySetInnerHTML={{ __html: svgContent }}
          className="flex min-w-max items-center justify-center p-4 outline-none border-none"
        />
      )}
    </div>
  );
}
