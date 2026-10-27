import React from "react";

export function ProjectNav({ index, total, onPrev, onNext }) {
  return (
    <div className="projects-carousel-footer">
      <button
        type="button"
        className="projects-carousel-btn"
        onClick={onPrev}
        aria-label="Previous project"
      >
        ❮
      </button>
      <span className="project-count">
        {index + 1} / {total}
      </span>
      <button
        type="button"
        className="projects-carousel-btn"
        onClick={onNext}
        aria-label="Next project"
      >
        ❯
      </button>
    </div>
  );
}
