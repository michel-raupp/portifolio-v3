import { useTranslation } from "react-i18next";
import { IconDownload } from "@tabler/icons-react";

import { DARK_THEME, LIGHT_THEME, THEME_COLORS } from "@/constants";
import { useThemeStore } from "@/stores";

import { TEXT_HIERARCHIES, TEXT_SIZE } from "@/components/atoms/Text/types";
import { Text } from "@/components/atoms";

import { getSkillsData } from "./data";
import {
  Col,
  DownloadButton,
  IconContainer,
  Skill,
  SkillWrapper,
  Wrapper,
} from "./style";

const About = () => {
  const { isDarkMode } = useThemeStore((state) => state);
  const { t } = useTranslation("about");
  const skills = getSkillsData(isDarkMode);

  return (
    <Wrapper>
      <Col>
        <Text
          hierarchy={TEXT_HIERARCHIES.HEADING_2}
          text={t("aboutTitle1")}
          color={THEME_COLORS.text}
        />
        <Text text={t("aboutText1")} color={THEME_COLORS.text} />
        <Text text={t("aboutText2")} color={THEME_COLORS.text} />
        <DownloadButton
          href="/resume.pdf"
          download
          aria-label={t("downloadResume")}
          $darkMode={isDarkMode}
        >
          <Text
            text={t("downloadResume")}
            color={isDarkMode ? THEME_COLORS.text : THEME_COLORS.background}
          />
          <IconDownload
            size={24}
            color={isDarkMode ? DARK_THEME.text : LIGHT_THEME.background}
          />
        </DownloadButton>
      </Col>

      <Col>
        <Text
          hierarchy={TEXT_HIERARCHIES.HEADING_2}
          text={t("aboutTitle2")}
          color={THEME_COLORS.text}
        />
        <SkillWrapper>
          {skills.map((skill) => (
            <Skill key={skill.name} $darkMode={isDarkMode}>
              <IconContainer $darkMode={isDarkMode}>{skill.icon}</IconContainer>
              <Text
                text={skill.name}
                color={THEME_COLORS.text}
                size={TEXT_SIZE.XS}
              />
            </Skill>
          ))}
        </SkillWrapper>
      </Col>
    </Wrapper>
  );
};

export default About;
