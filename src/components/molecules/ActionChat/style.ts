import styled from "styled-components";

import { DARK_THEME, LIGHT_THEME, THEME_COLORS } from "@/constants";
import { getColor } from "@/helpers";

interface IProps {
  $darkMode: boolean;
}

export const Chat = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: calc(100% - 16px);
  padding: 24px;
  border-radius: 16px;
  background-color: ${({ $darkMode }) =>
    getColor(THEME_COLORS.lightGray, $darkMode)};

  @media (max-width: 768px) {
    padding: 16px;
    width: 100%;
    border-radius: 12px;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 1024px) {
    gap: 12px;
  }

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const DownloadButton = styled.a<IProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: ${({ $darkMode }) =>
    $darkMode ? DARK_THEME.gray : LIGHT_THEME.text};
  font-size: 16px;
  cursor: pointer;
  transition: ease-in-out 0.3s;

  &:hover {
    background-color: ${({ $darkMode }) =>
      $darkMode ? DARK_THEME.lightGray : LIGHT_THEME.primary};
    border-color: ${({ $darkMode }) =>
      $darkMode ? DARK_THEME.text : "transparent"};
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;
