import { DARK_THEME, LIGHT_THEME, TThemeColors } from "@/constants";
import { useI18nStore } from "@/stores";

export const getColor = (color: TThemeColors, $darkMode: boolean) => {
  const theme = $darkMode ? DARK_THEME : LIGHT_THEME;
  return theme[color] || theme.text;
};

interface IDateOptions {
  year: "numeric";
  month: "short";
}

export const convertToDate = (date: Date) => {
  const { language } = useI18nStore((state) => state);

  const dateOptions = {
    year: "numeric",
    month: "short",
  } as IDateOptions;

  return date.toLocaleDateString(language, dateOptions);
};
