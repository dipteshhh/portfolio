import React from "react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest mt-16 w-full pb-12 pt-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-24 flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <h2 className="font-display text-on-surface mb-4 text-2xl font-bold">
              Diptesh Shahi Thakuri
            </h2>
            <p className="font-sans text-on-surface-variant leading-relaxed">
              Open to backend software engineering, full-stack, and systems-focused new graduate roles.
            </p>
          </div>

          <div className="font-sans flex flex-col items-start gap-6 font-semibold sm:flex-row sm:items-center sm:gap-8">
            <a
              href="mailto:dthakur@rockets.utoledo.edu"
              className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/diptesh-shahi-thakuri-5642b624b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/dipteshhh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              GitHub
            </a>
            <button className="bg-primary text-on-primary rounded-full px-6 py-2 font-bold whitespace-nowrap transition-opacity hover:opacity-90">
              View Resume
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-on-surface-variant text-[0.75rem] font-bold uppercase tracking-[0.15em]">
            © 2026 Diptesh Shahi Thakuri
          </p>
          <p className="font-sans text-on-surface-variant text-[0.75rem] font-bold uppercase tracking-[0.15em]">
            Built with Next.js and Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
