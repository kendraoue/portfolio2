import React from "react";

const resumeSrc = "/Resume.pdf";

export function Resume() {
  return (
    <section className="resume">
      <iframe title="Kendra Ouellet résumé" src={resumeSrc} />
    </section>
  );
}
