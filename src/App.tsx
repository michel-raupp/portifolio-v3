import { useThemeStore } from "@/stores";
import { TAIL_DIRECTIONS } from "./components/atoms/Chat/types";

import { Header } from "./components/organisms";
import { Background, Chat, Socials } from "@/components/atoms";

const App = () => {
  const { isDarkMode } = useThemeStore((state) => state);

  return (
    <Background $darkMode={isDarkMode}>
      <Header />

      <Chat
        title="titulo"
        text="primeiro texto"
        direction={TAIL_DIRECTIONS.RIGHT}
      />
      <Socials />
    </Background>
  );
};

export default App;
