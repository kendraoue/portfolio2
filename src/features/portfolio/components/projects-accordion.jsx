import React, { useState } from "react";
import { projects } from "../data/content";

export function ProjectsAccordion() {
  const [openId, setOpenId] = useState(projects[0]?.id ?? null);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="projects-notepad h-100 d-flex flex-column overflow-hidden">
      <header className="projects-notepad__header">Projects</header>
      <div className="projects-notepad__scroll flex-grow-1 overflow-y-auto">
        <div
          className="projects-accordion"
          role="region"
          aria-label="Project list"
        >
          {projects.map((project) => {
            const isOpen = openId === project.id;
            return (
              <section
                key={project.id}
                className={`projects-accordion__item${
                  isOpen ? " is-open" : ""
                }`}
              >
                <button
                  type="button"
                  className="projects-accordion__trigger"
                  aria-expanded={isOpen}
                  onClick={() => toggle(project.id)}
                >
                  <span className="projects-accordion__title">
                    {project.title}
                  </span>
                  <span className="projects-accordion__date">{project.date}</span>
                </button>
                {isOpen && (
                  <div className="projects-accordion__panel">
                    <p className="projects-accordion__description">
                      {project.description}
                    </p>
                    <ul className="projects-accordion__highlights">
                      {project.highlights.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
