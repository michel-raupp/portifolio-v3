import { useThemeStore } from "@/stores/theme";
import { TEXT_HIERARCHIES, TTextHierarchies, TTextSize } from "@/constants";
import { StyledH1, StyledH2, StyledH3, StyledText } from "./style";

interface IText {
  title?: string;
  color?: string;
  size?: TTextSize;
  hierarchy?: TTextHierarchies;
  bold?: boolean;
}

const Text = ({
  title,
  color = "TEXT",
  size = "BASE",
  hierarchy = "PARAGRAPH",
  bold,
}: IText) => {
  const { isDarkMode } = useThemeStore((state) => state);

  if (hierarchy === TEXT_HIERARCHIES.HEADING_1) {
    <StyledH1 darkMode={isDarkMode} color={color} size="XXXL" bold>
      {title}
    </StyledH1>;
  }
  if (hierarchy === TEXT_HIERARCHIES.HEADING_2) {
    <StyledH2 darkMode={isDarkMode} color={color} size="XXL" bold>
      {title}
    </StyledH2>;
  }
  if (hierarchy === TEXT_HIERARCHIES.HEADING_3) {
    <StyledH3 darkMode={isDarkMode} color={color} size="XL" bold>
      {title}
    </StyledH3>;
  }
  if (hierarchy === TEXT_HIERARCHIES.LABEL) {
    <StyledText darkMode={isDarkMode} color={color} size="S">
      {title}
    </StyledText>;
  }
  return (
    <StyledText darkMode={isDarkMode} color={color} size={size} bold={bold}>
      {title}
    </StyledText>
  );
};

export default Text;
