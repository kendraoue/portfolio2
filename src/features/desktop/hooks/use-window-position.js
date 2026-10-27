import { useEffect, useRef, useState } from "react";

const initial = {
  about: { x: 350, y: 30 },
  projects: { x: 140, y: 140 },
  resume: { x: 140, y: 240 },
  extras: { x: 140, y: 340 },
  github: { x: 140, y: 440 },
  linkedin: { x: 140, y: 540 },
};

export function useWindowPosition(id) {
  const [pos, setPos] = useState(() => {
    try {
      const saved = localStorage.getItem(`${id}-pos`);
      return saved ? JSON.parse(saved) : initial[id];
    } catch {
      return initial[id];
    }
  });
  const drag = useRef(null);

  useEffect(() => {
    try {
      localStorage.setItem(`${id}-pos`, JSON.stringify(pos));
    } catch {}
  }, [id, pos]);

  const begin = (event) => {
    if (event.button !== 0 || event.target.closest("button, a")) return;
    drag.current = { x: event.clientX - pos.x, y: event.clientY - pos.y };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const move = (event) => {
    if (!drag.current) return;
    setPos({
      x: event.clientX - drag.current.x,
      y: event.clientY - drag.current.y,
    });
  };

  const end = () => {
    drag.current = null;
  };

  return { pos, begin, move, end };
}
