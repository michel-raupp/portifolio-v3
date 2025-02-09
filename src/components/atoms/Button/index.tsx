import { ReactNode } from "react";

import { useThemeStore } from "@/stores/theme";

import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_WIDTH,
  TButtonColors,
  TButtonSizes,
  TButtonWidth,
} from "./types";
import { StyleButton, StyledAnchor, StyledText } from "./style";

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

interface IButton {
  title?: string;
  color?: TButtonColors;
  size?: TButtonSizes;
  width?: TButtonWidth;
  onClick?: () => void;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  accessibilityLabel?: string;
  isDownload?: boolean;
  isLink?: boolean;
  url?: string;
}

const Button = ({
  title,
  color = BUTTON_COLORS.PRIMARY,
  size = BUTTON_SIZES.LARGE,
  width = BUTTON_WIDTH.COMPACT,
  onClick = () => {},
  iconLeft,
  iconRight,
  accessibilityLabel,
  isDownload,
  isLink,
  url,
}: IButton) => {
  const { isDarkMode } = useThemeStore((state) => state);

  if (isLink) {
    return (
      <StyledAnchor
        $darkMode={isDarkMode}
        color={color}
        size={size}
        width={width}
        href={url}
        aria-label={accessibilityLabel}
        target="_blank"
        rel="noreferrer noopener"
        download={isDownload}
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
      </StyledAnchor>
    );
  }

  return (
    <StyleButton
      $darkMode={isDarkMode}
      color={color}
      size={size}
      width={width}
      onClick={onClick}
      aria-label={accessibilityLabel}
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
