export const LIGHT_THEME = {
  primary: "#4640BF",
  secondary: "#E3DFEF",
  background: "#F9F8FC",
  gray: "#D3D1D9",
  lightGray: "#D3D1D9",
  text: "#040307",
} as const;

export const DARK_THEME = {
  primary: "#4640BF",
  secondary: "#25226D",
  background: "#040307",
  gray: "#121215",
  lightGray: "#2F2D37",
  text: "#F9F8FC",
} as const;

export const THEME_COLORS = {
  primary: "primary",
  secondary: "secondary",
  background: "background",
  gray: "gray",
  lightGray: "lightGray",
  text: "text",
} as const;

export type TThemeColors = keyof typeof THEME_COLORS;

export const THEME_TYPES = {
  DARK: "DARK",
  LIGHT: "LIGHT",
} as const;

export type ThemeTypes = keyof typeof THEME_TYPES;
