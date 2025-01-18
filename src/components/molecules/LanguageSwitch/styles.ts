import styled from "styled-components";
import { DARK_THEME, LIGHT_THEME } from "@/constants";

interface IProps {
  $darkMode: boolean;
}

export const StyledSwitch = styled.div<IProps>`
  display: flex;
  align-items: center;
  position: relative;
`;

export const ImgContainer = styled.div<IProps>`
  overflow: hidden;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid
    ${({ $darkMode }) => ($darkMode ? DARK_THEME.lightGray : LIGHT_THEME.gray)};
`;

export const FlagButton = styled.button<IProps>`
  overflow: hidden;
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid
    ${({ $darkMode }) => ($darkMode ? DARK_THEME.lightGray : LIGHT_THEME.gray)};
  transition: border-width 0.3s;

  &:hover {
    border: 3px solid
      ${({ $darkMode }) =>
        $darkMode ? DARK_THEME.lightGray : LIGHT_THEME.gray};
  }
`;

export const FlagImg = styled.img<IProps>`
  width: 100%;
  transition: 0.3s;
`;

export const LanguageOption = styled.button<IProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  background-color: transparent;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ $darkMode }) =>
      $darkMode ? DARK_THEME.lightGray : LIGHT_THEME.lightGray};
  }
`;

export const SelectWindow = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 32px;
  right: 0;
  z-index: 10;
  padding: 4px;
  border-radius: 8px;
  background-color: ${({ $darkMode }) =>
    $darkMode ? DARK_THEME.gray : LIGHT_THEME.background};
  border: 1px solid
    ${({ $darkMode }) => ($darkMode ? DARK_THEME.lightGray : LIGHT_THEME.gray)};
`;
