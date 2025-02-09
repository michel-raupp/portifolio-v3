import { useState } from "react";
import { useTranslation } from "react-i18next";

import { useThemeStore } from "@/stores";
import { THEME_COLORS } from "@/constants";

import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_WIDTH,
} from "@/components/atoms/Button/types";
import { Button, Text } from "@/components/atoms";

import { IProject } from "../../data";
import { Modal } from "..";
import { Image, Item, Actions } from "./style";

interface IProjectItem {
  data: IProject;
}

const ProjectItem = ({ data }: IProjectItem) => {
  const { t } = useTranslation("projects");
  const { isDarkMode } = useThemeStore((state) => state);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Item key={data.name} $darkMode={isDarkMode}>
      <Image src={data.image} alt={data.alt} $darkMode={isDarkMode} />
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
