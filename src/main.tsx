import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import { MetaTags, Skeleton } from "./components/atoms";
import { I18nProvider, ThemeColorsProvider } from "./providers";

const App = lazy(() => import("./App.tsx"));

import "./locales";

export const Root = () => {
  return (
    <StrictMode>
      <HelmetProvider>
        <I18nProvider>
          <ThemeColorsProvider>
            <MetaTags />
            <Suspense fallback={<Skeleton height="100vh" width="100vw" />}>
              <App />
            </Suspense>
          </ThemeColorsProvider>
        </I18nProvider>
      </HelmetProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<Root />);
