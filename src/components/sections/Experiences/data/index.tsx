import { useTranslation } from "react-i18next";

import { ConvertToDate } from "@/helpers";

import companyImage1 from "@/assets/images/company-1.webp";
import companyImage2 from "@/assets/images/company-2.webp";
import companyImage3 from "@/assets/images/company-3.webp";

export interface IExperience {
  company: string;
  icon: string;
  position: string;
  startDate: string;
  endDate: string;
  resume: string;
  tags: string[];
}

export const useGetExperiencesData = () => {
  const { t } = useTranslation("experiences");

  return [
    {
      company: "Midway S.A.",
      icon: companyImage1,
      position: t("experiencePosition1"),
      startDate: ConvertToDate(new Date("2024-10")),
      endDate: t("present"),
      resume: t("experienceResume1"),
      tags: [
        "React Native",
        "TypeScript",
        "Styled Components",
        "Redux",
        "Jest",
      ],
    },
    {
      company: "U.legal",
      icon: companyImage2,
      position: t("experiencePosition2"),
      startDate: ConvertToDate(new Date("2024-01")),
      endDate: ConvertToDate(new Date("2024-12")),
      resume: t("experienceResume2"),
      tags: [
        "React Native",
        "TypeScript",
        "Styled Components",
        "Redux",
        t("internacionalization"),
      ],
    },
    {
      company: "Digital Growth",
      icon: companyImage3,
      position: t("experiencePosition3"),
      startDate: ConvertToDate(new Date("2023-04")),
      endDate: ConvertToDate(new Date("2024-05")),
      resume: t("experienceResume3"),
      tags: ["React.js", "Javascript", "Tailwind", "HTML/CSS", "UX/UI"],
    },
  ] as IExperience[];
};
