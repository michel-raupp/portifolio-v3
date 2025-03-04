import React, { createContext, useContext, useMemo } from "react";
import { TLanguage, useI18nStore } from "@/stores/i18n";

interface I18nProviderProps {
  children: React.ReactNode;
}

interface I18nContextProps {
  language: TLanguage;
  updateLanguage: (value: TLanguage) => void;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const language = useI18nStore((state) => state.language);
  const updateLanguage = useI18nStore((state) => state.updateLanguage);

  const value = useMemo(
    () => ({ language, updateLanguage }),
    [language, updateLanguage]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18nContext = (): I18nContextProps => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18nContext must be used within an I18nProvider");
  }
  return context;
};
