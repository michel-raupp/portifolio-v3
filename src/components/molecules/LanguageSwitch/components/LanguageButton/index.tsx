import { LANGUAGES, TLanguage } from "@/stores";

import { FlagButton, FlagImg } from "./styles";

import PT_FLAG from "@/assets/flags/pt-BR.png";
import EN_FLAG from "@/assets/flags/en-US.png";

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
  const currentLanguage = language === LANGUAGES.PT ? "portuguese" : "english";
  const flagSrc = language === LANGUAGES.PT ? PT_FLAG : EN_FLAG;

  return (
    <FlagButton onClick={handleOpen} $darkMode={isDarkMode}>
      <FlagImg src={flagSrc} alt={t(currentLanguage)} $darkMode={isDarkMode} />
    </FlagButton>
  );
};

export default LanguageButton;
