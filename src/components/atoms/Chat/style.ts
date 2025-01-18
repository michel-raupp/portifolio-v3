import styled from "styled-components";
import { DARK_THEME, LIGHT_THEME } from "@/constants";
import { TAIL_DIRECTIONS, TTailDirections } from "./types";

interface IProps {
  $darkMode: boolean;
  direction: TTailDirections;
}

export const StyledChat = styled.div<IProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  max-width: 478px;
  padding: ${({ direction }) =>
    direction === TAIL_DIRECTIONS.LEFT ? "0 0 0 16px" : "0 16px 0 0"};

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Bubble = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 24px;
  border-radius: 20px;
  gap: 10px;
  background-color: ${({ $darkMode }) =>
    $darkMode ? DARK_THEME.gray : LIGHT_THEME.lightGray};
  border-radius: ${({ direction }) =>
    direction === TAIL_DIRECTIONS.LEFT
      ? "0 20px 20px 20px "
      : "20px 0 20px 20px"};

  @media (max-width: 768px) {
    border-radius: 12px;
    padding: 16px;
  }
`;

export const Tail = styled.div<IProps>`
  position: absolute;
  top: 0;
  left: ${({ direction }) =>
    direction === TAIL_DIRECTIONS.LEFT ? "-16px" : "auto"};
  right: ${({ direction }) =>
    direction === TAIL_DIRECTIONS.RIGHT ? "-16px" : "auto"};
  width: 32px;
  height: 32px;
  clip-path: polygon(0 0, 100% 100%, 0 100%);
  background-color: ${({ $darkMode }) =>
    $darkMode ? DARK_THEME.gray : LIGHT_THEME.lightGray};
  border-radius: 4px 4px 0 0;
  rotate: ${({ direction }) =>
    direction === TAIL_DIRECTIONS.LEFT ? "180deg" : "90deg"};

  @media (max-width: 768px) {
    border-radius: 0px 0 0 4px;
    width: 24px;
    height: 24px;
    top: -12px;
    left: ${({ direction }) =>
      direction === TAIL_DIRECTIONS.LEFT ? "48px" : "auto"};
    right: ${({ direction }) =>
      direction === TAIL_DIRECTIONS.RIGHT ? "48px" : "auto"};
    rotate: 135deg;
  }
`;
