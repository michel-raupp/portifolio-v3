import styled from "styled-components";

interface IProps {
  $darkMode: boolean;
}

export const StyledLogo = styled.a<IProps>`
  position: relative;
  overflow: hidden;
  height: 36px;

  .words {
    transition: transform 0.3s;
    position: relative;
    gap: 16px;

    &:hover {
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }
  }
`;
