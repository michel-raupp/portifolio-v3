import { useTranslation } from "react-i18next";

import { useThemeStore } from "@/stores";
import { THEME_COLORS } from "@/constants";

import { TEXT_SIZE } from "@/components/atoms/Text/types";
import { Socials, Text } from "@/components/atoms";
import {
  Actions,
  Background,
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
}

const RenderMenuItems = ({ data, handleCloseMenu }: IRenderMenuItems) => {
  const { isDarkMode } = useThemeStore((state) => state);
  const { t } = useTranslation("menu");

  return data.map((item) => (
    <MenuItem $darkMode={isDarkMode} href={item.href} onClick={handleCloseMenu}>
      <Text
        text={t(item.label)}
        color={THEME_COLORS.text}
        size={TEXT_SIZE.LG}
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

  return (
    <>
      <Wrapper $darkMode={isDarkMode} isOpen={isOpen}>
        <Content>
          <MenuWrapper>
            <RenderMenuItems data={data} handleCloseMenu={handleCloseMenu} />
          </MenuWrapper>
          <Actions>
            <Socials showEmailAddress />
          </Actions>
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
