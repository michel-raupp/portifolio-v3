import { useEffect, useState } from "react";
import { LANGUAGES, TLanguage } from "@/stores";

import { Skeleton } from "@/components/atoms";
import { FlagButton, FlagImg } from "./styles";

import PT_FLAG from "@/assets/flags/pt-BR.png";
import EN_FLAG from "@/assets/flags/en-US.png";

interface ILanguageButton {
  language: TLanguage;
  isDarkMode: boolean;
  handleOpen: VoidFunction;
  t: (key: string) => string;
}

const LanguageButton = ({
  language,
  isDarkMode,
  handleOpen,
  t,
}: ILanguageButton) => {
  const flagSrc = language === LANGUAGES.PT ? PT_FLAG : EN_FLAG;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <FlagButton
      onClick={handleOpen}
      $darkMode={isDarkMode}
      aria-label={t("openLangOptions")}
    >
      {loading ? (
        <Skeleton />
      ) : (
        <FlagImg
          src={flagSrc}
          alt="flag"
          aria-hidden
          height="32px"
          width="32px"
        />
      )}
    </FlagButton>
  );
};

export default LanguageButton;
