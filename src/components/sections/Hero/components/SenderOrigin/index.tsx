import { Text } from "@/components/atoms";
import { Dot, Row, Wrapper } from "./style";
import { TEXT_SIZE } from "@/components/atoms/Text/types";
import { THEME_COLORS } from "@/constants";

interface ISendOrigin {
  isOnlyMobile?: boolean;
  isDarkMode: boolean;
  t: (text: string) => string;
}

const SenderOrigin = ({ isOnlyMobile, isDarkMode, t }: ISendOrigin) => {
  if (isOnlyMobile) {
    return (
      <Wrapper $isOnlyMobile>
        <Row>
          <Text
            text="Michel Raupp"
            color={THEME_COLORS.text}
            size={TEXT_SIZE.XXL}
            bold
          />
          <Dot $darkMode={isDarkMode} />
        </Row>
        <Text
          text={t("personalInfo")}
          color={THEME_COLORS.lightText}
          size={TEXT_SIZE.S}
        />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Text
        text="Michel Raupp"
        color={THEME_COLORS.lightText}
        size={TEXT_SIZE.S}
        bold
      />
      <div aria-hidden>
        <Text text="-" color={THEME_COLORS.lightText} size={TEXT_SIZE.S} bold />
      </div>
      <Text
        text={t("personalInfo")}
        color={THEME_COLORS.lightText}
        size={TEXT_SIZE.S}
      />
    </Wrapper>
  );
};

export default SenderOrigin;
