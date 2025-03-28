import { Suspense } from "react";
import { useTranslation } from "react-i18next";

import { useThemeStore } from "@/stores";

import { TAIL_DIRECTIONS } from "@/components/atoms/Chat/types";
import { ActionChat } from "@/components/molecules";
import { Chat, Skeleton } from "@/components/atoms";

import SenderOrigin from "./components/SenderOrigin";
import { ChatWrapper, Image, ImageWrapper, Wrapper } from "./style";

import ProfilePicture from "@/assets/images/profile.webp";

const Hero = () => {
  const { t } = useTranslation("hero");
  const { isDarkMode } = useThemeStore((state) => state);

  return (
    <Wrapper id="home">
      <Suspense fallback={<Skeleton height="358px" />}>
        <ChatWrapper>
          <Chat
            direction={TAIL_DIRECTIONS.RIGHT}
            title={t("heroTitle")}
            text={t("heroText1")}
          />
          <ActionChat text={t("heroText2")} />
          <SenderOrigin isDarkMode={isDarkMode} t={t} />
        </ChatWrapper>
        <ImageWrapper>
          <Image
            $darkMode={isDarkMode}
            src={ProfilePicture}
            alt={t("profilePicture")}
            height="384px"
            width="384px"
          />
          <Image
            $darkMode={isDarkMode}
            src={ProfilePicture}
            alt={t("profilePicture")}
            height="96px"
            width="96px"
            $isMobile
          />
          <SenderOrigin isOnlyMobile isDarkMode={isDarkMode} t={t} />
        </ImageWrapper>
      </Suspense>
    </Wrapper>
  );
};

export default Hero;
