import React from "react";
import { site } from "../../../config/site";
import userIcon from "../../../assets/images/user-icon.png";
import folderIcon from "../../../assets/images/folder-icon.png";
import notepadIcon from "../../../assets/images/notepad-icon.png";
import internetIcon from "../../../assets/images/internet-icon.png";

export function DesktopIcons({ onToggle }) {
  return (
    <nav className="desktop-icons" aria-label="Portfolio navigation">
      <button onClick={() => onToggle("about")}>
        <span><img src={userIcon} style={{ width: "60px", height: "60px" }} alt="About me" /></span>About Me
      </button>
      <button onClick={() => onToggle("projects")}>
        <span><img src={folderIcon} style={{ width: "60px", height: "60px" }} alt="Projects" /></span>Projects
      </button>
      <button onClick={() => onToggle("resume")}>
        <span><img src={notepadIcon} style={{ width: "60px", height: "60px" }} alt="" /></span>Resume
      </button>
      <button onClick={() => onToggle(["github", "linkedin"])}>
        <span>
          <img src={internetIcon} style={{ width: "60px", height: "60px" }} alt="" />
        </span>
        Socials
      </button>
     
    </nav>
  );
}
