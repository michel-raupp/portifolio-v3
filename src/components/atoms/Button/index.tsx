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
  color: TButtonColors;
  size: TButtonSizes;
  $darkMode: boolean;
}

const RenderText = ({ title, color, size, $darkMode }: IRenderText) => {
  return (
    <StyledText color={color} size={size} $darkMode={$darkMode}>
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
      {title && (
        <RenderText
          title={title}
          color={color}
          size={size}
          $darkMode={isDarkMode}
        />
      )}
      {iconRight}
    </StyleButton>
  );
};

export default Button;
