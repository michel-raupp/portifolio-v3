import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import { MetaTags } from "./components/atoms";
import { I18nProvider, ThemeColorsProvider } from "./providers";
import App from "./App.tsx";

import "./locales";
import "./index.css";

export const Root = () => {
  return (
    <StrictMode>
      <HelmetProvider>
        <I18nProvider>
          <ThemeColorsProvider>
            <MetaTags />
            <App />
          </ThemeColorsProvider>
        </I18nProvider>
      </HelmetProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<Root />);
