import React from "react";

const RESEARCH_DATA = [
  {
    label: "Current Research Co-op",
    title: "Data-Driven Neural Network Models for Intelligent Engineering Applications",
    timeframe: "Spring 2026 • In Progress",
    mentor: "Dr. Devinder Kaur",
    context:
      "University of Toledo, Department of Electrical Engineering and Computer Science",
    summary:
      "Current undergraduate research co-op at the University of Toledo focused on selecting engineering-relevant datasets, benchmarking baseline ML models, and designing neural-network experiments with reproducibility in mind.",
    details:
      "This work is intentionally presented as in progress rather than as a finished result. The current phase is centered on dataset selection, exploratory analysis, baseline modeling, and defining a practical neural-network workflow we can evaluate rigorously during the semester.",
    areas: [
      "Problem Definition",
      "Dataset Selection",
      "EDA",
      "Baseline ML",
      "Neural Networks / MLPs",
      "Experiment Design",
    ],
  },
  {
    label: "Security Research Case Work",
    title: "Security Analysis of QUIC Protocol",
    timeframe: "Fall 2025",
    mentor: "Independent Analysis",
    context: "Research-oriented protocol security analysis",
    summary:
      "Protocol-security case study evaluating QUIC connection migration behavior and the privacy implications of persistent connection identifiers across network changes.",
    details:
      "Using Wireshark, I captured QUIC traffic while moving between Wi-Fi and mobile hotspot connections, then inspected SCID and DCID behavior across packets and resumed sessions. The analysis showed how QUIC preserves session continuity effectively, but also why insufficient CID rotation can increase tracking and correlation risk.",
    areas: [
      "QUIC",
      "Wireshark",
      "Connection Migration",
      "CID Analysis",
      "TLS 1.3",
      "Privacy and Security",
    ],
  },
  {
    label: "Prior Research",
    title: "Predictive Disease Diagnosis Using Machine Learning",
    timeframe: "Summer 2025",
    mentor: "University of Toledo EECS",
    context: "Faculty-supervised applied machine learning research",
    summary:
      "Faculty-supervised research project comparing multiple machine learning models for diabetes, heart disease, and breast cancer prediction using structured patient data in MATLAB.",
    details:
      "Built a reproducible preprocessing, training, and evaluation pipeline across three UCI datasets. Best results reached 80.7% ROC AUC for diabetes, 93.1% for heart disease, and 99.9% for breast cancer after model comparison and tuning.",
    areas: [
      "MATLAB",
      "Preprocessing",
      "Feature Importance",
      "Hyperparameter Tuning",
      "ROC AUC Evaluation",
      "Reproducible Pipelines",
    ],
  },
  {
    label: "Academic ML Case Study",
    title: "Email Spam Classification using Logistic Regression",
    timeframe: "Spring 2025",
    mentor: "EECS 4750/5750",
    context: "Binary-classification case study in applied machine learning",
    summary:
      "Course case study evaluating logistic regression for spam-versus-ham classification using normalized email word-frequency features and probability-based evaluation metrics.",
    details:
      "Compared against a Gaussian Naive Bayes baseline on a dataset of 3,000 emails with 30 normalized features. The final logistic regression model used cross-validation and held-out evaluation, reaching 10-fold mean AUC 0.8747, split-test AUC 0.8894, held-out AUC 0.8458, and TPR 0.0977 at 1% FPR. The write-up also emphasized interpretable probabilities, low-false-positive evaluation, threshold tuning, and periodic retraining for real-world deployment.",
    areas: [
      "Logistic Regression",
      "Spam Classification",
      "scikit-learn",
      "AUC / TPR",
      "Cross-Validation",
      "Binary Classification",
    ],
  },
];

export default function Research() {
  return (
    <section id="research" className="mx-auto mb-24 max-w-7xl px-8 py-16">
      <header className="mb-12">
        <span className="font-sans text-primary mb-4 block text-[0.75rem] font-bold uppercase tracking-[0.15em]">
          Academic Work
        </span>
        <h2 className="font-display text-on-surface text-4xl font-extrabold tracking-tight md:text-5xl">
          Research and Applied ML
        </h2>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        {RESEARCH_DATA.map((entry) => (
          <div
            key={entry.title}
            className="bg-surface-container-low relative overflow-hidden rounded-2xl p-8 transition-shadow hover:shadow-ambient md:p-12"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-primary" />

            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <span className="font-sans text-primary mb-2 block text-[0.75rem] font-bold uppercase tracking-[0.15em]">
                  {entry.label}
                </span>
                <h3 className="font-display text-on-surface max-w-3xl text-2xl font-bold leading-tight md:text-3xl">
                  {entry.title}
                </h3>
              </div>
              <div className="font-sans text-on-surface-variant mt-2 flex flex-col gap-1 text-sm md:mt-0 md:text-right">
                <strong className="text-on-surface">{entry.timeframe}</strong>
                <span>{entry.mentor}</span>
              </div>
            </div>

            <div className="font-sans text-on-surface-variant mb-10 max-w-4xl space-y-4 text-sm leading-relaxed md:text-base">
              <p className="font-semibold text-on-surface">
                {entry.context}
              </p>
              <p>{entry.summary}</p>
              <p>{entry.details}</p>
              {entry.label === "Current Research Co-op" && (
                <p>
                  Completed software and AI system case studies are listed in the{" "}
                  <a href="#projects" className="font-semibold text-primary hover:opacity-80">
                    Projects
                  </a>{" "}
                  section, while research-oriented academic work is grouped here.
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {entry.areas.map((area) => (
                <span
                  key={area}
                  className="bg-surface-container-high font-sans text-on-surface-variant rounded-md px-3 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.1rem]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
