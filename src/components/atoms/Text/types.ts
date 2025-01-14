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
