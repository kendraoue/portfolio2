import { useEffect, useRef, useState } from "react";

export function useDesktopWindows() {
  const [open, setOpen] = useState({
    about: false,
    projects: false,
    resume: false,
    github: false,
    linkedin: false,
    extras: false,
  });
 const [z, setZ] = useState({
  about: 2,
  projects: 3,
  resume: 4,
  github: 5,
  linkedin: 6,
  extras: 7,
});
  const top = useRef(5);

  const focus = (id) => {
    top.current += 1;
    setZ((prev) => ({ ...prev, [id]: top.current }));
  };

  const toggle = (id) => {
    const list = Array.isArray(id) ? id : [id];
    setOpen((prev) => {
      const nextOpen = !list.every((id) => prev[id]);
      const next = { ...prev };
      list.forEach((id) => {
        next[id] = nextOpen;
      });
      return next;
    });
    list.forEach(focus);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen((prev) => ({ ...prev, about: true }));
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return { open, z, toggle, focus };
}
