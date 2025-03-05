import styled from "styled-components";
import { DARK_THEME, LIGHT_THEME } from "@/constants";
import { Text } from "@/components/atoms";

interface IProps {
  $darkMode: boolean;
}

export const StyledFooter = styled.footer<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 16px;
  background-color: ${({ $darkMode }) =>
    $darkMode ? DARK_THEME.gray : LIGHT_THEME.background};
  border-top: 1px solid
    ${({ $darkMode }) =>
      $darkMode ? DARK_THEME.lightGray : LIGHT_THEME.lightGray};
  filter: drop-shadow(
    0px 40px 0px
      ${({ $darkMode }) =>
        $darkMode ? DARK_THEME.gray : LIGHT_THEME.background}
  );
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
  max-width: 1024px;
`;

export const Bar = styled.div<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1px;
  width: 100%;
  max-width: 1024px;
  background-color: ${({ $darkMode }) =>
    $darkMode ? DARK_THEME.lightGray : LIGHT_THEME.lightGray};
`;

export const CustomText = styled.div`
  margin-left: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Link = styled.a<IProps>`
  border-radius: 6px;
  padding: 4px 8px;
  background-color: transparent;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ $darkMode }) =>
      $darkMode ? DARK_THEME.lightGray : LIGHT_THEME.lightGray};
  }
`;
