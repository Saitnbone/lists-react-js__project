import React from "react";
import "./index.css";
import App from "./components/app/App";
import "./styles/index";
import { createRoot } from "react-dom/client";

const domNode = document.getElementById("root") as HTMLDivElement;

const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
