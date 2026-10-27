import React from "react";
import githubIcon from "../../../assets/images/github_transparent.png";
import linkedInIcon from "../../../assets/images/linkedin_transparent.png";
import messagesIcon from "../../../assets/images/messages.png";
import notesIcon from "../../../assets/images/notes (1).png";
import phoneIcon from "../../../assets/images/phone.png";
import { site } from "../../../config/site";

const DOCK_ITEMS = [
  { id: "about", label: "About", src: messagesIcon },
  { id: "projects", label: "Projects", src: notesIcon },
  { id: "resume", label: "Resume", src: phoneIcon },
];

function DockIcon({ src }) {
  return <img src={src} alt="" draggable={false} />;
}

export function MobileDock({ onOpen }) {
  const openModal = (id) => {
    if (typeof onOpen === "function") {
      onOpen(id);
    }
  };

  return (
    <nav className="mobile-dock" aria-label="Portfolio navigation">
      {DOCK_ITEMS.map((item) => {
        if (item.href) {
          return (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
            >
              <DockIcon src={item.src} />
            </a>
          );
        }
        return (
          <button
            key={item.id}
            type="button"
            aria-label={item.label}
            onClick={() => openModal(item.id)}
          >
            <DockIcon src={item.src} />
          </button>
        );
      })}
    </nav>
  );
}
