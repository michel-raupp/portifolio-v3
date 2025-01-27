import { useThemeStore } from "@/stores";
import { THEME_COLORS } from "@/constants";

import { TEXT_SIZE } from "../Text/types";
import { Text } from "@/components/atoms";

import { StyledLogo } from "./style";
import { useTranslation } from "react-i18next";

const Logo = () => {
  const { isDarkMode } = useThemeStore((state) => state);
  const { t } = useTranslation("commons");

  return (
    <StyledLogo href="#" $darkMode={isDarkMode} aria-label={t("goToHome")}>
      <div className="words" aria-hidden="true">
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
