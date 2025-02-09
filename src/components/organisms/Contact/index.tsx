import { useTranslation } from "react-i18next";
import { IconDownload } from "@tabler/icons-react";

import { useThemeStore } from "@/stores";
import { DARK_THEME, LIGHT_THEME, THEME_COLORS } from "@/constants";

import { TAIL_DIRECTIONS } from "@/components/atoms/Chat/types";
import { Chat, Socials, Text } from "@/components/atoms";

import CatPicture from "@/assets/images/cat.webp";
import {
  ActionChat,
  ChatWrapper,
  DownloadButton,
  Image,
  ImageWrapper,
  SocialWrapper,
  Wrapper,
} from "./style";

const Contact = () => {
  const { t } = useTranslation("contact");
  const { isDarkMode } = useThemeStore((state) => state);

  return (
    <Wrapper id="contact">
      <ImageWrapper>
        <Image
          $darkMode={isDarkMode}
          src={CatPicture}
          alt={t("profilePicture")}
        />
      </ImageWrapper>
      <ChatWrapper>
        <Chat
          direction={TAIL_DIRECTIONS.LEFT}
          title={t("contactTitle")}
          text={t("contactText1")}
        />
        <ActionChat $darkMode={isDarkMode}>
          <Text text={t("contactText2")} color={THEME_COLORS.text} />
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
    </Wrapper>
  );
};

export default Contact;
