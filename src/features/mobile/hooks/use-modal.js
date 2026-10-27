import { useEffect, useState } from "react";

export function useModal() {
  const [modal, setModal] = useState(null);

  useEffect(() => {
    if (!modal) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setModal(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [modal]);

  const close = () => setModal(null);

  return { modal, setModal, close };
}
