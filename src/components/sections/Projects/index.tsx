import { useTranslation } from "react-i18next";

import { Section } from "@/components/atoms";

import { getProjectsData } from "./data";
import { ProjectItem } from "./components";

const Projects = () => {
  const { t } = useTranslation("projects");
  const projects = getProjectsData();

  return (
    <Section
      title={t("projectsTitle")}
      description={t("projectsDescription")}
      isHorizontalList
      id="projects"
    >
      {projects.map((project) => (
        <ProjectItem key={project.name} data={project} />
      ))}
    </Section>
  );
};

export default Projects;
