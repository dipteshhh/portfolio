"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

const EMAIL = "dthakur@rockets.utoledo.edu";

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const openModal = useCallback(() => {
    setOpen(true);
    setSent(false);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    setTimeout(() => {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setSent(false);
    }, 200);
  }, []);

  useEffect(() => {
    window.addEventListener("open-contact-modal", openModal);
    return () => window.removeEventListener("open-contact-modal", openModal);
  }, [openModal]);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
      setTimeout(() => firstInputRef.current?.focus(), 50);
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, closeModal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subjectLine = subject || `Portfolio inquiry from ${name}`;
    const body = `Hi Diptesh,\n\n${message}\n\n—\n${name}\n${email}`;
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;

    window.open(mailto, "_blank");
    setSent(true);
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={(e) => {
        if (e.target === dialogRef.current) closeModal();
      }}
      className={`fixed inset-0 z-[100] m-0 h-full w-full max-h-full max-w-full overflow-y-auto bg-transparent p-0 backdrop:bg-transparent ${open ? "" : "hidden"}`}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-on-surface/40 backdrop-blur-sm transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"}`}
      />

      {/* Modal container */}
      <div className="relative flex min-h-full items-center justify-center p-4 sm:p-8">
        <div
          className={`relative w-full max-w-2xl rounded-2xl bg-surface shadow-2xl transition-all duration-200 ${
            open ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute right-5 top-5 rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-8 sm:p-12">
            {!sent ? (
              <>
                {/* Header */}
                <div className="mb-10">
                  <span className="font-sans text-[0.75rem] font-bold uppercase tracking-[0.15em] text-primary">
                    Get in Touch
                  </span>
                  <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-on-surface">
                    Send me a message
                  </h2>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-on-surface-variant">
                    Fill out the form below and your email client will open with
                    the message pre-filled. Alternatively, email me directly at{" "}
                    <a href={`mailto:${EMAIL}`} className="text-primary underline underline-offset-2">
                      {EMAIL}
                    </a>
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block font-sans text-[0.7rem] font-bold uppercase tracking-widest text-on-surface-variant"
                      >
                        Name
                      </label>
                      <input
                        ref={firstInputRef}
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-low px-5 py-3.5 font-sans text-sm text-on-surface placeholder:text-on-surface-variant/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block font-sans text-[0.7rem] font-bold uppercase tracking-widest text-on-surface-variant"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-low px-5 py-3.5 font-sans text-sm text-on-surface placeholder:text-on-surface-variant/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-2 block font-sans text-[0.7rem] font-bold uppercase tracking-widest text-on-surface-variant"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="What's this about?"
                      className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-low px-5 py-3.5 font-sans text-sm text-on-surface placeholder:text-on-surface-variant/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block font-sans text-[0.7rem] font-bold uppercase tracking-widest text-on-surface-variant"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full resize-none rounded-xl border border-outline-variant/30 bg-surface-container-low px-5 py-3.5 font-sans text-sm text-on-surface placeholder:text-on-surface-variant/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full rounded-full bg-gradient-primary px-8 py-4 font-sans text-sm font-bold tracking-wide text-on-primary transition-all hover:brightness-105 active:scale-[0.98]"
                  >
                    Open in Email Client
                  </button>
                </form>
              </>
            ) : (
              /* Success state */
              <div className="flex flex-col items-center py-8 text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-on-surface">
                  Email client opened
                </h3>
                <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-on-surface-variant">
                  Your message has been prepared. Just hit send in your email client to deliver it.
                </p>
                <button
                  onClick={closeModal}
                  className="mt-8 rounded-full bg-surface-container-highest px-8 py-3 font-sans text-sm font-bold text-on-surface transition-all hover:opacity-80 active:scale-95"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
}

export function openContactModal() {
  window.dispatchEvent(new Event("open-contact-modal"));
}
