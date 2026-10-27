import React from "react";
import { asset } from "../../../utils/assets";

export function Stickers() {
  return (
    <div className="mobile-stickers">
      <img src={asset("mohawkAlumni.jpeg")} alt="Mohawk College alumni" />
      <img src={asset("Skills.png")} alt="Software development skills" />
    </div>
  );
}
