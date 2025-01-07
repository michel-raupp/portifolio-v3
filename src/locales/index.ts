import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// EN
import ENCommons from "./en/commons.json";

// PT
import PTCommons from "./pt/commons.json";

const ENDefault = {
  ...ENCommons,
};

const PTDefault = {
  ...PTCommons,
};

const resources = {
  "en-US": {
    commons: { ...ENCommons, ...ENDefault },
    default: { ...ENDefault },
  },
  "pt-BR": {
    commons: { ...PTCommons, ...PTDefault },
    default: { ...PTDefault },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v4",
    debug: false,
    resources,
    lng: localStorage.getItem("i18nextLng") || navigator.language,
    fallbackLng: localStorage.getItem("i18nextLng") || "pt-BR",
    keySeparator: false,
    nsSeparator: false,
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
