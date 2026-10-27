import React from "react";

export function AppProvider({ children }) {
  return <React.StrictMode>{children}</React.StrictMode>;
}
