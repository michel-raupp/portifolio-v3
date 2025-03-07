import styled from "styled-components";

import { getColor } from "@/helpers";
import { DARK_THEME, LIGHT_THEME, THEME_COLORS } from "@/constants";

interface IProps {
  $darkMode: boolean;
  $showText?: boolean;
}

export const StyledSocial = styled.a<IProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: fit-content;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: ${({ $darkMode }) =>
    getColor(THEME_COLORS.primary, $darkMode)};
  transition: ease-in-out 0.3s;

  &:hover {
    background-color: ${({ $darkMode }) =>
      $darkMode ? DARK_THEME.lightGray : LIGHT_THEME.lightText};
    border-color: ${({ $darkMode }) =>
      $darkMode ? DARK_THEME.text : "transparent"};

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

  @media (max-width: 1024px) {
    padding: 12px;

    ${({ $showText }) => $showText && "flex: 1"};

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 1024px) {
    gap: 8px;
    flex-wrap: wrap;
  }
`;

export const Text = styled.span<IProps>`
  color: ${({ $darkMode }) =>
    $darkMode ? DARK_THEME.text : LIGHT_THEME.background};
  font-size: 12px;
`;
