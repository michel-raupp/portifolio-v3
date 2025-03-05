import { createContext, useContext } from "react";
import { TLanguage } from "@/stores/i18n";

export interface I18nContextProps {
  language: TLanguage;
  updateLanguage: (value: TLanguage) => void;
}

export const I18nContext = createContext<I18nContextProps | undefined>(
  undefined
);

export const useI18nContext = (): I18nContextProps => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18nContext must be used within an I18nProvider");
  }
  return context;
};
