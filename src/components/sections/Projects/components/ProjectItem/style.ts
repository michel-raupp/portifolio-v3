import styled from "styled-components";

import { DARK_THEME, LIGHT_THEME } from "@/constants";

interface IProps {
  $darkMode: boolean;
}

export const Item = styled.li<IProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  width: auto;
  border-radius: 8px;
  background-color: ${({ $darkMode }) =>
    $darkMode ? DARK_THEME.gray : LIGHT_THEME.background};
  border: 1px solid
    ${({ $darkMode }) => ($darkMode ? DARK_THEME.lightGray : LIGHT_THEME.gray)};
  scroll-snap-align: center;
`;

export const Image = styled.img<IProps>`
  width: 288px;
  height: 288px;
  border-radius: 4px;
  object-fit: cover;
  max-width: none;
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

export const ModalSkeleton = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
