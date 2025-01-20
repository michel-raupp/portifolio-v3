import { useTranslation } from "react-i18next";
import { IconBrightnessUp, IconMoonStars } from "@tabler/icons-react";

import { useThemeStore } from "@/stores";
import { DARK_THEME, LIGHT_THEME } from "@/constants";

import { Tooltip } from "@/components/atoms";

import { ThemeButton } from "./styles";

const ThemeSwitch = () => {
  const { toggleTheme, isDarkMode } = useThemeStore((state) => state);

  const { t } = useTranslation("default");

  return (
    <ThemeButton
      onClick={toggleTheme}
      $darkMode={isDarkMode}
      aria-label={t(isDarkMode ? "changeThemeToLight" : "changeThemeToDark")}
    >
      {isDarkMode ? (
        <IconMoonStars color={DARK_THEME.text} aria-hidden />
      ) : (
        <IconBrightnessUp color={LIGHT_THEME.background} aria-hidden />
      )}

      <Tooltip
        text={t(isDarkMode ? "changeThemeToLight" : "changeThemeToDark")}
        parentSelector={ThemeButton}
      />
    </ThemeButton>
  );
};
export default ThemeSwitch;
