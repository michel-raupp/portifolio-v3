import styled from "styled-components";

interface IList {
  $isHorizontalList?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const List = styled.ul<IList>`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  ${({ $isHorizontalList }) =>
    $isHorizontalList &&
    `
        flex-direction: row;
        overflow-x: auto;
    `}

  @media (max-width: 768px) {
    gap: 16px;
  }
`;
