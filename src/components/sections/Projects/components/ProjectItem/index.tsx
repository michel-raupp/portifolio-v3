import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { useThemeStore } from "@/stores";
import { THEME_COLORS } from "@/constants";
import { updateQuery } from "@/helpers";

import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_WIDTH,
} from "@/components/atoms/Button/types";
import { Button, Skeleton, Text } from "@/components/atoms";

import { IProject } from "../../data";
import { Modal } from "..";
import { Image, Item, Actions } from "./style";

interface IProjectItem {
  data: IProject;
}

const PROJECT_PARAM = "project";
const SECTION_ID = "#projects";

const ProjectItem = ({ data }: IProjectItem) => {
  const { t } = useTranslation("projects");
  const { isDarkMode } = useThemeStore((state) => state);

  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

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
      updateQuery(PROJECT_PARAM, data.id);
      updateQuery("section", SECTION_ID);
    } else {
      updateQuery(PROJECT_PARAM, null);
      updateQuery("section", null);
    }
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Item key={data.name} $darkMode={isDarkMode}>
      {loading ? (
        <Skeleton height="288px" width="288px" />
      ) : (
        <Image
          src={data.image}
          alt={data.alt}
          $darkMode={isDarkMode}
          height="288px"
          width="288px"
        />
      )}
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

      {isModalOpen && <Modal data={data} handleModal={handleModal} />}
    </Item>
  );
};

export default ProjectItem;
