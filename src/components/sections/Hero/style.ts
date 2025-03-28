import styled from "styled-components";

import { DARK_THEME, LIGHT_THEME } from "@/constants";

interface IProps {
  $darkMode: boolean;
  $isMobile?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  width: calc(100% - 32px);
  max-width: 1024px;
  padding-top: 64px;

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
  width: 100%;
`;

export const Image = styled.img<IProps>`
  height: 384px;
  width: 384px;
  border-radius: 24px;
  border: 1px solid
    ${({ $darkMode }) => ($darkMode ? DARK_THEME.lightGray : LIGHT_THEME.gray)};
  display: ${({ $isMobile }) => ($isMobile ? "none" : "flex")};

  @media (max-width: 1024px) {
    height: 280px;
    width: 280px;
  }

  @media (max-width: 768px) {
    display: ${({ $isMobile }) => ($isMobile ? "flex" : "none")};
    width: 96px;
    height: 96px;
    border-radius: 50%;
    border-width: 2px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
  max-width: 384px;

  @media (max-width: 1024px) {
    max-width: 280px;
  }

  @media (max-width: 768px) {
    max-width: unset;
  }
`;
