import { create } from "zustand";
import { THEME_TYPES, ThemeTypes } from "@/providers";

interface ThemeState {
  theme: ThemeTypes;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const getInitialTheme = (): ThemeTypes => {
  const savedTheme = localStorage.getItem("theme") as ThemeTypes | null;
  if (savedTheme) {
    return savedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEME_TYPES.DARK
    : THEME_TYPES.LIGHT;
};

export const useThemeStore = create<ThemeState>((set) => {
  const initialTheme = getInitialTheme();

  return {
    theme: initialTheme,
    toggleTheme: () =>
      set((state) => {
        const newTheme =
          state.theme === THEME_TYPES.LIGHT
            ? THEME_TYPES.DARK
            : THEME_TYPES.LIGHT;

        localStorage.setItem("theme", newTheme);
        return { theme: newTheme, isDarkMode: newTheme === THEME_TYPES.DARK };
      }),
    isDarkMode: initialTheme === "DARK",
  };
});
