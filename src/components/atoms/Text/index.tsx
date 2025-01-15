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
    <StyledH1 $darkMode={isDarkMode} color={color} size="XXXL" bold>
      {text}
    </StyledH1>;
  }
  if (hierarchy === TEXT_HIERARCHIES.HEADING_2) {
    <StyledH2 $darkMode={isDarkMode} color={color} size="XXL" bold>
      {text}
    </StyledH2>;
  }
  if (hierarchy === TEXT_HIERARCHIES.HEADING_3) {
    <StyledH3 $darkMode={isDarkMode} color={color} size="XL" bold>
      {text}
    </StyledH3>;
  }
  if (hierarchy === TEXT_HIERARCHIES.LABEL) {
    <StyledText $darkMode={isDarkMode} color={color} size="S">
      {text}
    </StyledText>;
  }
  return (
    <StyledText $darkMode={isDarkMode} color={color} size={size} bold={bold}>
      {text}
    </StyledText>
  );
};

export default Text;
