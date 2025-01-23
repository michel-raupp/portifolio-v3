import { useThemeStore } from "@/stores";

import { About, Header, Hero } from "./components/organisms";
import { Background, WebsiteBody } from "@/components/atoms";

const App = () => {
  const { isDarkMode } = useThemeStore((state) => state);

  return (
    <>
      <WebsiteBody $darkMode={isDarkMode}>
        <Header />
        <Hero />
        <About />
      </WebsiteBody>
      <Background $darkMode={isDarkMode} />
    </>
  );
};

export default App;
