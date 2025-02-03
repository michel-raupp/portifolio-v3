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
  flex-direction: ${({ $isHorizontalList }) =>
    $isHorizontalList ? "row" : "column"};
  gap: 32px;
  width: 100%;
  overflow: ${({ $isHorizontalList }) =>
    $isHorizontalList ? "scroll" : "visible"};

  ${({ $isHorizontalList }) =>
    $isHorizontalList &&
    `
      scroll-snap-type: x mandatory;
      -ms-scroll-snap-type: mandatory;
      scroll-snap-points-x: repeat(100%);
      -ms-scroll-snap-points-x: repeat(100%);
      -webkit-overflow-scrolling: touch;
      scroll-margin: 0 32px;
      padding-bottom: 16px;
    `}

  @media (max-width: 768px) {
    gap: ${({ $isHorizontalList }) => ($isHorizontalList ? "8px" : "16px")};
  }
`;
