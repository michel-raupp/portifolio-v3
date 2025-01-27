import { useTranslation } from "react-i18next";
import { IconChevronRight, IconX } from "@tabler/icons-react";

import { useThemeStore } from "@/stores";
import { THEME_COLORS } from "@/constants";
import { getColor } from "@/helpers";

import { TEXT_SIZE } from "@/components/atoms/Text/types";
import { Socials, Text } from "@/components/atoms";
import {
  Background,
  CloseButton,
  Content,
  MenuItem,
  MenuWrapper,
  Wrapper,
} from "./styles";

interface IData {
  label: string;
  href: string;
}

interface IRenderMenuItems {
  data: IData[];
  handleCloseMenu: VoidFunction;
  t: (key: string) => string;
}

const RenderMenuItems = ({ data, handleCloseMenu, t }: IRenderMenuItems) => {
  const { isDarkMode } = useThemeStore((state) => state);

  return data.map((item) => (
    <MenuItem
      key={item.label}
      href={item.href}
      onClick={handleCloseMenu}
      $darkMode={isDarkMode}
    >
      <Text
        text={t(item.label)}
        color={THEME_COLORS.text}
        size={TEXT_SIZE.LG}
      />
      <IconChevronRight
        size={24}
        color={getColor(THEME_COLORS.text, isDarkMode)}
      />
    </MenuItem>
  ));
};

interface IDropdownMenu {
  isOpen: boolean;
  data: IData[];
  handleCloseMenu: VoidFunction;
}

const DropdownMenu = ({ isOpen, data, handleCloseMenu }: IDropdownMenu) => {
  const { isDarkMode } = useThemeStore((state) => state);
  const { t } = useTranslation("menu");

  return (
    <>
      <Wrapper
        $darkMode={isDarkMode}
        isOpen={isOpen}
        tabIndex={0}
        aria-hidden={!isOpen}
      >
        <Content>
          <CloseButton
            onClick={handleCloseMenu}
            $darkMode={isDarkMode}
            aria-label={t("closeMenu")}
          >
            <IconX size={24} color={getColor(THEME_COLORS.text, isDarkMode)} />
          </CloseButton>
          <MenuWrapper>
            <RenderMenuItems
              data={data}
              handleCloseMenu={handleCloseMenu}
              t={t}
            />
          </MenuWrapper>
          <Socials showText />
        </Content>
      </Wrapper>
      <Background
        $darkMode={isDarkMode}
        isOpen={isOpen}
        onClick={handleCloseMenu}
        aria-label={t("closeMenu")}
        aria-hidden={!isOpen}
      />
    </>
  );
};

export default DropdownMenu;
