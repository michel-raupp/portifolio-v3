import styled, { css } from "styled-components";
import { DARK_THEME, LIGHT_THEME } from "@/constants";

import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_WIDTH,
  TButtonColors,
  TButtonSizes,
  TButtonWidth,
} from "./types";

interface IStyleButton {
  color: TButtonColors;
  size: TButtonSizes;
  width: TButtonWidth;
  $darkMode: boolean;
}

interface IStyledText {
  color: TButtonColors;
  size: TButtonSizes;
  $darkMode: boolean;
}

const getButtonColor = (color: TButtonColors, $darkMode: boolean) => {
  const theme = $darkMode ? DARK_THEME : LIGHT_THEME;
  switch (color) {
    case BUTTON_COLORS.PRIMARY:
      return theme.primary;
    case BUTTON_COLORS.SECONDARY:
      return theme.secondary;
    case BUTTON_COLORS.DARK:
      return $darkMode ? DARK_THEME.gray : LIGHT_THEME.text;
    default:
      return "transparent";
  }
};

const getTextColor = ($darkMode: boolean, color: TButtonColors): string => {
  switch (color) {
    case BUTTON_COLORS.SECONDARY:
      return $darkMode ? DARK_THEME.text : LIGHT_THEME.text;
    case BUTTON_COLORS.DARK:
      return $darkMode ? DARK_THEME.text : LIGHT_THEME.background;
    default:
      return $darkMode ? DARK_THEME.text : LIGHT_THEME.background;
  }
};

const getPadding = (size: TButtonSizes) => {
  switch (size) {
    case BUTTON_SIZES.SMALL:
      return " 8px";
    case BUTTON_SIZES.NORMAL:
      return "8px 16px";
    case BUTTON_SIZES.LARGE:
      return `
        16px;
        @media (max-width: 768px) {
          12px;
        }
      `;
    default:
      return "8px 16px";
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

const sharedStyles = css<IStyleButton>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: ${({ color, $darkMode }) =>
    getButtonColor(color, $darkMode)};
  padding: ${({ size }) => getPadding(size)};
  width: ${({ width }) => getWidth(width)};
  border-radius: ${({ size }) => (size === BUTTON_SIZES.LARGE ? "8px" : "4px")};
  transition: background-color ease-in-out 0.3s;

  &:hover {
    background-color: ${({ $darkMode }) =>
      $darkMode ? DARK_THEME.lightGray : LIGHT_THEME.lightText};

    p {
      color: ${({ $darkMode }) =>
        $darkMode ? DARK_THEME.text : LIGHT_THEME.background};
    }
  }

  @media (max-width: 768px) {
    border-radius: 4px;
  }
`;

export const StyleButton = styled.button<IStyleButton>`
  ${sharedStyles}
`;

export const StyledAnchor = styled.a<IStyleButton>`
  ${sharedStyles}
`;

export const StyledText = styled.p<IStyledText>`
  color: ${({ $darkMode, color }) => getTextColor($darkMode, color)};
  font-size: ${({ size }) => (size === BUTTON_SIZES.LARGE ? "16px" : "14px")};
  transition: color ease-in-out 0.3s;

  @media (max-width: 768px) {
    font-size: ${({ size }) => (size === BUTTON_SIZES.LARGE ? "14px" : "12px")};
  }
`;
