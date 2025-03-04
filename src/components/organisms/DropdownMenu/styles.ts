import styled from "styled-components";
import { DARK_THEME, LIGHT_THEME } from "@/constants";

interface IProps {
  $darkMode: boolean;
}

interface IWrapper {
  $darkMode: boolean;
  $isOpen: boolean;
}

export const Wrapper = styled.div<IWrapper>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 16px);
  max-width: 360px;
  height: 100lvh;
  padding-bottom: 16px 16px 100px 16px;
  background-color: ${({ $darkMode }) =>
    $darkMode ? DARK_THEME.gray : LIGHT_THEME.background};
  border-left: 1px solid
    ${({ $darkMode }) => ($darkMode ? DARK_THEME.lightGray : LIGHT_THEME.gray)};
  transition: transform 0.8s;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0%)" : "translateX(100%)"};

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  gap: 64px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;

export const MenuItem = styled.a<IProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding: 16px;
  background-color: transparent;
  transition: background-color 0.3s;
  width: 100%;

  &:hover {
    background-color: ${({ $darkMode }) =>
      $darkMode ? DARK_THEME.lightGray : LIGHT_THEME.lightGray};
  }

  @media (max-width: 768px) {
    border: 1px solid
      ${({ $darkMode }) =>
        $darkMode ? DARK_THEME.lightGray : LIGHT_THEME.lightGray};
  }
`;

export const Background = styled.button<IWrapper>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20;
  width: 100%;
  height: 100dvh;
  padding-bottom: 16px 16px 100px 16px;
  background-color: ${({ $darkMode }) =>
    $darkMode ? DARK_THEME.primary : LIGHT_THEME.primary};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  opacity: ${({ $isOpen }) => ($isOpen ? 0.3 : 0)};
  transition: opacity 0.3s;
`;

export const CloseButton = styled.button<IProps>`
  display: flex;
  padding: 8px;
  width: fit-content;
  margin-left: auto;
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
