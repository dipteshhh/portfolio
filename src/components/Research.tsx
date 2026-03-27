import React from "react";

const CORE_AREAS = [
  "Data Preprocessing",
  "EDA",
  "Baseline ML",
  "Neural Networks / MLPs",
  "Hyperparameter Tuning",
  "Model Evaluation",
];

export default function Research() {
  return (
    <section id="research" className="mx-auto max-w-7xl px-8 py-16 mb-24">
      <header className="mb-12">
        <h2 className="font-display text-on-surface text-4xl font-extrabold tracking-tight md:text-5xl">
          Academic Research
        </h2>
      </header>

      <div className="bg-surface-container-low w-full rounded-xl p-8 md:p-12">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <span className="font-sans text-primary mb-2 block text-[0.75rem] font-bold uppercase tracking-[0.15em]">
              Undergraduate Research Co-op
            </span>
            <h3 className="font-display text-on-surface max-w-3xl text-2xl font-bold leading-tight md:text-3xl">
              Data-Driven Neural Network Models for Intelligent Engineering Applications
            </h3>
          </div>
          <div className="font-sans text-on-surface-variant flex flex-col gap-1 text-sm md:text-right md:mt-0 mt-2">
            <strong className="text-on-surface">Spring 2026</strong>
            <span>Dr. Devinder Kaur</span>
          </div>
        </div>

        <div className="font-sans text-on-surface-variant mb-10 max-w-4xl space-y-4 text-sm leading-relaxed md:text-base">
          <p className="font-semibold text-on-surface">
            University of Toledo, Dept. of Electrical Engineering and Computer Science (EECS)
          </p>
          <p>
            Engineered end-to-end machine learning pipelines for engineering-relevant datasets. Directed data preparation, exploratory data analysis (EDA), and baseline machine learning benchmarking. Architected and trained Multi-Layer Perceptron (MLP) neural networks, executing rigorous hyperparameter tuning, model comparison, and error analysis to optimize performance metrics.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {CORE_AREAS.map((area) => (
            <span
              key={area}
              className="bg-surface-container-high font-sans text-on-surface-variant rounded-sm px-3 py-1 text-[0.75rem] font-bold uppercase tracking-[0.1rem]"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
