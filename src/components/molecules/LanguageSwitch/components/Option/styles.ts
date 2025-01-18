import styled from "styled-components";
import { DARK_THEME, LIGHT_THEME } from "@/constants";

interface IProps {
  $darkMode: boolean;
}

export const ImgContainer = styled.div<IProps>`
  overflow: hidden;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid
    ${({ $darkMode }) => ($darkMode ? DARK_THEME.lightGray : LIGHT_THEME.gray)};
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
