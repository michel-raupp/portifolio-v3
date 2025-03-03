import { useTranslation } from "react-i18next";

import { useThemeStore } from "@/stores";

import { TAIL_DIRECTIONS } from "@/components/atoms/Chat/types";
import { ActionChat } from "@/components/molecules";
import { Chat, Skeleton } from "@/components/atoms";

import { ChatWrapper, Image, Wrapper } from "./style";

import CatPicture from "@/assets/images/cat.webp";
import { useEffect, useState } from "react";

const Contact = () => {
  const { t } = useTranslation("contact");
  const { isDarkMode } = useThemeStore((state) => state);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Wrapper id="contact">
      {loading ? (
        <Skeleton height="280px" />
      ) : (
        <>
          <Image
            $darkMode={isDarkMode}
            src={CatPicture}
            alt={t("profilePicture")}
            height="100%"
            width="100%"
          />
          <ChatWrapper>
            <Chat
              direction={TAIL_DIRECTIONS.LEFT}
              title={t("contactTitle")}
              text={t("contactText1")}
            />
            <ActionChat text={t("contactText2")} />
          </ChatWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default Contact;
