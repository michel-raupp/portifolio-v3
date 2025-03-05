import { Suspense } from "react";
import { useTranslation } from "react-i18next";

import { useThemeStore } from "@/stores";

import { TAIL_DIRECTIONS } from "@/components/atoms/Chat/types";
import { ActionChat } from "@/components/molecules";
import { Chat, Skeleton } from "@/components/atoms";

import { ChatWrapper, Image, Wrapper } from "./style";

import CatPicture from "@/assets/images/cat.webp";

const Contact = () => {
  const { t } = useTranslation("contact");
  const { isDarkMode } = useThemeStore((state) => state);

  return (
    <Wrapper id="contact">
      <Suspense fallback={<Skeleton height="280px" />}>
        <Image
          $darkMode={isDarkMode}
          src={CatPicture}
          alt={t("profilePicture")}
          height="100%"
          width="100%"
          loading="lazy"
        />
        <ChatWrapper>
          <Chat
            direction={TAIL_DIRECTIONS.LEFT}
            title={t("contactTitle")}
            text={t("contactText1")}
          />
          <ActionChat text={t("contactText2")} />
        </ChatWrapper>
      </Suspense>
    </Wrapper>
  );
};

export default Contact;
