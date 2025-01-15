export const TAIL_DIRECTIONS = {
  LEFT: "left",
  RIGHT: "right",
} as const;

export type TTailDirections =
  (typeof TAIL_DIRECTIONS)[keyof typeof TAIL_DIRECTIONS];
