import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IconX } from "@tabler/icons-react";

import { useThemeStore } from "@/stores";
import { DARK_THEME, LIGHT_THEME, THEME_COLORS } from "@/constants";

import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_WIDTH,
} from "@/components/atoms/Button/types";
import { TEXT_HIERARCHIES, TEXT_SIZE } from "@/components/atoms/Text/types";
import { Button, Text } from "@/components/atoms";

import { IProject } from "../data";
import {
  Date,
  Image,
  Item,
  Tag,
  Tags,
  Modal,
  Actions,
  Header,
  Col,
} from "./style";

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
        />
        <Button
          title={t("viewDemo")}
          onClick={handleModal}
          size={BUTTON_SIZES.NORMAL}
          width={BUTTON_WIDTH.FULL}
        />
      </Actions>

      {isModalOpen && (
        <Modal tabIndex={0} $darkMode={isDarkMode}>
          <Header>
            <Text text={data.name} color={THEME_COLORS.text} />
            <Button
              onClick={handleModal}
              iconLeft={
                <IconX
                  size={24}
                  color={isDarkMode ? DARK_THEME.text : LIGHT_THEME.background}
                />
              }
              color={BUTTON_COLORS.PRIMARY}
              size={BUTTON_SIZES.SMALL}
            />
          </Header>

          <Text text={data.description} color={THEME_COLORS.text} />

          <Col>
            <Text
              text={data.name}
              color={THEME_COLORS.text}
              size={TEXT_SIZE.LG}
              bold
            />
            <Tags aria-label={t("tagsSection")}>
              {data.tags.map((tag) => (
                <Tag key={tag} $darkMode={isDarkMode}>
                  {tag}
                </Tag>
              ))}
            </Tags>
          </Col>

          <Date>
            <Text text={t("projectDate")} color={THEME_COLORS.text} />
            <Text text={data.date} color={THEME_COLORS.text} />
          </Date>

          <Actions>
            {data.github && (
              <Button
                title={t("viewCode")}
                onClick={handleModal}
                size={BUTTON_SIZES.NORMAL}
                width={BUTTON_WIDTH.FULL}
              />
            )}
            <Button
              title={t("viewDemo")}
              onClick={handleModal}
              size={BUTTON_SIZES.NORMAL}
              width={BUTTON_WIDTH.FULL}
            />
          </Actions>
        </Modal>
      )}
    </Item>
  );
};

export default ProjectItem;
