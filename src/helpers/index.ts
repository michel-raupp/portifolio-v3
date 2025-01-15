import { DARK_THEME, LIGHT_THEME, TThemeColors } from "@/constants";

export const getColor = (color: TThemeColors, $darkMode: boolean) => {
  const theme = $darkMode ? DARK_THEME : LIGHT_THEME;
  return theme[color] || theme.text;
};
