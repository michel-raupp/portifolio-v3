import styled from "styled-components";
import { DARK_THEME, LIGHT_THEME } from "@/constants";

interface IStyledChat {
  $darkMode: boolean;
}

export const StyledChat = styled.button<IStyledChat>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (max-width: 768px) {
    border-radius: 4px;
  }
`;

export const Bubble = styled.div<IStyledChat>`
  background-color: ${({ $darkMode }) =>
    $darkMode ? DARK_THEME.gray : LIGHT_THEME.lightGray};
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
