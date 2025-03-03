import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { useThemeStore } from "@/stores";
import { THEME_COLORS } from "@/constants";

import { TEXT_HIERARCHIES, TEXT_SIZE } from "@/components/atoms/Text/types";
import { Skeleton, Text } from "@/components/atoms";

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
  data: IExperience;
}

const ExperienceItem = ({ data }: IExperienceItem) => {
  const { t } = useTranslation("experiences");
  const { isDarkMode } = useThemeStore((state) => state);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Item key={data.company} $darkMode={isDarkMode}>
      <ItemHeader>
        {loading ? (
          <Skeleton width="64px" height="64px" isRounded />
        ) : (
          <Image
            src={data.icon}
            alt={t("companyLogo", { company: data.company })}
            $darkMode={isDarkMode}
            height="64px"
            width="64p"
          />
        )}
        <ItemTitle>
          <Text
            text={data.company}
            color={THEME_COLORS.text}
            hierarchy={TEXT_HIERARCHIES.HEADING_3}
          />
          <Date
            aria-label={t("experienceDate", {
              startDate: data.startDate,
              endDate: data.endDate,
            })}
          >
            <Text
              text={data.startDate}
              hierarchy={TEXT_HIERARCHIES.LABEL}
              color={THEME_COLORS.lightText}
            />
            <Text
              text="~"
              hierarchy={TEXT_HIERARCHIES.LABEL}
              color={THEME_COLORS.lightText}
              aria-hidden="true"
            />
            <Text
              text={data.endDate}
              hierarchy={TEXT_HIERARCHIES.LABEL}
              color={THEME_COLORS.lightText}
            />
          </Date>
        </ItemTitle>
      </ItemHeader>
      <Resume>
        <Text
          text={data.position}
          color={THEME_COLORS.lightText}
          size={TEXT_SIZE.XL}
          bold
        />
        <Text text={data.resume} color={THEME_COLORS.lightText} />
      </Resume>
      <Tags aria-label={t("tagsSection")}>
        {data.tags.map((tag) => (
          <Tag key={tag} $darkMode={isDarkMode}>
            {tag}
          </Tag>
        ))}
      </Tags>
    </Item>
  );
};

export default ExperienceItem;
