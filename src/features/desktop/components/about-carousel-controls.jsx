import React from "react";

export function AboutCarouselControls({ onPrev, onNext }) {
  return (
    <div className="about-carousel-controls d-flex gap-2">
      <button
        type="button"
        className="btn btn-sm btn-light"
        onClick={onPrev}
        aria-label="Previous about slide"
      >
        ‹
      </button>
      <button
        type="button"
        className="btn btn-sm btn-light"
        onClick={onNext}
        aria-label="Next about slide"
      >
        ›
      </button>
    </div>
  );
}
