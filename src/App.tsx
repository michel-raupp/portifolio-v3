import { useEffect } from "react";
import { useI18nStore, useThemeStore } from "@/stores";

import { Header } from "@/components/organisms";
import {
  About,
  Contact,
  Experiences,
  Hero,
  Projects,
} from "@/components/sections";
import { Footer } from "@/components/atoms";
import { Background, WebsiteBody } from "./components/atoms/CommonStyles";

const App = () => {
  const { isDarkMode } = useThemeStore((state) => state);
  const { updateHtmlLang, language } = useI18nStore((state) => state);

  useEffect(() => {
    updateHtmlLang();
  }, [language, updateHtmlLang]);

  return (
    <>
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
    </>
  );
};

export default App;
