import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { IconDownload } from "@tabler/icons-react";

import { DARK_THEME, LIGHT_THEME, THEME_COLORS } from "@/constants";
import { useThemeStore } from "@/stores";

import { TEXT_HIERARCHIES, TEXT_SIZE } from "@/components/atoms/Text/types";
import { Skeleton, Text } from "@/components/atoms";

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
    <Wrapper id="about">
      <Col>
        <Text
          hierarchy={TEXT_HIERARCHIES.HEADING_2}
          text={t("aboutTitle1")}
          color={THEME_COLORS.text}
        />
        <Suspense fallback={<Skeleton height="72px" />}>
          <Text text={t("aboutText1")} color={THEME_COLORS.lightText} />
        </Suspense>
        <Suspense fallback={<Skeleton height="96px" />}>
          <Text text={t("aboutText2")} color={THEME_COLORS.lightText} />
        </Suspense>
        <Suspense fallback={<Skeleton height="40px" />}>
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
        </Suspense>
      </Col>
      <Col>
        <Text
          hierarchy={TEXT_HIERARCHIES.HEADING_2}
          text={t("aboutTitle2")}
          color={THEME_COLORS.text}
        />
        <SkillWrapper>
          <Suspense fallback={<Skeleton height="360px" />}>
            {skills.map((skill) => (
              <Skill key={skill.name} $darkMode={isDarkMode}>
                <IconContainer $darkMode={isDarkMode}>
                  {skill.icon}
                </IconContainer>
                <Text
                  text={skill.name}
                  color={THEME_COLORS.text}
                  size={TEXT_SIZE.XS}
                />
              </Skill>
            ))}
          </Suspense>
        </SkillWrapper>
      </Col>
    </Wrapper>
  );
};

export default About;
