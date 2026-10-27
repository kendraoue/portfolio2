import React, { useState } from "react";
import { projects } from "../data/content";
import { ProjectDetails } from "./project-details";
import { ProjectImageMarquee } from "./project-image-marquee";
import { ProjectNav } from "./project-nav";

export function Projects({ mobile = false }) {
  const [index, setIndex] = useState(0);
  const project = projects[index];
  const imageSrc = mobile ? project.icon : project.image;
  const change = (step) =>
    setIndex((i) => (i + step + projects.length) % projects.length);

  return (
    <section className="projects">
      <div className="projects-layout">
        <div className="projects-row projects-row--top">
          <h2 className="projects-title">{project.title}</h2>
        </div>
        <div className="projects-row projects-row--bottom">
          <p className="project-description">{project.description}</p>
          <ProjectDetails project={project} />
          <ProjectNav
            index={index}
            total={projects.length}
            onPrev={() => change(-1)}
            onNext={() => change(1)}
          />
        </div>
        <div className="project-image-stage">
          <div className="project-image-wrap">
            {mobile ? (
              <img
                className="project-image"
                src={imageSrc}
                alt={project.title}
              />
            ) : (
              <ProjectImageMarquee
                icons={project.technologies}
                hero
                title={project.title}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
