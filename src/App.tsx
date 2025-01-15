import { useTranslation } from "react-i18next";

import { useThemeStore, LANGUAGES, useI18nStore, TLanguage } from "@/stores";
import { Button } from "@/components/atoms";
import Chat from "./components/atoms/Chat";
import { TAIL_DIRECTIONS } from "./components/atoms/Chat/types";

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
      <div>
        {translates.map((translate) => (
          <Button
            key={translate.value}
            title={translate.label}
            onClick={() => choseLanguage(translate.value)}
            color="SECONDARY"
          />
        ))}
      </div>
      <Chat
        title="titulo"
        text="primeiro texto"
        tailDirection={TAIL_DIRECTIONS.RIGHT}
        hasHeading
      />
    </div>
  );
};

export default App;
