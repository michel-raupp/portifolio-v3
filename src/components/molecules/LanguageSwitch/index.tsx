import { useTranslation } from "react-i18next";

import { LANGUAGES, TLanguage, useI18nStore, useThemeStore } from "@/stores";

import { FlagButton, FlagImg, StyledSwitch } from "./styles";

import PT_FLAG from "@/assets/flags/pt-BR.png";
import EN_FLAG from "@/assets/flags/en-US.png";

interface ILang {
  label: string;
  value: TLanguage;
  image: string;
}

interface IData {
  portuguese: ILang;
  english: ILang;
}

interface IFlag {
  data: IData;
  language: TLanguage;
  choseLanguage: (value: TLanguage) => void;
  isDarkMode: boolean;
}

const Flag = ({ data, choseLanguage, isDarkMode, language }: IFlag) => {
  if (language === LANGUAGES.PT) {
    return (
      <FlagButton
        onClick={() => choseLanguage(LANGUAGES.EN)}
        $darkMode={isDarkMode}
      >
        <FlagImg
          src={data.portuguese.image}
          alt={data.portuguese.label}
          $darkMode={isDarkMode}
        />
      </FlagButton>
    );
  }
  return (
    <FlagButton
      onClick={() => choseLanguage(LANGUAGES.PT)}
      $darkMode={isDarkMode}
    >
      <FlagImg
        src={data.english.image}
        alt={data.english.label}
        $darkMode={isDarkMode}
      />
    </FlagButton>
  );
};

const LanguageSwitch = () => {
  const { isDarkMode } = useThemeStore((state) => state);
  const { updateLanguage, language } = useI18nStore((state) => state);

  const { t } = useTranslation("default");

  const translates = {
    portuguese: {
      label: t("languagePortuguese"),
      value: LANGUAGES.PT,
      image: PT_FLAG,
    },
    english: {
      label: t("languageEnglish"),
      value: LANGUAGES.EN,
      image: EN_FLAG,
    },
  };

  const choseLanguage = (value: TLanguage) => {
    updateLanguage(value);
  };

  return (
    <StyledSwitch $darkMode={isDarkMode}>
      <Flag
        data={translates}
        language={language}
        choseLanguage={choseLanguage}
        isDarkMode={isDarkMode}
      />
    </StyledSwitch>
  );
};

export default LanguageSwitch;
