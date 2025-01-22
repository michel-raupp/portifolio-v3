import styled from "styled-components";

import { THEME_COLORS } from "@/constants";
import { getColor } from "@/helpers";

interface IProps {
  $darkMode: boolean;
}

interface IWrapper {
  $isOnlyMobile?: boolean;
}

export const Wrapper = styled.div<IWrapper>`
  display: ${({ $isOnlyMobile }) => ($isOnlyMobile ? "none" : "flex")};
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  width: 100%;
  padding-right: 16px;

  @media (max-width: 768px) {
    display: ${({ $isOnlyMobile }) => ($isOnlyMobile ? "flex" : "none")};
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 4px;
    padding-right: 0;
  }
`;

export const Dot = styled.div<IProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${({ $darkMode }) =>
    getColor(THEME_COLORS.primary, $darkMode)};

  &::after {
    content: "";
    position: absolute;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    animation: outline-keys 2s ease-in-out infinite;
  }

  @keyframes outline-keys {
    0% {
      transform: scale(0);
      outline: solid 10px
        ${({ $darkMode }) => getColor(THEME_COLORS.primary, $darkMode)};
      outline-offset: 0;
      opacity: 1;
    }

    100% {
      transform: scale(1);
      outline: solid 0 transparent;
      outline-offset: 10px;
      opacity: ${({ $darkMode }) => ($darkMode ? 0.7 : 0)};
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
