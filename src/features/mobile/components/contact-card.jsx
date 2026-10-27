import React from "react";
import kendraPortrait from "../../../assets/images/kendra (2).png";
import { site } from "../../../config/site";

const resumeSrc = "/Resume.pdf";

function ContactRow({ href, label, value, external, download }) {
  const className = "contact-card__row";
  if (!href) {
    return (
      <div className={className}>
        <span className="contact-card__label">{label}</span>
        <span className="contact-card__value contact-card__value--plain">
          {value}
        </span>
      </div>
    );
  }
  return (
    <a
      className={className}
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      {...(download ? { download: "Kendra_Ouellet_Resume.pdf" } : {})}
    >
      <span className="contact-card__label">{label}</span>
      <span className="contact-card__value">{value}</span>
    </a>
  );
}

export function ContactCard() {
  const { name, phone, phoneDisplay, location } = site.contact;

  return (
    <div className="contact-card h-100 overflow-y-auto">
      <header className="contact-card__hero">
        <img
          className="contact-card__avatar"
          src={kendraPortrait}
          alt=""
          decoding="async"
        />
        <h1 className="contact-card__name">{name}</h1>
      </header>

      <div className="contact-card__group">
        <ContactRow
          href={`tel:+1${phone}`}
          label="mobile"
          value={phoneDisplay}
        />
      </div>

      <div className="contact-card__group">
        <ContactRow label="home" value={location} />
      </div>

      <div className="contact-card__group">
        <ContactRow
          href={site.links.github}
          label="GitHub"
          value="github.com/kendraoue"
          external
        />
        <ContactRow
          href={site.links.linkedin}
          label="LinkedIn"
          value="linkedin.com/in/kendra-ouellet"
          external
        />
      </div>

      <div className="contact-card__group">
        <ContactRow
          href={resumeSrc}
          label="Resume"
          value="Download PDF"
          download
        />
      </div>
    </div>
  );
}
