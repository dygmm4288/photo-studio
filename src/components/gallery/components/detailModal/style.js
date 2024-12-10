import styled from "styled-components";
import { heading2, heading3 } from "../../../../css/fonts.styles";

export const DetailWrapper = styled.div`
  width: 100%;
  max-width: calc(100vw - 30vw);
  max-height: calc(100vh - 5vh);
  padding: 2rem 3rem;
  background-color: var(--primary);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: scroll;

  @media screen and (max-width: 1040px) {
    max-width: 100%;
}
`;

export const CloseButton = styled.button`
  width: 100%;
  margin: 0 auto;
  outline: none;
  border: none;
  padding: .8rem;
  border-radius: 0.5rem;
  background-color: var(--accent);
  cursor: pointer;
`

export const DetailMainSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6rem;

  @media screen and (max-width: 1040px) {
    flex-direction: column;
}
`;

export const ReviewBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  color: #fff;
`;

export const ReviewTitle = styled.p`
  ${heading2({ bold: true })}
`;

export const ReviewInfo = styled.p`
  ${heading3({ bold: true })}
`;

export const ReviewContent = styled.p`
  ${heading3()}
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$column ? `repeat(${props.$column},1fr)` : "repeat(3,1fr)"};
  grid-gap:1.4rem
`;


export const ImageCard = styled.div`
    width: 100%;
    height: 36rem;
    background-image: ${(props) => props.$imgSrc ? (`url(${props.$imgSrc})`) : 'none'};
    background-repeat:no-repeat;
    background-position:center
`