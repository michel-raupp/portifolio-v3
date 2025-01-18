import { useState } from "react";
import { useTranslation } from "react-i18next";

import { LANGUAGES, TLanguage, useI18nStore, useThemeStore } from "@/stores";

import { LanguageButton, Option } from "./components";
import { SelectWindow, StyledSwitch } from "./styles";

import PT_FLAG from "@/assets/flags/pt-BR.png";
import EN_FLAG from "@/assets/flags/en-US.png";

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
