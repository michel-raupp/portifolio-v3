import styled from "styled-components";
import { THEME_COLORS } from "@/constants";
import { TAIL_DIRECTIONS, TTailDirections } from "./types";
import { getColor } from "@/helpers";

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
  width: calc(100% - 16px);
  max-width: 478px;

  @media (max-width: 768px) {
    width: 100%;
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
    getColor(THEME_COLORS.lightGray, $darkMode)};
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
    getColor(THEME_COLORS.lightGray, $darkMode)};
  border-radius: 4px 4px 0 0;
  rotate: ${({ direction }) =>
    direction === TAIL_DIRECTIONS.LEFT ? "180deg" : "90deg"};

  @media (max-width: 768px) {
    border-radius: 0px 0 0 4px;
    width: 24px;
    height: 24px;
    top: -12px;
    left: 32px;
    right: auto;
    rotate: 135deg;
  }
`;
