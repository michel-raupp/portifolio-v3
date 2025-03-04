import { useTranslation } from "react-i18next";

import { Section } from "@/components/atoms";

import { useGetExperiencesData } from "./data";
import ExperienceItem from "./components";

const Experiences = () => {
  const { t } = useTranslation("experiences");
  const experiences = useGetExperiencesData();

  return (
    <Section
      title={t("experienceTitle")}
      description={t("experienceDescription")}
      id="experience"
    >
      {experiences.map((experience) => (
        <ExperienceItem key={experience.company} data={experience} />
      ))}
    </Section>
  );
};

export default Experiences;
