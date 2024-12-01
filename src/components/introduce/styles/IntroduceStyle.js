import styled from "styled-components";
import {
  body1,
  heading1,
  heading2,
  textSecondary,
  textWhite,
} from "../../../css/fonts.styles";
import { columnBox, rowBox } from "../../../css/layout.styles";

export const IntroduceWrapper = styled.article``;

export const IntroduceHeader = styled.header`
  height: 46.8rem;
  background-image: url(/assets/Introduce0.png);
  background-size: contain;
  ${columnBox({ gap: 2.7 })}
  justify-content: center;
  align-items: center;
`;

export const IntroduceHeaderHeading = styled.h1`
  ${heading1()}
  ${textWhite()}
  font-size: 6.4rem;
`;

export const IntroduceHeaderText = styled.p`
  ${heading2()}
  ${textWhite()}
`;

export const IntroduceSection1Wrapper = styled.section`
  padding: 13.6rem;
  ${rowBox({ gap: 4.4 })}
`;

export const IntroduceSection1ImageWrapper = styled.div`
  ${rowBox({ gap: 2.2 })}
  div {
    ${columnBox({ gap: 4.1 })}
  }
  div:nth-child(2) {
    margin-top: 8.8rem;
  }
  img {
    width: 29.8rem;
    height: 40.9rem;
    object-fit: contain;
  }
`;

export const IntroduceSection1TextWrapper = styled.div`
  align-self: center;
`;

export const IntroduceCategoryHeaderWrapper = styled.div`
  ${columnBox({ gap: 1.5 })}
`;

export const IntroduceSection1DetailWrapper = styled.div`
  margin-top: 2.9rem;
  ${columnBox({ gap: 4.8 })}
`;

export const IntroduceSection3Wrapper = styled.section``;

export const IntroduceSection3Grid = styled.div``;

export const IntroduceSection3LargeImageWrapper = styled.div``;

export const IntroduceSection3TextWrapper = styled.div``;

export const IntroduceSection3SmallImageWrapper = styled.div``;

export const IntroduceCategory = styled.p`
  ${textSecondary()}
  ${body1()}
`;

export const IntroduceHeading = styled.h2`
  ${heading1()}
`;

export const IntroduceText = styled.p`
  ${heading2()}
`;
