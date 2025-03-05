import styled from "styled-components";
import { DARK_THEME, LIGHT_THEME, THEME_COLORS } from "@/constants";
import { getColor } from "@/helpers";

interface IProps {
  $darkMode: boolean;
}
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 32px);
  max-width: 1024px;
  gap: 64px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const DownloadButton = styled.a<IProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid transparent;
  background-color: ${({ $darkMode }) =>
    getColor(THEME_COLORS.primary, $darkMode)};
  transition: ease-in-out 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${({ $darkMode }) =>
      $darkMode ? DARK_THEME.background : LIGHT_THEME.text};
    border-color: ${({ $darkMode }) =>
      $darkMode ? DARK_THEME.text : "transparent"};
  }
`;

export const SkillWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(154px, 1fr));
  gap: 8px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Skill = styled.div<IProps>`
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 8px;
  text-align: center;
  background-color: ${({ $darkMode }) =>
    $darkMode ? DARK_THEME.gray : LIGHT_THEME.background};
  border: 1px solid
    ${({ $darkMode }) => ($darkMode ? DARK_THEME.lightGray : LIGHT_THEME.gray)};

  @media (max-width: 768px) {
    flex-direction: row;
    text-align: start;
  }
`;

export const IconContainer = styled.div<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: ${({ $darkMode }) =>
    getColor(THEME_COLORS.lightGray, $darkMode)};
`;
