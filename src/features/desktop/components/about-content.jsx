import React, { useState } from "react";
import { aboutHobbyGrid } from "../data/about-hobbies";
import { aboutSkillCategories } from "../data/about-skill-categories";
import { aboutSkills } from "../data/about-skills";
import kendraPortrait from "../../../assets/images/kendra (2).png";

const SLIDES = [
  { id: "intro", title: "Kendra Ouellet" },
  { id: "skills", title: "Skills" },
  { id: "hobbies", title: "Hobbies" },
];
function HobbyTile({ hobby }) {
  return (
    <div
      className={`about-hobby-tile${
        hobby.selected ? " is-selected" : " is-muted"
      }`}
    >
      <span className="about-hobby-icon">{hobby.label}</span>
      {hobby.selected && (
        <span className="about-hobby-check" aria-label={`Selected: ${hobby.label}`}>
          ✓
        </span>
      )}
    </div>
  );
}

function renderSkillCategoryItems(category) {
  const { items, lineBreakBefore } = category;
  if (!lineBreakBefore) {
    return items.join(", ");
  }
  const splitAt = items.indexOf(lineBreakBefore);
  if (splitAt === -1) {
    return items.join(", ");
  }
  const firstLine = items.slice(0, splitAt).join(", ");
  const secondLine = items.slice(splitAt).join(", ");
  return (
    <>
      {firstLine}
      <br />
      {secondLine}
    </>
  );
}

export function AboutContent() {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];
  const isFirst = index === 0;
  const isLast = index === SLIDES.length - 1;

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(SLIDES.length - 1, i + 1));

  return (
    <div
      className={`about-content position-relative d-flex flex-column overflow-hidden${
        slide.id === "hobbies" ? " about-content--hobbies" : ""
      }`}
    >
      <div
        key={`top-${index}`}
        className={`about-top flex-fill d-flex flex-column about-slide-fade${
          slide.id === "skills"
            ? " about-top--skills"
            : slide.id === "hobbies"
              ? " about-top--hobbies"
              : " justify-content-center"
        }`}
      >
        <h1 className="fs-1 mb-0">{slide.title}</h1>
        {isFirst && (
          <>
            <p className="fs-4 mb-0">Application Developer</p>
            <p className="fs-6 mt-1 info-text mb-0">
              A creative, bubbly, developer <br />
              with a passion for learning new technologies.
            </p>
          </>
        )}
        {slide.id === "skills" && (
          <div className="about-skills-categories">
            {aboutSkillCategories.map((category) => (
              <p key={category.title} className="about-skills-category">
                <strong>{category.title}:</strong>{" "}
                {renderSkillCategoryItems(category)}
              </p>
            ))}
          </div>
        )}
        {slide.id === "hobbies" && (
          <div className="about-hobbies-grid about-hobbies-grid--full" aria-label="Hobbies">
            {aboutHobbyGrid.map((hobby) => (
              <HobbyTile key={hobby.id} hobby={hobby} />
            ))}
          </div>
        )}
      </div>
      <div
        className={`about-bottom position-relative${
          slide.id === "hobbies" ? " about-bottom--hobbies" : " flex-fill"
        }`}
      >
        <div className="about-carousel-controls">
          <button
            type="button"
            className="about-carousel-btn about-carousel-btn--prev"
            onClick={goPrev}
            disabled={isFirst}
            aria-label="Previous slide"
          />
          <div className="about-carousel-dots" role="tablist" aria-label="About slides">
            {SLIDES.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                className={`about-carousel-square${i === index ? " active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}: ${item.title}`}
                aria-selected={i === index}
              />
            ))}
          </div>
          <button
            type="button"
            className="about-carousel-btn about-carousel-btn--next"
            onClick={goNext}
            disabled={isLast}
            aria-label="Next slide"
          />
        </div>
      </div>
      {slide.id !== "hobbies" && (
      <div className="about-portrait position-absolute top-50 translate-middle-y">
        <div key={`portrait-${index}`} className="about-slide-fade">
        {slide.id === "intro" && (
          <img
            className="portrait border border-4 border-success"
            src={kendraPortrait}
            alt="Kendra Ouellet"
            decoding="async"
            fetchPriority="high"
          />
        )}
        {slide.id === "skills" && (
          <div className="about-icon-grid" aria-label="Skills">
            {aboutSkills.map((skill) => (
              <div key={skill.id} className="about-icon-cell" title={skill.name}>
                <img src={skill.src} alt={skill.name} />
              </div>
            ))}
          </div>
        )}
        </div>
      </div>
      )}
    </div>
  );
}
