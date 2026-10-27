import Desktop from "../features/desktop";
import Mobile from "../features/mobile";
import { useIsMobile } from "../hooks/use-is-mobile";

export function App() {
  const mobile = useIsMobile();
  return mobile ? <Mobile /> : <Desktop />;
}
