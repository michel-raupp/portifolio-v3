import styled from "styled-components";
import { DARK_THEME, LIGHT_THEME } from "@/constants";

interface IProps {
  $darkMode: boolean;
}

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

export const FlagImg = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.3s;
`;
