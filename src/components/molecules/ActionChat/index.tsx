import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { IconDownload } from "@tabler/icons-react";

import { useThemeStore } from "@/stores";
import { useDownloadCv } from "@/helpers";
import { DARK_THEME, LIGHT_THEME, THEME_COLORS } from "@/constants";

import { Skeleton, Socials, Text } from "@/components/atoms";

import { Chat, DownloadButton, SocialWrapper } from "./style";

interface IActionChat {
  text: string;
}

const ActionChat = ({ text }: IActionChat) => {
  const { isDarkMode } = useThemeStore((state) => state);
  const { t } = useTranslation("commons");
  const downloadCvPath = useDownloadCv();

  return (
    <Chat $darkMode={isDarkMode}>
      <Suspense fallback={<Skeleton height="90px" />}>
        <Text text={text} color={THEME_COLORS.lightText} />
        <SocialWrapper>
          <Socials />
          <DownloadButton
            $darkMode={isDarkMode}
            href={downloadCvPath()}
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
      </Suspense>
    </Chat>
  );
};

export default ActionChat;
