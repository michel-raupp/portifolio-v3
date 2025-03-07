import { Suspense } from "react";
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

  return (
    <Item key={data.company} $darkMode={isDarkMode}>
      <ItemHeader>
        <Suspense fallback={<Skeleton height="64px" />}>
          <Image
            src={data.icon}
            alt={t("companyLogo", { company: data.company })}
            loading="lazy"
            $darkMode={isDarkMode}
            height="64px"
            width="64p"
          />
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
        </Suspense>
      </ItemHeader>
      <Suspense fallback={<Skeleton height="200px" />}>
        <Resume>
          <Text
            text={data.position}
            color={THEME_COLORS.lightText}
            size={TEXT_SIZE.XL}
            bold
          />
          <Text text={data.resume} color={THEME_COLORS.lightText} />
        </Resume>
      </Suspense>
      <Suspense fallback={<Skeleton height="48px" />}>
        <Tags aria-label={t("tagsSection")}>
          {data.tags.map((tag) => (
            <Tag key={tag} $darkMode={isDarkMode}>
              {tag}
            </Tag>
          ))}
        </Tags>
      </Suspense>
    </Item>
  );
};

export default ExperienceItem;
