import { useThemeStore } from "@/stores";
import { THEME_COLORS } from "@/constants";

import { TEXT_SIZE } from "../Text/types";
import { Text } from "@/components/atoms";

import { StyledLogo } from "./style";

const Logo = () => {
  const { isDarkMode } = useThemeStore((state) => state);

  return (
    <StyledLogo href="#" $darkMode={isDarkMode}>
      <div className="words">
        <Text
          text="Raupp"
          bold
          color={THEME_COLORS.text}
          size={TEXT_SIZE.XXL}
        />
        <Text
          text="Hello"
          bold
          color={THEME_COLORS.text}
          size={TEXT_SIZE.XXL}
        />
      </div>
    </StyledLogo>
  );
};

export default Logo;
