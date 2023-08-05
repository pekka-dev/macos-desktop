import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LayoutProvider from "./contexts/LayoutContext";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <LayoutProvider>
      <App />
    </LayoutProvider>
  </React.StrictMode>,
);
