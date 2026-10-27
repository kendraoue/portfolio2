import React from "react";
import { useModal } from "../hooks/use-modal";
import { Clock } from "./clock";
import { MobileIconGrid } from "./mobile-icon-grid";
import { MobileModal } from "./mobile-modal";
import { MobileDock } from "./mobile-dock";

export default function Mobile() {
  const { modal, setModal, close } = useModal();

  return (
    <main className="mobile">
      <div className="top-nav">
        <Clock />
      </div>
      <MobileIconGrid onOpen={setModal} />
      <MobileDock onOpen={setModal} />
      <MobileModal modal={modal} onClose={close} />
    </main>
  );
}
