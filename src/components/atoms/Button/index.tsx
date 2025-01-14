import { ReactNode } from "react";

import { useThemeStore } from "@/stores/theme";
import {
  DARK_THEME,
  LIGHT_THEME,
  TButtonColors,
  TButtonSizes,
  TButtonWidth,
} from "@/constants";

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

const RenderText = ({ title, buttonColor, size }: IRenderText) => {
  const { isDarkMode } = useThemeStore((state) => state);

  if (buttonColor === "DARK") {
    <StyledText
      color={isDarkMode ? DARK_THEME.text : LIGHT_THEME.background}
      size={size}
    >
      {title}
    </StyledText>;
  }
  if (buttonColor === "SECONDARY") {
    <StyledText
      color={isDarkMode ? DARK_THEME.text : LIGHT_THEME.text}
      size={size}
    >
      {title}
    </StyledText>;
  }
  return (
    <StyledText
      color={isDarkMode ? DARK_THEME.text : LIGHT_THEME.background}
      size={size}
    >
      {title}
    </StyledText>
  );
};

const Button = (props: IButton) => {
  const {
    title,
    color = "PRIMARY",
    size = "NORMAL",
    width = "COMPACT",
    onClick = () => {},
    iconLeft,
    iconRight,
  } = props;

  const { isDarkMode } = useThemeStore((state) => state);

  return (
    <StyleButton
      darkMode={isDarkMode}
      color={color}
      size={size}
      width={width}
      onClick={onClick}
    >
      {iconLeft && iconLeft}
      {title && <RenderText title={title} buttonColor={color} size={size} />}
      {iconRight && iconRight}
    </StyleButton>
  );
};

export default Button;
