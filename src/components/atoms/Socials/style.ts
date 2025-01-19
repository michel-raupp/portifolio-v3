import styled from "styled-components";

import { getColor } from "@/helpers";
import { DARK_THEME, LIGHT_THEME, THEME_COLORS } from "@/constants";

interface IProps {
  $darkMode: boolean;
}

export const StyledSocial = styled.a<IProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ $darkMode }) =>
    getColor(THEME_COLORS.primary, $darkMode)};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ $darkMode }) =>
      $darkMode ? DARK_THEME.lightGray : LIGHT_THEME.text};

    .tooltip {
      opacity: 1;
      visibility: visible;
    }
  }

  svg {
    color: ${({ $darkMode }) =>
      $darkMode ? DARK_THEME.text : LIGHT_THEME.background};
    width: 32px;
    height: 32px;
  }

  @media (max-width: 768px) {
    padding: 12px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;
