import { useTranslation } from "react-i18next";

import { THEME_COLORS } from "@/constants";

import { TEXT_HIERARCHIES } from "@/components/atoms/Text/types";
import { Text } from "@/components/atoms";

import { getExperiencesData } from "./data";
import ExperienceItem from "./components";
import { Col, List, Wrapper } from "./style";

const Experiences = () => {
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
          <ExperienceItem key={experience.company} experience={experience} />
        ))}
      </List>
    </Wrapper>
  );
};

export default Experiences;
