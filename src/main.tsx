import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { I18nProvider, ThemeColorsProvider } from "./providers";
import "./locales";

import App from "./App.tsx";
import "./index.css";

const Root = () => {
  return (
    <StrictMode>
      <I18nProvider>
        <ThemeColorsProvider>
          <App />
        </ThemeColorsProvider>
      </I18nProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<Root />);
