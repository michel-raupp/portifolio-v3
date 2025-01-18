import { useTranslation } from "react-i18next";

import { useThemeStore } from "@/stores";
import { TAIL_DIRECTIONS } from "./components/atoms/Chat/types";
import { BUTTON_COLORS } from "./components/atoms/Button/types";

import { Header } from "./components/organisms";
import { Background, Button, Chat } from "@/components/atoms";

const App = () => {
  const { toggleTheme, isDarkMode } = useThemeStore((state) => state);
  const { t } = useTranslation("default");

  return (
    <Background $darkMode={isDarkMode}>
      <Header />
      <Button
        title={t("hello")}
        onClick={toggleTheme}
        color={BUTTON_COLORS.PRIMARY}
      />
      <Button
        title={t("hello")}
        onClick={toggleTheme}
        color={BUTTON_COLORS.SECONDARY}
      />

      <Button
        title={t("hello")}
        onClick={toggleTheme}
        color={BUTTON_COLORS.DARK}
      />

      <Chat
        title="titulo"
        text="primeiro texto"
        direction={TAIL_DIRECTIONS.RIGHT}
      />
    </Background>
  );
};

export default App;
