import { useTranslation } from "react-i18next";

import { convertToDate } from "@/helpers";

import projectImage1 from "@/assets/images/project-1.png";
import projectImage2 from "@/assets/images/project-2.png";
import projectImage3 from "@/assets/images/project-3.png";

export interface IProject {
  name: string;
  image: string;
  alt: string;
  description: string;
  date: string;
  github?: string;
  demo: string;
  tags: string[];
  lessons: string;
}

export const getProjectsData = () => {
  const { t } = useTranslation("projects");

  return [
    {
      name: t("projectName1"),
      image: projectImage1,
      alt: t("projectImageAlt1"),
      description: t("projectDescription1"),
      date: convertToDate(new Date("2024-11")),
      tags: ["React.js", "Next.js", "TypeScript", "Tailwind", "Context API"],
      github: "https://github.com/michel-raupp/project-2d",
      demo: "https://project-2d.vercel.app/",
      lessons: t("projectLessons1"),
    },
    {
      name: t("projectName2"),
      image: projectImage2,
      alt: t("projectImageAlt2"),
      description: t("projectDescription2"),
      date: convertToDate(new Date("2023-10")),
      tags: [
        "React.js",
        "Next.js",
        "Javascript",
        "Styled Components",
        "Firebase Auth",
        "localStorage",
        "Third-party API",
      ],
      demo: "https://valorant-project-alpha.vercel.app/",
      lessons: t("projectLessons2"),
    },
    {
      name: t("projectName3"),
      image: projectImage3,
      alt: t("projectImageAlt3"),
      description: t("projectDescription3"),
      date: convertToDate(new Date("2023-03")),
      tags: ["React", "Javascript", "Styled Components", "LocalStorage"],
      demo: "https://project-pizzaria.vercel.app/",
      lessons: t("projectLessons3"),
    },
  ] as IProject[];
};
