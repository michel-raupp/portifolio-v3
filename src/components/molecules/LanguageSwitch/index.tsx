import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { LANGUAGES, TLanguage, useI18nStore, useThemeStore } from "@/stores";

import { TEXT_SIZE } from "@/components/atoms/Text/types";
import { Text } from "@/components/atoms";
import {
  FlagButton,
  FlagImg,
  ImgContainer,
  LanguageOption,
  SelectWindow,
  StyledSwitch,
} from "./styles";

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

interface IOption {
  data: IData;
  language: TLanguage;
  isDarkMode: boolean;
  choseLanguage: (value: TLanguage) => void;
  handleCloseWindow: () => void;
}

const Option = ({
  data,
  isDarkMode,
  language,
  choseLanguage,
  handleCloseWindow,
}: IOption) => {
  function handleClickOutside(event: any) {
    if (event.target.closest("button")) return;
    handleCloseWindow();
  }
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  if (language === LANGUAGES.PT) {
    return (
      <LanguageOption
        $darkMode={isDarkMode}
        onClick={() => choseLanguage(LANGUAGES.EN)}
      >
        <ImgContainer $darkMode={isDarkMode}>
          <FlagImg
            src={data.english.image}
            alt={data.english.label}
            $darkMode={isDarkMode}
          />
        </ImgContainer>
        <Text text={data.english.label} size={TEXT_SIZE.S} />
      </LanguageOption>
    );
  }

  return (
    <LanguageOption
      $darkMode={isDarkMode}
      onClick={() => choseLanguage(LANGUAGES.PT)}
    >
      <ImgContainer $darkMode={isDarkMode}>
        <FlagImg
          src={data.portuguese.image}
          alt={data.portuguese.label}
          $darkMode={isDarkMode}
        />
      </ImgContainer>
      <Text text={data.portuguese.label} size={TEXT_SIZE.S} />
    </LanguageOption>
  );
};

interface ILanguageButton {
  language: TLanguage;
  isDarkMode: boolean;
  handleOpen: () => void;
  t: any;
}

const LanguageButton = ({
  language,
  isDarkMode,
  handleOpen,
  t,
}: ILanguageButton) => {
  return (
    <FlagButton onClick={handleOpen} $darkMode={isDarkMode}>
      <FlagImg
        src={language === LANGUAGES.PT ? PT_FLAG : EN_FLAG}
        alt={
          language === LANGUAGES.PT
            ? t("languagePortuguese")
            : t("languageEnglish")
        }
        $darkMode={isDarkMode}
      />
    </FlagButton>
  );
};

const LanguageSwitch = () => {
  const { isDarkMode } = useThemeStore((state) => state);
  const { updateLanguage, language } = useI18nStore((state) => state);
  const { t } = useTranslation("default");
  const [isOpen, setIsOpen] = useState(false);

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

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseWindow = () => {
    setIsOpen(false);
  };

  const choseLanguage = (value: TLanguage) => {
    updateLanguage(value);
    handleCloseWindow();
  };

  return (
    <StyledSwitch $darkMode={isDarkMode}>
      <LanguageButton
        language={language}
        isDarkMode={isDarkMode}
        handleOpen={handleOpen}
        t={t}
      />
      {isOpen && (
        <SelectWindow $darkMode={isDarkMode} tabIndex={0}>
          <Option
            data={translates}
            language={language}
            choseLanguage={choseLanguage}
            isDarkMode={isDarkMode}
            handleCloseWindow={handleCloseWindow}
          />
        </SelectWindow>
      )}
    </StyledSwitch>
  );
};

export default LanguageSwitch;
