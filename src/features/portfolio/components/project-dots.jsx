import React from "react";

export function ProjectDots({ projects, index, onSelect }) {
  return (
    <div className="dots" aria-label="Choose project">
      {projects.map((item, i) => (
        <button
          key={item.id}
          onClick={() => onSelect(i)}
          aria-label={`Show ${item.title}`}
          aria-current={i === index ? "true" : undefined}
          className={i === index ? "active" : ""}
        />
      ))}
    </div>
  );
}
