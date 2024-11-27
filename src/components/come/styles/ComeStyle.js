import styled from "styled-components";
import { heading1, heading3 } from "../../../css/fonts.styles";
import { columnBox, rowBox } from "../../../css/layout.styles";

export const ComeWrapper = styled.section`
  width: 100%;
  padding: 6.3rem 13.6rem 10.6rem 13.6rem;

  ${columnBox({ gap: 3.9 })}

  position:relative;
`;

export const ComeHeading = styled.h1`
  ${heading1()}
  text-align: center;
`;

export const ComeMainTextWrapper = styled.div`
  margin: 0 auto;
`;

export const ComeMainText = styled.p`
  ${heading3()}
  ${rowBox()}
  align-items: center;
  justify-content: center;
`;

export const ComeMapWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 8;
`;

export const ComeMapButtonWrapper = styled.div`
  align-self: flex-end;
`;
