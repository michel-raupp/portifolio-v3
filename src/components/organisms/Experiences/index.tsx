import { useTranslation } from "react-i18next";

import { THEME_COLORS } from "@/constants";
import { useThemeStore } from "@/stores";

import { TEXT_HIERARCHIES, TEXT_SIZE } from "@/components/atoms/Text/types";
import { Text } from "@/components/atoms";

import { getExperiencesData } from "./data";
import {
  Col,
  Date,
  Image,
  Item,
  ItemHeader,
  ItemTitle,
  List,
  Resume,
  Tag,
  Tags,
  Wrapper,
} from "./style";

const Experiences = () => {
  const { isDarkMode } = useThemeStore((state) => state);
  const { t } = useTranslation("experiences");

  const experiences = getExperiencesData();

  return (
    <Wrapper>
      <Col>
        <Text
          hierarchy={TEXT_HIERARCHIES.HEADING_2}
          text={t("experienceTitle")}
          color={THEME_COLORS.text}
        />
        <Text text={t("experienceDescription")} color={THEME_COLORS.text} />
      </Col>
      <List>
        {experiences.map((experience) => (
          <Item $darkMode={isDarkMode} key={experience.company}>
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
                <Tag $darkMode={isDarkMode}>{tag}</Tag>
              ))}
            </Tags>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default Experiences;
