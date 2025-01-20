import { DARK_THEME, LIGHT_THEME } from "@/constants";
import styled from "styled-components";

interface IProps {
  $darkMode: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  width: 100%;
  padding: 64px 0;

  @media (max-width: 1024px) {
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding-top: 32px;
  }
`;

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 480px;
`;

export const ActionChat = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: calc(100% - 16px);
  max-width: 462px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${({ $darkMode }) =>
    $darkMode ? DARK_THEME.lightGray : LIGHT_THEME.gray};

  @media (max-width: 768px) {
    padding: 16px;
    max-width: 478px;
    border-radius: 12px;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const DownloadButton = styled.a<IProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: ${({ $darkMode }) =>
    $darkMode ? DARK_THEME.gray : LIGHT_THEME.text};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ $darkMode }) =>
      $darkMode ? DARK_THEME.background : LIGHT_THEME.primary};
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const Image = styled.img<IProps>`
  width: 100%;
  max-width: 480px;
  border-radius: 24px;
  border: 1px solid
    ${({ $darkMode }) => ($darkMode ? DARK_THEME.lightGray : LIGHT_THEME.gray)};

  @media (max-width: 1024px) {
    max-width: 320px;
  }

  @media (max-width: 768px) {
    max-width: 96px;
    border-radius: 50%;
    border-width: 2px;
  }
`;
