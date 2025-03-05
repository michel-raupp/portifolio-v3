import { useState, useEffect, Suspense, lazy } from "react";
import { useTranslation } from "react-i18next";

import { UpdateQuery } from "@/helpers";
import { Skeleton, Section } from "@/components/atoms";

import { IProject, useGetProjectsData } from "./data";
import { ProjectItem } from "./components";
import { ModalSkeleton } from "./style";

const Modal = lazy(() => import("./components/Modal"));

const PROJECT_PARAM = "project";
const SECTION_ID = "#projects";

const Projects = () => {
  const { t } = useTranslation("projects");
  const projects = useGetProjectsData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

  const handleModal = (project: IProject | null) => {
    if (!isModalOpen && project) {
      UpdateQuery(PROJECT_PARAM, project.id);
      UpdateQuery("section", SECTION_ID);
      setSelectedProject(project);
      setIsModalOpen(true);
    } else {
      UpdateQuery(PROJECT_PARAM, null);
      UpdateQuery("section", null);
      setSelectedProject(null);
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get(PROJECT_PARAM);
    if (projectId) {
      const foundProject = projects.find((p) => p.id === projectId);
      if (foundProject) {
        setSelectedProject(foundProject);
        setIsModalOpen(true);
        document
          .querySelector(SECTION_ID)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
      <Section
        title={t("projectsTitle")}
        description={t("projectsDescription")}
        isHorizontalList
        id="projects"
      >
        {projects.map((project) => (
          <ProjectItem
            key={project.name}
            data={project}
            handleModal={() => handleModal(project)}
          />
        ))}
      </Section>

      {isModalOpen && selectedProject && (
        <Suspense
          fallback={
            <ModalSkeleton>
              <Skeleton height="100%" radius="0" />
            </ModalSkeleton>
          }
        >
          <Modal data={selectedProject} handleModal={() => handleModal(null)} />
        </Suspense>
      )}
    </>
  );
};

export default Projects;
