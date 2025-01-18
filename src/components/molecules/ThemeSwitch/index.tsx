import { useTranslation } from "react-i18next";
import { IconBrightnessUp, IconMoonStars } from "@tabler/icons-react";

import { useThemeStore } from "@/stores";
import { DARK_THEME, LIGHT_THEME } from "@/constants";

import { TEXT_SIZE } from "@/components/atoms/Text/types";
import { Text } from "@/components/atoms";
import { Tail, ThemeButton, Tooltip } from "./styles";

const ThemeSwitch = () => {
  const { toggleTheme, isDarkMode } = useThemeStore((state) => state);

  const { t } = useTranslation("default");

  return (
    <ThemeButton
      $darkMode={isDarkMode}
      aria-label={t(isDarkMode ? "changeThemeToLight" : "changeThemeToDark")}
    >
      {isDarkMode ? (
        <IconMoonStars
          onClick={toggleTheme}
          color={DARK_THEME.text}
          aria-hidden
        />
      ) : (
        <IconBrightnessUp
          onClick={toggleTheme}
          color={LIGHT_THEME.background}
          aria-hidden
        />
      )}

      <Tooltip id="theme-tooltip" $darkMode={isDarkMode} aria-hidden>
        <Tail $darkMode={isDarkMode} />
        <Text
          text={t(isDarkMode ? "changeThemeToLight" : "changeThemeToDark")}
          size={TEXT_SIZE.S}
        />
      </Tooltip>
    </ThemeButton>
  );
};

export default ThemeSwitch;
