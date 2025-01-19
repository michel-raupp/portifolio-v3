import { useState } from "react";
import { useTranslation } from "react-i18next";

import { useThemeStore } from "@/stores";
import { THEME_COLORS } from "@/constants";

import { DropdownMenu } from "@/components/organisms";
import { LanguageSwitch, ThemeSwitch } from "@/components/molecules";
import { Logo, Text } from "@/components/atoms";
import { HeaderWrapper, MenuItem, MenuWrapper, StyledHeader } from "./styles";

const MENU_ITEMS = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

const RenderMenuItems = () => {
  const { isDarkMode } = useThemeStore((state) => state);
  const { t } = useTranslation("menu");

  return MENU_ITEMS.map((item) => (
    <MenuItem $darkMode={isDarkMode} href={item.href}>
      <Text text={t(item.label)} color={THEME_COLORS.text} />
    </MenuItem>
  ));
};

const Header = () => {
  const { isDarkMode } = useThemeStore((state) => state);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <StyledHeader $darkMode={isDarkMode}>
      <HeaderWrapper>
        <Logo />
        <MenuWrapper>
          <RenderMenuItems />
        </MenuWrapper>
        <MenuWrapper>
          <ThemeSwitch />
          <LanguageSwitch />
        </MenuWrapper>
        <button onClick={handleOpenMenu}>oieee</button>
        <DropdownMenu
          isOpen={isMenuOpen}
          data={MENU_ITEMS}
          handleCloseMenu={handleCloseMenu}
        />
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
