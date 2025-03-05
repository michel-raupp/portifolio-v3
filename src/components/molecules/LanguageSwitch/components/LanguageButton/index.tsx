import { Suspense } from "react";
import { LANGUAGES } from "@/stores";
import { TLanguage } from "@/stores/i18n";

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
  return (
    <FlagButton
      onClick={handleOpen}
      $darkMode={isDarkMode}
      aria-label={t("openLangOptions")}
    >
      <Suspense fallback={<Skeleton width="32px" height="32px" />}>
        <FlagImg
          src={flagSrc}
          alt="flag"
          aria-hidden
          height="64px"
          width="64px"
        />
      </Suspense>
    </FlagButton>
  );
};

export default LanguageButton;
