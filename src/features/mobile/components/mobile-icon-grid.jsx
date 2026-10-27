import React from "react";
import githubIcon from "../../../assets/images/github_transparent.png";
import linkedInIcon from "../../../assets/images/linkedin_transparent.png";
import messagesIcon from "../../../assets/images/messages.png";
import notesIcon from "../../../assets/images/notes (1).png";
import phoneIcon from "../../../assets/images/phone.png";
import { site } from "../../../config/site";

const ICONS_TOP = [
  { id: "about", label: "About", src: messagesIcon },
  { id: "projects", label: "Projects", src: notesIcon },
  { id: "resume", label: "Resume", src: phoneIcon },
];

const ICONS_BOTTOM = [
  { id: "github", label: "GitHub", src: githubIcon, href: site.links.github },
  {
    id: "linkedin",
    label: "LinkedIn",
    src: linkedInIcon,
    href: site.links.linkedin,
  },
];

function IconButton({ item, onOpen }) {
  const activate = () => {
    if (item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer");
      return;
    }
    onOpen(item.id);
  };

  return (
    <button
      type="button"
      className="mobile-icon-grid__icon w-100"
      aria-label={item.label}
      onClick={activate}
    >
      <img src={item.src} alt="" draggable={false} />
    </button>
  );
}

export function MobileIconGrid({ onOpen }) {
  return (
    <div
      className="flex-grow-1 d-flex align-items-center justify-content-center px-1"
      aria-label="Portfolio apps"
    >
      <div className="w-100 mx-auto" style={{ maxWidth: 300 }}>
        <div className="row g-4">
          {ICONS_TOP.map((item) => (
            <div key={item.id} className="col-4">
              <IconButton item={item} onOpen={onOpen} />
            </div>
          ))}
        </div>
        <div className="row g-4 justify-content-left mt-2">
          {ICONS_BOTTOM.map((item) => (
            <div key={item.id} className="col-4">
              <IconButton item={item} onOpen={onOpen} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
