import { Suspense, lazy, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { useThemeStore } from "@/stores";
import { THEME_COLORS } from "@/constants";
import { UpdateQuery } from "@/helpers";

import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_WIDTH,
} from "@/components/atoms/Button/types";
import { Button, Skeleton, Text } from "@/components/atoms";

import { IProject } from "../../data";
const Modal = lazy(() => import("../Modal"));
import { Image, Item, Actions } from "./style";

interface IProjectItem {
  data: IProject;
}

const PROJECT_PARAM = "project";
const SECTION_ID = "#projects";

const ProjectItem = ({ data }: IProjectItem) => {
  const { t } = useTranslation("projects");
  const { isDarkMode } = useThemeStore((state) => state);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get(PROJECT_PARAM) === data.id) {
      setIsModalOpen(true);
      const section = document.querySelector(SECTION_ID);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [data.id]);

  const handleModal = () => {
    if (!isModalOpen) {
      UpdateQuery(PROJECT_PARAM, data.id);
      UpdateQuery("section", SECTION_ID);
    } else {
      UpdateQuery(PROJECT_PARAM, null);
      UpdateQuery("section", null);
    }
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Item key={data.name} $darkMode={isDarkMode}>
      <Suspense fallback={<Skeleton height="288px" />}>
        <Image
          src={data.image}
          alt={data.alt}
          $darkMode={isDarkMode}
          height="288px"
          width="288px"
        />
      </Suspense>
      <Text text={data.name} color={THEME_COLORS.text} />
      <Actions>
        <Button
          title={t("viewDetails")}
          onClick={handleModal}
          size={BUTTON_SIZES.NORMAL}
          width={BUTTON_WIDTH.FULL}
          color={BUTTON_COLORS.SECONDARY}
          accessibilityLabel={t("openViewDetails")}
        />
        <Button
          title={t("visitProject")}
          size={BUTTON_SIZES.NORMAL}
          width={BUTTON_WIDTH.FULL}
          isLink
          url={data.demo}
          accessibilityLabel={t("visitProjectLabel")}
        />
      </Actions>

      {isModalOpen && (
        <Suspense fallback={<Skeleton height="100%" />}>
          <Modal data={data} handleModal={handleModal} />
        </Suspense>
      )}
    </Item>
  );
};

export default ProjectItem;
