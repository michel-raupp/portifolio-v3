import styled from "styled-components";

import { DARK_THEME, LIGHT_THEME } from "@/constants";

interface IStyledTooltip {
  $darkMode: boolean;
  $isTooltipAbove?: boolean;
  $parentSelector: string;
}

export const StyledTooltip = styled.div<IStyledTooltip>`
  position: absolute;
  transform: translateY(
    ${({ $isTooltipAbove }) => ($isTooltipAbove ? "-56px" : "56px")}
  );
  z-index: 20;
  pointer-events: none;
  visibility: hidden;
  width: 120px;
  background-color: ${({ $darkMode }) =>
    $darkMode ? DARK_THEME.gray : LIGHT_THEME.background};
  text-align: center;
  border-radius: 6px;
  padding: 8px;
  opacity: 0;
  transition: opacity 0.3s;
  border: 1px solid
    ${({ $darkMode }) =>
      $darkMode ? DARK_THEME.lightGray : LIGHT_THEME.lightGray};

  ${({ $parentSelector }) => $parentSelector}:hover:not(:active) & {
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

interface ITail {
  $darkMode: boolean;
  $isTooltipAbove?: boolean;
}

export const Tail = styled.div<ITail>`
  position: absolute;
  top: ${({ $isTooltipAbove }) => ($isTooltipAbove ? "auto" : "-13.5px")};
  bottom: ${({ $isTooltipAbove }) => ($isTooltipAbove ? "-13.5px" : "auto")};
  left: 50%;
  right: 50%;
  transform: translateX(50%)
    ${({ $isTooltipAbove }) => ($isTooltipAbove ? "scaleY(-1)" : "scaleY(1)")};
  -webkit-transform: translateX(50%)
    ${({ $isTooltipAbove }) => ($isTooltipAbove ? "scaleY(-1)" : "scaleY(1)")};
  clip-path: polygon(0 0, 100% 100%, 0 100%);
  background-color: ${({ $darkMode }) =>
    $darkMode ? DARK_THEME.gray : LIGHT_THEME.background};
  border-radius: 0px 0 0 4px;
  width: 16px;
  height: 16px;
  rotate: ${({ $isTooltipAbove }) => ($isTooltipAbove ? "225deg" : "135deg")};

  border: 1px solid
    ${({ $darkMode }) =>
      $darkMode ? DARK_THEME.lightGray : LIGHT_THEME.lightGray};
`;
