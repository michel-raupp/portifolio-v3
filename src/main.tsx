import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeColorsProvider } from "./providers";

import App from "./App.tsx";
import "./index.css";

const Root = () => {
  return (
    <StrictMode>
      <ThemeColorsProvider>
        <App />
      </ThemeColorsProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<Root />);
