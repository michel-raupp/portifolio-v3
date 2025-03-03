export const LIGHT_THEME = {
  primary: "#4640BF",
  secondary: "#E3DFEF",
  background: "#F9F8FC",
  gray: "#D3D1D9",
  lightGray: "#ECEAF2",
  text: "#040307",
  lightText: "#312e3c",
} as const;

export const DARK_THEME = {
  primary: "#4640BF",
  secondary: "#25226D",
  background: "#040307",
  gray: "#12121c",
  lightGray: "#2f2f43",
  text: "#F9F8FC",
  lightText: "#d6d2df",
} as const;

export const THEME_COLORS = {
  primary: "primary",
  secondary: "secondary",
  background: "background",
  gray: "gray",
  lightGray: "lightGray",
  text: "text",
  lightText: "lightText",
} as const;

export type TThemeColors = keyof typeof THEME_COLORS;

export const THEME_TYPES = {
  DARK: "DARK",
  LIGHT: "LIGHT",
} as const;

export type ThemeTypes = keyof typeof THEME_TYPES;
