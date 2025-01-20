import styled from "styled-components";
import { DARK_THEME, LIGHT_THEME } from "@/constants";

interface IProps {
  $darkMode: boolean;
}

export const Background = styled.div<IProps>`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ $darkMode }) =>
    $darkMode
      ? `${DARK_THEME.background} radial-gradient(
      ${DARK_THEME.lightGray} 10%, 
      transparent 1%
      )`
      : `${LIGHT_THEME.background} radial-gradient(
        ${LIGHT_THEME.lightGray} 10%, 
        transparent 1%
        )`};
  background-size: 11px 11px;
  padding: 70px 16px;

  @media (max-width: 768px) {
    padding: 75px 16px;
  }
`;

export const WebsiteBody = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  gap: 128px;
  width: 100%;
  max-width: 1024px;
  padding: 70px 16px;

  @media (max-width: 768px) {
    padding: 75px 16px;
    gap: 64px;
  }
`;
