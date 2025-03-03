import styled from "styled-components";
import { DARK_THEME, LIGHT_THEME } from "@/constants";

interface ISkeleton {
  $darkMode: boolean;
  $height: string;
  $width: string;
  $isRounded?: boolean;
}

interface ILoader {
  $darkMode: boolean;
}

export const StyledSkeleton = styled.div<ISkeleton>`
  background-color: ${({ $darkMode }) =>
    $darkMode ? DARK_THEME.lightGray : LIGHT_THEME.lightGray};
  border-radius: ${({ $isRounded }) => ($isRounded ? "50%" : "12px")};
  height: ${({ $height }) => `${$height}`};
  width: ${({ $width }) => `${$width}`};
  display: flex;
  justify-content: center;
  align-items: center;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 0.6;
    }
  }
`;

export const Loader = styled.div<ILoader>`
  border-radius: 50%;
  border: 4px solid
    ${({ $darkMode }) => ($darkMode ? DARK_THEME.lightText : LIGHT_THEME.gray)};
  border-left-color: transparent;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
