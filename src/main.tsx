import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

import { Skeleton } from "./components/atoms";
import { I18nProvider, ThemeColorsProvider } from "./providers";

const App = lazy(() => import("./App.tsx"));

import "./locales";

export const Root = () => {
  return (
    <StrictMode>
      <I18nProvider>
        <ThemeColorsProvider>
          <Suspense fallback={<Skeleton height="100vh" width="100vw" />}>
            <App />
          </Suspense>
        </ThemeColorsProvider>
      </I18nProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<Root />);
