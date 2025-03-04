import { useI18nStore, useThemeStore } from "@/stores";

import { Header } from "@/components/organisms";
import {
  About,
  Contact,
  Experiences,
  Hero,
  Projects,
} from "@/components/sections";
import { Background, Footer, Skeleton, WebsiteBody } from "@/components/atoms";
import { Suspense, useEffect } from "react";

const App = () => {
  const { isDarkMode } = useThemeStore((state) => state);
  const { updateHtmlLang, language } = useI18nStore((state) => state);

  useEffect(() => {
    updateHtmlLang();
  }, [language]);

  return (
    <Suspense fallback={<Skeleton height="100vh" />}>
      <WebsiteBody $darkMode={isDarkMode}>
        <Header />
        <Hero />
        <About />
        <Experiences />
        <Projects />
        <Contact />
        <Footer />
      </WebsiteBody>
      <Background $darkMode={isDarkMode} />
    </Suspense>
  );
};

export default App;
