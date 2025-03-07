import { DARK_THEME, LIGHT_THEME } from "@/constants";
import { TThemeColors } from "@/constants/theme";
import { useI18nStore } from "@/stores";

export const getColor = (color: TThemeColors, $darkMode: boolean) => {
  const theme = $darkMode ? DARK_THEME : LIGHT_THEME;
  return theme[color] || theme.text;
};

interface IDateOptions {
  year: "numeric";
  month: "short";
}

export const ConvertToDate = (date: Date) => {
  const { language } = useI18nStore((state) => state);

  const dateOptions = {
    year: "numeric",
    month: "short",
  } as IDateOptions;

  return date.toLocaleDateString(language, dateOptions);
};

export const UpdateQuery = (key: string, value: string | null) => {
  const url = new URL(window.location.href);

  if (value) {
    url.searchParams.set(key, value);
  } else {
    url.searchParams.delete(key);
  }

  window.history.replaceState({}, "", url.toString());
};
