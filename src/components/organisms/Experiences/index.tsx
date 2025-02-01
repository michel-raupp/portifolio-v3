import { useTranslation } from "react-i18next";

import { Section } from "@/components/atoms";

import { getExperiencesData } from "./data";
import ExperienceItem from "./components";

const Experiences = () => {
  const { t } = useTranslation("experiences");
  const experiences = getExperiencesData();

  return (
    <Section
      title={t("experienceTitle")}
      description={t("experienceDescription")}
    >
      {experiences.map((experience) => (
        <ExperienceItem key={experience.company} experience={experience} />
      ))}
    </Section>
  );
};

export default Experiences;
