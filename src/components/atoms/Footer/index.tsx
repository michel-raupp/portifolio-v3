import { useTranslation } from "react-i18next";

import { useThemeStore } from "@/stores";
import { THEME_COLORS } from "@/constants";

import { Text } from "@/components/atoms";
import { Bar, CustomText, Link, StyledFooter, Wrapper } from "./style";
import { TEXT_SIZE } from "../Text/types";

const Footer = () => {
  const { isDarkMode } = useThemeStore((state) => state);
  const { t } = useTranslation("commons");

  return (
    <StyledFooter $darkMode={isDarkMode}>
      <Wrapper>
        <Text text={t("madeWith")} color={THEME_COLORS.text} />
      </Wrapper>
      <Bar $darkMode={isDarkMode} />
      <Wrapper>
        <Text text="Links:" color={THEME_COLORS.text} size={TEXT_SIZE.S} />
        <Link
          href="https://www.figma.com/design/1ceIi43nNDurAOj1rgcqA2/Portif%C3%B3lio-V3?node-id=10-443&t=5FqSefiwAsJDT19z-1"
          target="_blank"
          rel="noreferrer noopener"
          $darkMode={isDarkMode}
        >
          <Text
            text={t("visitGithub")}
            color={THEME_COLORS.text}
            bold
            size={TEXT_SIZE.S}
          />
        </Link>
        <Link
          href="https://www.figma.com/design/1ceIi43nNDurAOj1rgcqA2/Portif%C3%B3lio-V3?node-id=10-443&t=5FqSefiwAsJDT19z-1"
          target="_blank"
          rel="noreferrer noopener"
          $darkMode={isDarkMode}
        >
          <Text
            text={t("visitFigma")}
            color={THEME_COLORS.text}
            bold
            size={TEXT_SIZE.S}
          />
        </Link>
        <CustomText>
          <Text
            text="Michel Raupp - @2025"
            color={THEME_COLORS.text}
            size={TEXT_SIZE.S}
          />
        </CustomText>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
