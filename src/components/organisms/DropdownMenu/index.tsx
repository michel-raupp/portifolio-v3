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
    <MenuItem $darkMode={isDarkMode} href={item.href} onClick={handleCloseMenu}>
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
      <Wrapper $darkMode={isDarkMode} isOpen={isOpen}>
        <Content>
          <CloseButton onClick={handleCloseMenu} $darkMode={isDarkMode}>
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
      />
    </>
  );
};

export default DropdownMenu;
