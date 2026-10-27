import { useEffect, useState } from "react";
import { site } from "../config/site";

export function useIsMobile() {
  const [mobile, setMobile] = useState(
    () => window.innerWidth < site.mobileBreakpoint
  );

  useEffect(() => {
    const onResize = () =>
      setMobile(window.innerWidth < site.mobileBreakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return mobile;
}
