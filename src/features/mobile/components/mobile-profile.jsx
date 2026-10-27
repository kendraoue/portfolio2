import React from "react";
import kendraPortrait from "../../../assets/images/kendra (2).png";

export function MobileProfile() {
  return (
    <div className="mobile-profile">
      <img src={kendraPortrait} alt="Kendra Ouellet" decoding="async" />
      <h1>Kendra Ouellet</h1>
      <p>
        Former dental assistant turned software developer. I bring empathy,
        precision, and a passion for solving real-world problems with clean,
        maintainable code.
      </p>
    </div>
  );
}
