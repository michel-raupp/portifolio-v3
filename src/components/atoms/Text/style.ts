import styled from "styled-components";

import { getColor } from "@/helpers";
import { TThemeColors } from "@/constants";

import { TEXT_SIZE, TTextSize } from "./types";

interface IStyledText {
  color: TThemeColors;
  size: TTextSize;
  bold?: boolean;
  $darkMode: boolean;
}

const getFontSize = (width: TTextSize) => {
  switch (width) {
    case TEXT_SIZE.XS:
      return `
      12px;
      @media (max-width: 768px) {
         10px;
      }
    `;
    case TEXT_SIZE.S:
      return `
      14px;
      @media (max-width: 768px) {
         12px;
      }
    `;
    case TEXT_SIZE.BASE:
      return `
       16px;
        @media (max-width: 768px) {
           14px;
        }
      `;
    case TEXT_SIZE.LG:
      return `
       18px;
        @media (max-width: 768px) {
           16px;
        }
      `;
    case TEXT_SIZE.XL:
      return `
       24px;
        @media (max-width: 768px) {
           20px;
        }
      `;
    case TEXT_SIZE.XXL:
      return `
         32px;
          @media (max-width: 768px) {
             24px;
          }
        `;
    default:
      return `
       16px;
        @media (max-width: 768px) {
           14px;
        }
      `;
  }
};

export const StyledText = styled.p<IStyledText>`
  color: ${({ color, $darkMode }) => getColor(color, $darkMode)};
  font-size: ${({ size }) => getFontSize(size)};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;

export const StyledH1 = styled.h1<IStyledText>`
  color: ${({ color, $darkMode }) => getColor(color, $darkMode)};
  font-size: ${({ size }) => getFontSize(size)};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;

export const StyledH2 = styled.h2<IStyledText>`
  color: ${({ color, $darkMode }) => getColor(color, $darkMode)};
  font-size: ${({ size }) => getFontSize(size)};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;

export const StyledH3 = styled.h3<IStyledText>`
  color: ${({ color, $darkMode }) => getColor(color, $darkMode)};
  font-size: ${({ size }) => getFontSize(size)};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;
