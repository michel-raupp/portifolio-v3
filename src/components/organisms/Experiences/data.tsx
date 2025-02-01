import { useTranslation } from "react-i18next";

import { useI18nStore } from "@/stores";
import companyImage1 from "@/assets/images/company-1.jpg";
import companyImage2 from "@/assets/images/company-2.jpg";
import companyImage3 from "@/assets/images/company-3.jpg";

interface IDateOptions {
  year: "numeric";
  month: "short";
}

export const getExperiencesData = () => {
  const { t } = useTranslation("experiences");
  const { language } = useI18nStore((state) => state);

  const convertToDate = (date: Date) => {
    const dateOptions = {
      year: "numeric",
      month: "short",
    } as IDateOptions;

    return date.toLocaleDateString(language, dateOptions);
  };

  return [
    {
      company: "Midway S.A.",
      icon: companyImage1,
      position: t("experiencePosition1"),
      startDate: convertToDate(new Date("2024-10")),
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
      startDate: convertToDate(new Date("2024-01")),
      endDate: convertToDate(new Date("2024-12")),
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
      startDate: convertToDate(new Date("2024-05")),
      endDate: convertToDate(new Date("2023-04")),
      resume: t("experienceResume3"),
      tags: ["React.js", "Javascript", "Tailwind", "HTML/CSS", "UX/UI"],
    },
  ];
};
