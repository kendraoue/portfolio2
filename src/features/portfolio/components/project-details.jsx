import React from "react";

export function ProjectDetails({ project }) {
  return (
    <div className="project-details">
      <ul className="project-highlights">
        {project.highlights.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
