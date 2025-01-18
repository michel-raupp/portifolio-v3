import styled from "styled-components";
import { DARK_THEME, LIGHT_THEME } from "@/constants";

interface IProps {
  $darkMode: boolean;
}

export const Background = styled.div<IProps>`
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
`;
