import { useTranslation } from "react-i18next";
import { IconDownload } from "@tabler/icons-react";

import { useThemeStore } from "@/stores";
import { DARK_THEME, LIGHT_THEME, THEME_COLORS } from "@/constants";

import { TAIL_DIRECTIONS } from "@/components/atoms/Chat/types";
import { Chat, Socials, Text } from "@/components/atoms";

import ProfilePicture from "@/assets/images/profile.png";

import {
  ActionChat,
  ChatWrapper,
  DownloadButton,
  Image,
  SocialWrapper,
  Wrapper,
} from "./style";

const Hero = () => {
  const { t } = useTranslation("hero");
  const { isDarkMode } = useThemeStore((state) => state);

  return (
    <Wrapper>
      <ChatWrapper>
        <Chat
          direction={TAIL_DIRECTIONS.RIGHT}
          title={t("heroTitle")}
          text={t("heroText1")}
        />
        <ActionChat $darkMode={isDarkMode}>
          <Text text={t("heroText2")} color={THEME_COLORS.text} />
          <SocialWrapper>
            <Socials />
            <DownloadButton
              $darkMode={isDarkMode}
              href="/resume.pdf"
              download
              aria-label={t("resume")}
            >
              <Text
                text={t("resume")}
                color={isDarkMode ? THEME_COLORS.text : THEME_COLORS.background}
              />
              <IconDownload
                size={24}
                color={isDarkMode ? DARK_THEME.text : LIGHT_THEME.background}
              />
            </DownloadButton>
          </SocialWrapper>
        </ActionChat>
      </ChatWrapper>
      <Image
        $darkMode={isDarkMode}
        src={ProfilePicture}
        alt={t("profilePicture")}
      />
    </Wrapper>
  );
};

export default Hero;
