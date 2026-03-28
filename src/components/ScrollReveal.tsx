"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "up" | "scale" | "fade";
  delay?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "up",
  delay = 0,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const updateVisibility = () => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const activationOffset = Math.max(96, viewportHeight * 0.14);
      const isInView =
        rect.top <= viewportHeight - activationOffset &&
        rect.bottom >= activationOffset;

      setVisible((current) => {
        if (isInView) {
          return true;
        }

        return once ? current : false;
      });

      ticking = false;
    };

    const requestUpdate = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateVisibility);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("codex:section-scroll", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("codex:section-scroll", requestUpdate);
    };
  }, [once]);

  const animClass =
    animation === "up"
      ? "animate-reveal-up"
      : animation === "scale"
        ? "animate-reveal-scale"
        : "animate-fade-in";

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? animClass : "opacity-0"}`}
      style={visible && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
