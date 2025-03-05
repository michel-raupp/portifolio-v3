import { Suspense } from "react";
import { useTranslation } from "react-i18next";

import { useThemeStore } from "@/stores";
import { THEME_COLORS } from "@/constants";

import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_WIDTH,
} from "@/components/atoms/Button/types";
import { Button, Skeleton, Text } from "@/components/atoms";

import { IProject } from "../../data";
import { Image, Item, Actions } from "./style";

interface IProjectItem {
  data: IProject;
}

const ProjectItem = ({
  data,
  handleModal,
}: IProjectItem & { handleModal: () => void }) => {
  const { t } = useTranslation("projects");
  const { isDarkMode } = useThemeStore((state) => state);

  return (
    <Item key={data.name} $darkMode={isDarkMode}>
      <Suspense fallback={<Skeleton height="288px" />}>
        <Image
          src={data.image}
          alt={data.alt}
          $darkMode={isDarkMode}
          height="288px"
          width="288px"
          loading="lazy"
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
    </Item>
  );
};

export default ProjectItem;
