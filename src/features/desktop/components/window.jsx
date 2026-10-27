import React from "react";
import { useWindowPosition } from "../hooks/use-window-position";
import closeButton from "../../../assets/images/X Button.png";

export function Window({ id, title, onClose, children, front, onFocus }) {
  const { pos, begin, move, end } = useWindowPosition(id);

  return (
    <div
      className="desktop-window"
      style={{ left: pos.x, top: pos.y, zIndex: front }}
      onPointerDown={onFocus}
    >
      <div
        className="window-bar"
        onPointerDown={(event) => {
          begin(event);
          onFocus();
        }}
        onPointerMove={move}
        onPointerUp={end}
        onPointerCancel={end}
      >
        <span>{title}</span>
        <button
          className="close-window"
          onClick={onClose}
          aria-label={`Close ${title}`}
        >
          <img src={closeButton} className="close-icon" alt="Close" />
        </button>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
}
