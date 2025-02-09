import { useI18nStore, useThemeStore } from "@/stores";

import {
  About,
  Contact,
  Experiences,
  Header,
  Hero,
  Projects,
} from "@/components/organisms";
import { Background, WebsiteBody } from "@/components/atoms";
import { useEffect } from "react";

const App = () => {
  const { isDarkMode } = useThemeStore((state) => state);
  const { updateHtmlLang, language } = useI18nStore((state) => state);

  useEffect(() => {
    updateHtmlLang();
  }, [language]);

  return (
    <>
      <WebsiteBody $darkMode={isDarkMode}>
        <Header />
        <Hero />
        <About />
        <Experiences />
        <Projects />
        <Contact />
      </WebsiteBody>
      <Background $darkMode={isDarkMode} />
    </>
  );
};

export default App;
