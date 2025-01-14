import styled from "styled-components";
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_WIDTH,
  DARK_THEME,
  LIGHT_THEME,
  TButtonColors,
  TButtonSizes,
  TButtonWidth,
} from "@/constants";

interface IStyleButton {
  color: TButtonColors;
  size: TButtonSizes;
  width: TButtonWidth;
  darkMode: boolean;
}

const getColor = (color: TButtonColors, darkMode: boolean) => {
  const theme = darkMode ? DARK_THEME : LIGHT_THEME;
  switch (color) {
    case BUTTON_COLORS.PRIMARY:
      return theme.primary;
    case BUTTON_COLORS.SECONDARY:
      return theme.secondary;
    case BUTTON_COLORS.DARK:
      return darkMode ? DARK_THEME.gray : LIGHT_THEME.text;
    default:
      return "transparent";
  }
};

const getPadding = (size: TButtonSizes) => {
  switch (size) {
    case BUTTON_SIZES.NORMAL:
      return "16px 8px";
    case BUTTON_SIZES.LARGE:
      return `
        padding: 16px;
        @media (max-width: 768px) {
          padding: 12px;
        }
      `;
    default:
      return "8px";
  }
};

const getWidth = (width: TButtonWidth) => {
  switch (width) {
    case BUTTON_WIDTH.COMPACT:
      return "auto";
    case BUTTON_WIDTH.FULL:
      return "100%";
    default:
      return "auto";
  }
};

export const StyleButton = styled.button<IStyleButton>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  background-color: ${({ color, darkMode }) => getColor(color, darkMode)};
  padding: ${({ size }) => getPadding(size)};
  width: ${({ width }) => getWidth(width)};
`;

interface IStyledText {
  color: string;
  size: TButtonSizes;
}

export const StyledText = styled.p<IStyledText>`
  color: ${({ color }) => color};
  font-size: ${({ size }) => (size === BUTTON_SIZES.NORMAL ? "16px" : "14px")};
`;
