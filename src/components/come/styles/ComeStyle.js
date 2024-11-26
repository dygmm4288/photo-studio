import styled from "styled-components";
import { bgTertiary, heading1 } from "../../../css/fonts.styles";
import { columnBox } from "../../../css/layout.styles";

export const ComeWrapper = styled.section`
  width: 100%;
  padding: 6.3rem 13.6rem 10.6rem 13.6rem;

  ${columnBox({ gap: 3.9 })}

  position:relative;
`;

export const ComeHeading = styled.h1`
  ${heading1()}
`;

export const ComeMapWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 8;
`;

export const ComeMapForm = styled.form`
  ${columnBox({ gap: 1.2 })}
  padding: 2.5rem 4.1rem;
  align-items: stretch;
  position: absolute;
  left: 3rem;
  top: 3.6rem;
  z-index: 10;
  ${bgTertiary()}
  border-radius: 1rem;
  width: 41.4rem;
`;

export const ComeMapButtonWrapper = styled.div`
  align-self: flex-end;
`;
