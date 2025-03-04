import styled from "styled-components";

import { DARK_THEME, LIGHT_THEME, THEME_COLORS } from "@/constants";
import { getColor } from "@/helpers";

interface IProps {
  $darkMode: boolean;
}

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  z-index: 100;
  padding: 16px;
  margin: 0 auto;
  width: 100%;
  height: 100lvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledModal = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: ${({ $darkMode }) =>
    $darkMode ? DARK_THEME.gray : LIGHT_THEME.background};
  border-radius: 8px;
  border: 1px solid
    ${({ $darkMode }) => ($darkMode ? DARK_THEME.lightGray : LIGHT_THEME.gray)};
  max-width: 768px;
  width: 100%;
  height: fit-content;
  overflow-y: scroll;
`;

export const Background = styled.button<IProps>`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: ${({ $darkMode }) =>
    $darkMode ? DARK_THEME.primary : LIGHT_THEME.primary};
  pointer-events: auto;
  opacity: 0.3;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 16px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Line = styled.hr<IProps>`
  border: 1px solid
    ${({ $darkMode }) =>
      $darkMode ? DARK_THEME.lightGray : LIGHT_THEME.lightGray};
  width: 100%;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span<IProps>`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${({ $darkMode }) =>
    getColor(THEME_COLORS.lightGray, $darkMode)};
  color: ${({ $darkMode }) => getColor(THEME_COLORS.text, $darkMode)};
  font-size: 14px;

  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 12px;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

export const Date = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconContainer = styled.div`
  @media (max-width: 480px) {
    display: none;
  }
`;
