import { createRoot } from "react-dom/client";
import { App } from "./app/app";
import { AppProvider } from "./app/provider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles.css";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
