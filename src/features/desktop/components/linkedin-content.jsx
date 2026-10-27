import React from "react";
import linkedInProfileScreenshot from "../../../assets/images/LinkedIn_Profile _kendra.png";
import { site } from "../../../config/site";

export function LinkedInContent() {
  return (
    <a
      className="linkedin-popup"
      href={site.links.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Kendra's LinkedIn profile in a new tab"
    >
      <img
        className="linkedin-popup__image"
        src={linkedInProfileScreenshot}
        alt="Screenshot of Kendra Ouellet LinkedIn profile"
        width={1448}
        height={1086}
        decoding="async"
        draggable={false}
      />
    </a>
  );
}
