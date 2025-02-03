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
  ImageWrapper,
  SocialWrapper,
  Wrapper,
} from "./style";
import SenderOrigin from "./components/SenderOrigin";

const Hero = () => {
  const { t } = useTranslation("hero");
  const { isDarkMode } = useThemeStore((state) => state);

  return (
    <Wrapper id="home">
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
        <SenderOrigin isDarkMode={isDarkMode} t={t} />
      </ChatWrapper>
      <ImageWrapper>
        <Image
          $darkMode={isDarkMode}
          src={ProfilePicture}
          alt={t("profilePicture")}
        />
        <SenderOrigin isOnlyMobile isDarkMode={isDarkMode} t={t} />
      </ImageWrapper>
    </Wrapper>
  );
};

export default Hero;
