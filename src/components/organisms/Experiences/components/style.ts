import styled from "styled-components";

import { DARK_THEME, LIGHT_THEME, THEME_COLORS } from "@/constants";
import { getColor } from "@/helpers";

interface IProps {
  $darkMode: boolean;
}

export const Item = styled.li<IProps>`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: 8px;
  background-color: ${({ $darkMode }) =>
    $darkMode ? DARK_THEME.gray : LIGHT_THEME.background};
  border: 1px solid
    ${({ $darkMode }) => ($darkMode ? DARK_THEME.lightGray : LIGHT_THEME.gray)};

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Image = styled.img<IProps>`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid
    ${({ $darkMode }) => ($darkMode ? DARK_THEME.lightGray : LIGHT_THEME.gray)};

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const ItemTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    gap: 4px;
  }
`;

export const Date = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`;

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 24px;
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
