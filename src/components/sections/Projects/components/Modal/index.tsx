import { useTranslation } from "react-i18next";
import { IconArrowUpRight, IconBrandGithub, IconX } from "@tabler/icons-react";

import { useThemeStore } from "@/stores";
import { DARK_THEME, LIGHT_THEME, THEME_COLORS } from "@/constants";
import { getColor } from "@/helpers";

import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_WIDTH,
} from "@/components/atoms/Button/types";
import { TEXT_SIZE } from "@/components/atoms/Text/types";
import { Button, Text } from "@/components/atoms";

import { IProject } from "../../data";
import {
  Header,
  ModalContainer,
  StyledModal,
  Actions,
  Background,
  Col,
  Line,
  Tag,
  Tags,
  Date,
  IconContainer,
} from "./style";

interface IModal {
  data: IProject;
  handleModal: VoidFunction;
}

const Modal = ({ data, handleModal }: IModal) => {
  const { t } = useTranslation("projects");
  const { isDarkMode } = useThemeStore((state) => state);

  return (
    <ModalContainer>
      <StyledModal tabIndex={0} $darkMode={isDarkMode} aria-modal>
        <Header>
          <Text
            text={data.name}
            size={TEXT_SIZE.LG}
            color={THEME_COLORS.text}
            bold
          />
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
            accessibilityLabel={t("closeViewDetails")}
          />
        </Header>
        <Line $darkMode={isDarkMode} />

        <Text text={data.description} color={THEME_COLORS.text} />
        <Line $darkMode={isDarkMode} />
        <Col>
          <Text
            text={t("technologies")}
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
        <Line $darkMode={isDarkMode} />
        <Col>
          <Text
            text={t("learnedLessons")}
            color={THEME_COLORS.text}
            size={TEXT_SIZE.LG}
            bold
          />
          <Text text={data.lessons} color={THEME_COLORS.text} />
        </Col>
        <Line $darkMode={isDarkMode} />
        <Date>
          <Text text={t("projectDate")} color={THEME_COLORS.text} />
          <Text text={data.date} color={THEME_COLORS.text} />
        </Date>
        <Actions>
          {data.github && (
            <Button
              title="Github"
              onClick={handleModal}
              size={BUTTON_SIZES.NORMAL}
              width={BUTTON_WIDTH.FULL}
              accessibilityLabel={t("viewCodeLabel")}
              isLink
              url={data.github}
              color={BUTTON_COLORS.SECONDARY}
              iconLeft={
                <IconContainer>
                  <IconBrandGithub
                    size={24}
                    color={getColor(THEME_COLORS.text, isDarkMode)}
                  />
                </IconContainer>
              }
            />
          )}
          <Button
            title={t("visitProject")}
            onClick={handleModal}
            size={BUTTON_SIZES.NORMAL}
            width={BUTTON_WIDTH.FULL}
            accessibilityLabel={t("viewDemoLabel")}
            isLink
            url={data.demo}
            iconRight={
              <IconContainer>
                <IconArrowUpRight
                  size={24}
                  color={isDarkMode ? DARK_THEME.text : LIGHT_THEME.background}
                />
              </IconContainer>
            }
          />
        </Actions>
      </StyledModal>
      <Background
        onClick={handleModal}
        aria-label={t("closeViewDetails")}
        $darkMode={isDarkMode}
      />
    </ModalContainer>
  );
};

export default Modal;
