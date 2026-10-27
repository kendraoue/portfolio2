import React, { useEffect, useState } from "react";

export function Clock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div
      className="row g-0 text-black m-0 p-0 w-100"
    >
      <div className="col-12 text-center fw-bold">
        {now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </div>
    </div>
  );
}
