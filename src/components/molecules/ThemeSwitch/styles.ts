import styled from "styled-components";
import { DARK_THEME, LIGHT_THEME, THEME_COLORS } from "@/constants";
import { getColor } from "@/helpers";

interface IProps {
  $darkMode: boolean;
}

export const ThemeButton = styled.button<IProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid
    ${({ $darkMode }) => ($darkMode ? DARK_THEME.lightGray : LIGHT_THEME.gray)};
  transition: background-color 0.3s;
  background-color: ${({ $darkMode }) =>
    getColor(THEME_COLORS.primary, $darkMode)};

  &:hover {
    background-color: ${({ $darkMode }) =>
      $darkMode ? DARK_THEME.lightGray : LIGHT_THEME.text};
  }
`;
