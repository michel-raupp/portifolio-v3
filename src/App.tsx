import { useTranslation } from "react-i18next";

import { useThemeStore, LANGUAGES, useI18nStore, TLanguage } from "@/stores";
import { Button } from "@/components/atoms";

const App = () => {
  const { toggleTheme } = useThemeStore((state) => state);
  const { updateLanguage } = useI18nStore((state) => state);
  const { t } = useTranslation("default");

  const translates = [
    {
      label: t("languagePortuguese"),
      value: LANGUAGES.PT,
    },
    {
      label: t("languageEnglish"),
      value: LANGUAGES.EN,
    },
  ];

  const choseLanguage = (value: TLanguage) => {
    updateLanguage(value);
  };

  return (
    <div>
      <Button title={t("hello")} onClick={toggleTheme} color="SECONDARY" />

      {translates.map((translate) => (
        <button
          key={translate.value}
          onClick={() => choseLanguage(translate.value)}
        >
          {translate.label}
        </button>
      ))}
    </div>
  );
};

export default App;
