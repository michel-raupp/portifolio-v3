import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { MetaTags } from "./components/atoms";
import { I18nProvider, ThemeColorsProvider } from "./providers";
import App from "./App.tsx";

import "./locales";
import "./index.css";

const Root = () => {
  return (
    <StrictMode>
      <I18nProvider>
        <ThemeColorsProvider>
          <MetaTags />
          <App />
        </ThemeColorsProvider>
      </I18nProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<Root />);
