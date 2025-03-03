import { useEffect, useState } from "react";

import { LANGUAGES, TLanguage } from "@/stores";

import { TEXT_SIZE } from "@/components/atoms/Text/types";
import { Skeleton, Text } from "@/components/atoms";
import { FlagImg, ImgContainer, LanguageOption } from "./styles";

interface ILang {
  label: string;
  value: TLanguage;
  image: string;
}

interface IData {
  portuguese: ILang;
  english: ILang;
}

interface IOption {
  data: IData;
  language: TLanguage;
  isDarkMode: boolean;
  choseLanguage: (value: TLanguage) => void;
  handleCloseWindow: () => void;
}

const Option = ({
  data,
  isDarkMode,
  language,
  choseLanguage,
  handleCloseWindow,
}: IOption) => {
  const [loading, setLoading] = useState(true);

  const targetLanguage =
    language === LANGUAGES.PT ? data.english : data.portuguese;

  function handleClickOutside(event: MouseEvent) {
    if ((event.target as HTMLElement).closest("button")) return;
    handleCloseWindow();
  }

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <LanguageOption
      $darkMode={isDarkMode}
      onClick={() => choseLanguage(targetLanguage.value)}
      tabIndex={0}
    >
      <ImgContainer $darkMode={isDarkMode}>
        {loading ? (
          <Skeleton isRounded />
        ) : (
          <FlagImg
            src={targetLanguage.image}
            alt={targetLanguage.label}
            $darkMode={isDarkMode}
            height={24}
            width={24}
          />
        )}
      </ImgContainer>
      <Text text={targetLanguage.label} size={TEXT_SIZE.S} />
    </LanguageOption>
  );
};

export default Option;
