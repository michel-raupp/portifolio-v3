import { useTranslation } from "react-i18next";

import { useThemeStore } from "@/stores";
import { THEME_COLORS } from "@/constants";

import { TEXT_HIERARCHIES, TEXT_SIZE } from "@/components/atoms/Text/types";
import { Text } from "@/components/atoms";

import { IExperience } from "../data";
import {
  Date,
  Image,
  Item,
  ItemHeader,
  ItemTitle,
  Resume,
  Tag,
  Tags,
} from "./style";

interface IExperienceItem {
  experience: IExperience;
}

const ExperienceItem = ({ experience }: IExperienceItem) => {
  const { t } = useTranslation("experiences");
  const { isDarkMode } = useThemeStore((state) => state);

  return (
    <Item key={experience.company} $darkMode={isDarkMode}>
      <ItemHeader>
        <Image
          src={experience.icon}
          alt={t("companyLogo", { company: experience.company })}
          $darkMode={isDarkMode}
        />
        <ItemTitle>
          <Text
            text={experience.company}
            color={THEME_COLORS.text}
            hierarchy={TEXT_HIERARCHIES.HEADING_3}
          />
          <Date
            aria-label={t("experienceDate", {
              startDate: experience.startDate,
              endDate: experience.endDate,
            })}
          >
            <Text
              text={experience.startDate}
              hierarchy={TEXT_HIERARCHIES.LABEL}
              color={THEME_COLORS.text}
            />
            <Text
              text="~"
              hierarchy={TEXT_HIERARCHIES.LABEL}
              color={THEME_COLORS.text}
              aria-hidden="true"
            />
            <Text
              text={experience.endDate}
              hierarchy={TEXT_HIERARCHIES.LABEL}
              color={THEME_COLORS.text}
            />
          </Date>
        </ItemTitle>
      </ItemHeader>
      <Resume>
        <Text
          text={experience.position}
          color={THEME_COLORS.text}
          size={TEXT_SIZE.XL}
          bold
        />
        <Text text={experience.resume} color={THEME_COLORS.text} />
      </Resume>
      <Tags aria-label={t("tagsSection")}>
        {experience.tags.map((tag) => (
          <Tag key={tag} $darkMode={isDarkMode}>
            {tag}
          </Tag>
        ))}
      </Tags>
    </Item>
  );
};

export default ExperienceItem;
