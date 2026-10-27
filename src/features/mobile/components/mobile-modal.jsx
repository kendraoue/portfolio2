import React from "react";
import { ProjectsAccordion } from "../../portfolio";
import { AboutPanel } from "./about-panel";
import { ContactCard } from "./contact-card";

export function MobileModal({ modal, onClose }) {
  if (!modal) return null;

  return (
    <div className="overlay">
      <div
        role="dialog"
        aria-modal="true"
        aria-label={modal}
        className="mobile-modal"
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        {modal === "about" && <AboutPanel />}
        {modal === "projects" && <ProjectsAccordion />}
        {modal === "resume" && <ContactCard />}
      </div>
    </div>
  );
}
