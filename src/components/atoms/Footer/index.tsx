import { useThemeStore } from "@/stores";
import { THEME_COLORS } from "@/constants";

import { Text } from "@/components/atoms";

import { StyledFooter, Wrapper } from "./style";

const Footer = () => {
  const { isDarkMode } = useThemeStore((state) => state);

  return (
    <StyledFooter $darkMode={isDarkMode}>
      <Wrapper>
        <Text text="made with coffee ☕" color={THEME_COLORS.text} />
        <Text text="Michel Raupp - @2025" color={THEME_COLORS.text} />
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
