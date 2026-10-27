import React from "react";
import githubProfileScreenshot from "../../../assets/images/GitHub_Profile_ Kendra.png";
import { site } from "../../../config/site";

export function GitHubContent() {
  return (
    <a
      className="github-popup"
      href={site.links.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Kendra's GitHub profile in a new tab"
    >
      <img
        className="github-popup__image"
        src={githubProfileScreenshot}
        alt="Screenshot of kendraoue GitHub profile"
        width={1768}
        height={890}
        decoding="async"
        draggable={false}
      />
    </a>
  );
}
