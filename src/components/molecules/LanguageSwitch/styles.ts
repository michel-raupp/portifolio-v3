import styled from "styled-components";
import { DARK_THEME, LIGHT_THEME } from "@/constants";

interface IProps {
  $darkMode: boolean;
}

export const StyledSwitch = styled.div<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;
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
  transition: border 0.3s;
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

export const SelectWindow = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 48px;
  right: 0;
  z-index: 10;
  width: 100px;
  background-color: ${({ $darkMode }) =>
    $darkMode ? DARK_THEME.gray : LIGHT_THEME.background};
  border: 1px solid
    ${({ $darkMode }) => ($darkMode ? DARK_THEME.lightGray : LIGHT_THEME.gray)};
`;
