import styled from "styled-components";
import { DARK_THEME, LIGHT_THEME } from "@/constants";

interface IProps {
  $darkMode: boolean;
}

export const StyledHeader = styled.div<IProps>`
  position: absolute;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px;
  background-color: ${({ $darkMode }) =>
    $darkMode ? DARK_THEME.gray : LIGHT_THEME.background};
  border-bottom: 1px solid
    ${({ $darkMode }) => ($darkMode ? DARK_THEME.lightGray : LIGHT_THEME.gray)};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1024px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const MenuItem = styled.a<IProps>`
  border-radius: 8px;
  padding: 6px 12px;
  background-color: transparent;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ $darkMode }) =>
      $darkMode ? DARK_THEME.lightGray : LIGHT_THEME.lightGray};
  }
`;

export const MenuButton = styled.button<IProps>`
  padding: 8px;
  border: 1px solid
    ${({ $darkMode }) => ($darkMode ? DARK_THEME.lightGray : LIGHT_THEME.gray)};
  border-radius: 8px;
  transition: opacity 0.3s;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ $darkMode }) =>
      $darkMode ? DARK_THEME.lightGray : LIGHT_THEME.lightGray};
  }
`;
