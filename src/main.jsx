import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import RippleButton from "./components/RippleButton.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RippleButton />
  </StrictMode>,
);
