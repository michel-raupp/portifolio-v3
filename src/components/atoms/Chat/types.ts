export const BUTTON_COLORS = {
  PRIMARY: "PRIMARY",
  SECONDARY: "SECONDARY",
  DARK: "DARK",
} as const;

export const BUTTON_SIZES = {
  NORMAL: "NORMAL",
  LARGE: "LARGE",
} as const;

export const BUTTON_WIDTH = {
  COMPACT: "COMPACT",
  FULL: "FULL",
} as const;

export type TButtonColors = (typeof BUTTON_COLORS)[keyof typeof BUTTON_COLORS];
export type TButtonSizes = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];
export type TButtonWidth = (typeof BUTTON_WIDTH)[keyof typeof BUTTON_WIDTH];
