import styled from "styled-components";

import { DARK_THEME, LIGHT_THEME, THEME_COLORS } from "@/constants";
import { getColor } from "@/helpers";

interface IProps {
  $darkMode: boolean;
}

export const Item = styled.li<IProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  width: auto;
  border-radius: 8px;
  background-color: ${({ $darkMode }) =>
    $darkMode ? DARK_THEME.gray : LIGHT_THEME.background};
  border: 1px solid
    ${({ $darkMode }) => ($darkMode ? DARK_THEME.lightGray : LIGHT_THEME.gray)};
  scroll-snap-align: center;
`;

export const Image = styled.img<IProps>`
  width: 288px;
  height: 288px;
  border-radius: 4px;
  object-fit: cover;
  max-width: none;
`;

export const Date = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
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

export const Modal = styled.div<IProps>`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
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
  width: calc(100% - 32px);
  height: fit-content;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DownloadButton = styled.a<IProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${({ $darkMode }) =>
    getColor(THEME_COLORS.primary, $darkMode)};
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${({ $darkMode }) =>
      getColor(THEME_COLORS.gray, $darkMode)};
  }
`;
