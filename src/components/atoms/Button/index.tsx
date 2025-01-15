import { ReactNode } from "react";

import { useThemeStore } from "@/stores/theme";
import { DARK_THEME, LIGHT_THEME } from "@/constants";

import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_WIDTH,
  TButtonColors,
  TButtonSizes,
  TButtonWidth,
} from "./types";
import { StyleButton, StyledText } from "./style";

interface IButton {
  title?: string;
  color?: TButtonColors;
  size?: TButtonSizes;
  width?: TButtonWidth;
  onClick?: () => void;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

interface IRenderText {
  title: string;
  buttonColor: TButtonColors;
  size: TButtonSizes;
}

const getTextColor = (
  isDarkMode: boolean,
  buttonColor: TButtonColors
): string => {
  if (buttonColor === BUTTON_COLORS.SECONDARY) {
    return isDarkMode ? DARK_THEME.text : LIGHT_THEME.text;
  }
  if (buttonColor === BUTTON_COLORS.DARK) {
    return isDarkMode ? DARK_THEME.text : LIGHT_THEME.background;
  }
  return isDarkMode ? DARK_THEME.text : LIGHT_THEME.background;
};

const RenderText = ({ title, buttonColor, size }: IRenderText) => {
  const { isDarkMode } = useThemeStore((state) => state);
  const textColor = getTextColor(isDarkMode, buttonColor);

  return (
    <StyledText color={textColor} size={size}>
      {title}
    </StyledText>
  );
};

const Button = ({
  title,
  color = BUTTON_COLORS.PRIMARY,
  size = BUTTON_SIZES.LARGE,
  width = BUTTON_WIDTH.COMPACT,
  onClick = () => {},
  iconLeft,
  iconRight,
}: IButton) => {
  const { isDarkMode } = useThemeStore((state) => state);

  return (
    <StyleButton
      $darkMode={isDarkMode}
      color={color}
      size={size}
      width={width}
      onClick={onClick}
    >
      {iconLeft}
      {title && <RenderText title={title} buttonColor={color} size={size} />}
      {iconRight}
    </StyleButton>
  );
};

export default Button;
