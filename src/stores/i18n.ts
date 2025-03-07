import { create } from "zustand";
import i18n from "i18next";

export const LANGUAGES = {
  EN: "en-US",
  PT: "pt-BR",
} as const;

export type TLanguage = (typeof LANGUAGES)[keyof typeof LANGUAGES];

interface I18nState {
  language: TLanguage;
  updateLanguage: (value: TLanguage) => void;
  updateHtmlLang: () => void;
}

const getInitialLanguage = (): TLanguage => {
  const storedLanguage = localStorage.getItem("i18nextLng");
  if (storedLanguage === LANGUAGES.EN || storedLanguage === LANGUAGES.PT) {
    return storedLanguage as TLanguage;
  }
  return LANGUAGES.PT;
};

const updateHtmlLang = () => {
  const storedLanguage = getInitialLanguage();
  document.documentElement.lang = storedLanguage.substring(0, 2);
};

export const useI18nStore = create<I18nState>((set) => ({
  language: getInitialLanguage(),
  updateLanguage: (value: TLanguage) => {
    i18n.changeLanguage(value);
    set({ language: value });
  },
  updateHtmlLang,
}));
