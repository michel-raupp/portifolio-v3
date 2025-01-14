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

export const TEXT_SIZE = {
  XS: "XS" /* 12px */,
  S: "S" /* 14px */,
  BASE: "BASE" /* 16px */,
  LG: "LG" /* 18px */,
  XL: "XL" /* 20px */,
  XXL: "XXL" /* 24px */,
  XXXL: "XXXL" /* 30px */,
} as const;

export const TEXT_HIERARCHIES = {
  HEADING_1: "HEADING_1",
  HEADING_2: "HEADING_2",
  HEADING_3: "HEADING_3",
  PARAGRAPH: "PARAGRAPH",
  LABEL: "LABEL",
} as const;

export type TTextSize = (typeof TEXT_SIZE)[keyof typeof TEXT_SIZE];
export type TTextHierarchies =
  (typeof TEXT_HIERARCHIES)[keyof typeof TEXT_HIERARCHIES];
