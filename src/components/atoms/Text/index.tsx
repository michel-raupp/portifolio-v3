import { useThemeStore } from "@/stores/theme";
import {
  TEXT_HIERARCHIES,
  TEXT_SIZE,
  TTextHierarchies,
  TTextSize,
} from "./types";
import { StyledH1, StyledH2, StyledH3, StyledText } from "./style";
import { THEME_COLORS, TThemeColors } from "@/constants";

interface IText {
  text?: string;
  color?: TThemeColors;
  size?: TTextSize;
  hierarchy?: TTextHierarchies;
  bold?: boolean;
}

const Text = ({
  text,
  color = THEME_COLORS.text,
  size = TEXT_SIZE.BASE,
  hierarchy = TEXT_HIERARCHIES.PARAGRAPH,
  bold,
}: IText) => {
  const { isDarkMode } = useThemeStore((state) => state);

  if (hierarchy === TEXT_HIERARCHIES.HEADING_1) {
    return (
      <StyledH1 $darkMode={isDarkMode} color={color}>
        {text}
      </StyledH1>
    );
  }
  if (hierarchy === TEXT_HIERARCHIES.HEADING_2) {
    return (
      <StyledH2 $darkMode={isDarkMode} color={color}>
        {text}
      </StyledH2>
    );
  }
  if (hierarchy === TEXT_HIERARCHIES.HEADING_3) {
    return (
      <StyledH3 $darkMode={isDarkMode} color={color}>
        {text}
      </StyledH3>
    );
  }
  if (hierarchy === TEXT_HIERARCHIES.LABEL) {
    return (
      <StyledText $darkMode={isDarkMode} color={color} size={TEXT_SIZE.S}>
        {text}
      </StyledText>
    );
  }
  return (
    <StyledText $darkMode={isDarkMode} color={color} size={size} $bold={bold}>
      {text}
    </StyledText>
  );
};

export default Text;
