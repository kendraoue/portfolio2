import React from "react";

export function ProjectImageMarquee({ icons, hero = false, title = "" }) {
  if (!icons?.length) {
    return null;
  }

  const loop = [...icons, ...icons];

  return (
    <div
      className={`project-inline-marquee${hero ? " project-inline-marquee--hero" : ""}`}
      aria-hidden={hero ? undefined : true}
      aria-label={hero ? `${title} technologies` : undefined}
    >
      <div className="project-inline-marquee__track">
        {loop.map((icon, i) => (
          <img
            key={`${icon.id}-${i}`}
            className="project-inline-marquee__img"
            src={icon.src}
            alt={hero && i < icons.length ? icon.name : ""}
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}
