import React, { useMemo } from "react";
import { useI18nStore } from "@/stores/i18n";
import { I18nContext } from "./LanguageContext";

interface I18nProviderProps {
  children: React.ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const language = useI18nStore((state) => state.language);
  const updateLanguage = useI18nStore((state) => state.updateLanguage);

  const value = useMemo(
    () => ({ language, updateLanguage }),
    [language, updateLanguage]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};
