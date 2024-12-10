import styled from "styled-components";
import {
  bgPrimary,
  body1,
  heading1,
  heading2,
  heading3,
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

  & > div {
    flex: 1;
  }
`;

export const IntroduceSection1ImageWrapper = styled.div`
  ${rowBox({ gap: 2.2 })}
  div {
    flex: 1;
    ${columnBox({ gap: 4.1 })}
  }
  div:nth-child(2) {
    margin-top: 8.8rem;
  }

  img {
    width: 100%;
    min-height: 40.9rem;
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

export const IntroduceSection2Wrapper = styled.section`
  padding: 10.4rem 13.7rem;
  ${bgPrimary()}

  ${columnBox({ gap: 4.3 })}
  align-items: center;
  color: white;

  & > img {
    align-self: stretch;
    max-height: 50rem;
    object-fit: contain;
  }
`;

export const IntroduceSection2Header = styled.div`
  ${columnBox({ gap: 0.6 })};
  align-items: center;
  justify-content: center;

  & .heading {
    text-align: center;
  }
`;

export const IntroduceSection2TextWrapper = styled.div`
  ${rowBox({ gap: 5 })}
  & > div {
    flex: 1;
    ${columnBox({ gap: 2 })}
    align-items: center;

    & > h3 {
      ${heading2()}
    }
    & > span {
      ${heading3()}
      text-align: center;
    }
  }
`;

export const IntroduceSection2Nav = styled.nav`
  ${rowBox({ gap: 6.7 })}
  color: white;

  * {
    cursor: pointer;
    font-size: 1.8rem;
    line-height: 2.8rem;
    letter-spacing: -0.025rem;
  }

  .selected {
    position: relative;
  }

  .selected::after {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    height: 0.2rem;
    bottom: -0.9rem;

    background-color: white;
  }
`;

export const IntroduceSection2Footer = styled.div`
  ${columnBox({ gap: 4.3 })}
`;

export const IntroduceSection2OptionTextWrapper = styled.div`
  ${columnBox({ gap: 1 })}

  align-items: center;

  & > .badge {
    background-color: var(--secondary);
    border-radius: 3rem;
    padding: 0.3rem 2.5rem;

    ${body1()}

    text-align: center;
  }

  & > .text-wrapper {
    text-align: center;
    ${columnBox({ gap: 1 })}

    h2 {
      ${heading2()}
    }
    span {
      ${heading3()}
    }
  }
`;

export const IntroduceSection3Wrapper = styled.section`
  padding: 13.6rem;
  ${rowBox({ gap: 2 })}
  justify-content: center;
  align-items: center;
`;

export const IntroduceSection3LargeImageWrapper = styled.div`
  flex-basis: 50.8rem;
  flex-shrink: 0;
  height: 80.8rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const IntroduceSection3RightWrapper = styled.div`
  ${columnBox({ gap: 4.4 })}
`;

export const IntroduceSection3TextWrapper = styled.div`
  max-width: 52.4rem;
  padding-left: 2rem;
`;

export const IntroduceSection3SmallImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 31.7rem 30.2rem;
  column-gap: 2.1rem;

  img {
    object-fit: cover;
  }

  img:nth-child(1) {
    width: 31.7rem;
    height: 30.8rem;
  }
  img:nth-child(2) {
    width: 30.2rem;
    height: 30.2rem;
    margin-top: 3.1rem;
  }
  img:nth-child(3) {
    width: 31.7rem;
    height: 31.7rem;
    margin-top: 1.5rem;
  }
  img:nth-child(4) {
    width: 30.2rem;
    height: 28.8rem;
    margin-top: 2.7rem;
  }
`;

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
