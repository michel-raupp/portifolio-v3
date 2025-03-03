import { useTranslation } from "react-i18next";
import { IconDownload } from "@tabler/icons-react";

import { useThemeStore } from "@/stores";
import { DARK_THEME, LIGHT_THEME, THEME_COLORS } from "@/constants";

import { Socials, Text } from "@/components/atoms";

import { Chat, DownloadButton, SocialWrapper } from "./style";

interface IActionChat {
  text: string;
}

const ActionChat = ({ text }: IActionChat) => {
  const { isDarkMode } = useThemeStore((state) => state);
  const { t } = useTranslation("commons");

  return (
    <Chat $darkMode={isDarkMode}>
      <Text text={text} color={THEME_COLORS.lightText} />
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
    </Chat>
  );
};

export default ActionChat;
