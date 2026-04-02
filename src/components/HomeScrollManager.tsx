"use client";

import { useEffect } from "react";

let hasHandledInitialHomeMount = false;

function scrollToHashTarget(hash: string) {
  const id = decodeURIComponent(hash.replace(/^#/, ""));

  if (!id) {
    return false;
  }

  const target = document.getElementById(id);

  if (!target) {
    return false;
  }

  target.scrollIntoView({
    behavior: "auto",
    block: "start",
  });

  return true;
}

export default function HomeScrollManager() {
  useEffect(() => {
    let frameId = 0;
    const hash = window.location.hash;

    if (hash) {
      let attempts = 0;

      const alignToHash = () => {
        attempts += 1;

        if (scrollToHashTarget(hash) || attempts >= 10) {
          return;
        }

        frameId = window.requestAnimationFrame(alignToHash);
      };

      alignToHash();
      hasHandledInitialHomeMount = true;

      return () => {
        if (frameId) {
          window.cancelAnimationFrame(frameId);
        }
      };
    }

    if (!hasHandledInitialHomeMount) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });

      frameId = window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      });
    }

    hasHandledInitialHomeMount = true;

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return null;
}
