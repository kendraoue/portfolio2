import React from "react";
import { Projects, Resume } from "../../portfolio";
import { asset } from "../../../utils/assets";
import { useDesktopWindows } from "../hooks/use-desktop-windows";
import { AboutContent } from "./about-content";
import { DesktopIcons } from "./desktop-icons";
import { GitHubContent } from "./github-content";
import { LinkedInContent } from "./linkedin-content";
import { Window } from "./window";

export default function Desktop() {
  const { open, z, toggle, focus } = useDesktopWindows();

  return (
    <main className="desktop">
      <DesktopIcons onToggle={toggle} />
      {open.about && (
        <Window
          id="about"
          title="About Me"
          onClose={() => toggle("about")}
          onFocus={() => focus("about")}
          front={z.about}
        >
          <AboutContent />
        </Window>
      )}
      {open.projects && (
        <Window
          id="projects"
          title="Projects"
          onClose={() => toggle("projects")}
          onFocus={() => focus("projects")}
          front={z.projects}
        >
          <Projects />
        </Window>
      )}
      {open.resume && (
        <Window
          id="resume"
          title="Resume"
          onClose={() => toggle("resume")}
          onFocus={() => focus("resume")}
          front={z.resume}
        >
          <Resume />
        </Window>
      )}
      {open.github && (
        <Window
          id="github"
          title="GitHub"
          onClose={() => toggle("github")}
          onFocus={() => focus("github")}
          front={z.github}
        >
          <GitHubContent />
        </Window>
      )}
      {open.linkedin && (
        <Window
          id="linkedin"
          title="LinkedIn"
          onClose={() => toggle("linkedin")}
          onFocus={() => focus("linkedin")}
          front={z.linkedin}
        >
          <LinkedInContent />
        </Window>
      )}
      {open.extras && (
        <Window
          id="extras"
          title="Extras"
          onClose={() => toggle("extras")}
          onFocus={() => focus("extras")}
          front={z.extras}
        >
          <img src={asset("Purplesticky.png")} alt="Purple sticky note" />
        </Window>
      )}
    </main>
  );
}
