import { useTranslation } from "react-i18next";

import { useThemeStore } from "./stores/theme";
import { LANGUAGES, TLanguage, useI18nStore } from "./stores/i18n";
import { THEME_TYPES } from "./providers";

const App = () => {
  const { toggleTheme, theme } = useThemeStore((state) => state);
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
      <button onClick={toggleTheme}>
        {t("hello")}: {theme === THEME_TYPES.LIGHT ? "Escuro" : "Claro"}
      </button>

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
