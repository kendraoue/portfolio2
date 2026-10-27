import React from "react";
import { interests } from "../data/content";
import { InterestItem } from "./interest-item";

export function Interests({ compact = false }) {
  return (
    <div className={compact ? "interest-list compact" : "interest-list"}>
      {interests.map((item) => (
        <InterestItem key={item.name} item={item} compact={compact} />
      ))}
    </div>
  );
}
