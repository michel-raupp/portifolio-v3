import { ThemeProvider } from "styled-components";
import { useThemeStore } from "@/stores/theme";
import { DARK_THEME, LIGHT_THEME, THEME_TYPES } from "@/constants";

interface ThemeColorsProps {
  children: React.ReactNode;
}

export const ThemeColorsProvider = ({ children }: ThemeColorsProps) => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <ThemeProvider
      theme={theme === THEME_TYPES.LIGHT ? LIGHT_THEME : DARK_THEME}
    >
      {children}
    </ThemeProvider>
  );
};
