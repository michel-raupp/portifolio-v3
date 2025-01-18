import styled from "styled-components";

import { getColor } from "@/helpers";
import { TThemeColors } from "@/constants";

import { TEXT_SIZE, TTextSize } from "./types";

interface IStyledText {
  color: TThemeColors;
  size?: TTextSize;
  $bold?: boolean;
  $darkMode: boolean;
}

const getFontSize = (size?: TTextSize) => {
  switch (size) {
    case TEXT_SIZE.XS:
      return `
      font-size: 12px;
      @media (max-width: 768px) {
        font-size: 10px;
      }
    `;
    case TEXT_SIZE.S:
      return `
      font-size: 14px;
        @media (max-width: 768px) {
          font-size: 12px;
        }
      `;
    case TEXT_SIZE.BASE:
      return `
      font-size: 16px;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    `;
    case TEXT_SIZE.LG:
      return `
      font-size: 18px;
      @media (max-width: 768px) {
        font-size: 16px;
      }
    `;
    case TEXT_SIZE.XL:
      return `
      font-size: 24px;
      @media (max-width: 768px) {
        font-size: 20px;
      }
    `;
    case TEXT_SIZE.XXL:
      return `
      font-size: 32px;
      @media (max-width: 768px) {
        font-size: 24px;
      }
    `;
    default:
      return `
      font-size: 16px;
        @media (max-width: 768px) {
          font-size: 14px;
        }
      `;
  }
};

export const StyledText = styled.p<IStyledText>`
  color: ${({ color, $darkMode }) => getColor(color, $darkMode)};
  ${({ size }) => getFontSize(size)};
  font-weight: ${({ $bold }) => ($bold ? "bold" : "normal")};
`;

export const StyledH1 = styled.h1<IStyledText>`
  color: ${({ color, $darkMode }) => getColor(color, $darkMode)};
  ${getFontSize(TEXT_SIZE.XXL)};
  font-weight: bold;
`;

export const StyledH2 = styled.h2<IStyledText>`
  color: ${({ color, $darkMode }) => getColor(color, $darkMode)};
  ${getFontSize(TEXT_SIZE.XXXL)};
  font-weight: bold;
`;

export const StyledH3 = styled.h3<IStyledText>`
  color: ${({ color, $darkMode }) => getColor(color, $darkMode)};
  ${getFontSize(TEXT_SIZE.XL)};
  font-weight: bold;
`;
