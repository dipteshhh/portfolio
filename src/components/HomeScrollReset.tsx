"use client";

import { useEffect } from "react";

export default function HomeScrollReset() {
  useEffect(() => {
    const previousScrollRestoration =
      "scrollRestoration" in window.history
        ? window.history.scrollRestoration
        : undefined;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      });
      window.setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }, 120);
    };

    resetScroll();
    window.addEventListener("pageshow", resetScroll);

    return () => {
      window.removeEventListener("pageshow", resetScroll);

      if (previousScrollRestoration) {
        window.history.scrollRestoration = previousScrollRestoration;
      }
    };
  }, []);

  return null;
}
