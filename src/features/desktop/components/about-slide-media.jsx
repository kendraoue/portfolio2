import React from "react";
import kendraPortrait from "../../../assets/images/kendra (2).png";
import { hobbyPlaceholders, skillPlaceholders } from "../data/about-slides";

export function AboutSlideMedia({ slideId }) {
  if (slideId === "skills") {
    return (
      <div
        className="about-icon-grid"
        role="list"
        aria-label="Skills"
      >
        {skillPlaceholders.map((skill) => (
          <div
            key={skill.id}
            className="about-placeholder-icon"
            role="listitem"
            title={skill.label}
          />
        ))}
      </div>
    );
  }

  if (slideId === "hobbies") {
    return (
      <div
        className="about-icon-stack"
        role="list"
        aria-label="Hobbies"
      >
        {hobbyPlaceholders.map((hobby) => (
          <div
            key={hobby.id}
            className="about-placeholder-icon"
            role="listitem"
            title={hobby.label}
          />
        ))}
      </div>
    );
  }

  return (
    <img
      className="portrait border border-4 border-success"
      src={kendraPortrait}
      alt="Kendra Ouellet"
      decoding="async"
    />
  );
}
