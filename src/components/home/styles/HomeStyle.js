import styled, { keyframes } from "styled-components";
import { bgAvailable, heading1, heading2, heading3 } from "../../../css/fonts.styles";
import { columnBox, rowBox } from "../../../css/layout.styles";

export const FadeInWithMoveUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;
export const FadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
export const FadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const HomeWrapper = styled.div`
  width: 100%;
  ${columnBox({ gap: 8 })}
`;

export const MainSection = styled.div`
  width: 100%;
  min-height: calc(100vh - 10vh);
  position: relative;
  justify-content: center;
  align-items: center;
  ${columnBox({ gap: 1 })}
  margin: 0 auto;
`;

export const MainBG = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.$imageSrc})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(90%);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  ${columnBox({ gap: 1 })}
  justify-content: center;
  align-items: center;
  animation: ${(props) => props.$fadeOut ? FadeOut : FadeIn} 1s ease;
  animation-fill-mode: forwards;
`;

export const ColumnBox = styled.div`
  ${columnBox({ gap: 1.4 })}
`;

/**
 * fontSize - ex). 숫자만 입력하면 됩니당
 * color - ex). #fff, #388CFF, 'blue'
 */

export const TitleText = styled.span`
  font-weight: 700;
  font-size: ${(props) => (props.$fontSize ? `${props.$fontSize}rem` : "2rem")};
  color: ${(props) => (props.color ? props.color : "#fff")};
  letter-spacing: -0.5px;
  text-align: center;
`;

export const SubText = styled.span`
  text-align: center;
  color: #fff;
  ${heading2({ bold: false })}
`;



// Service Section
export const ServiceSectionWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 40vh);
  max-width: 144rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin: 0 auto;
`;

export const GridItemWrapper = styled.div`
  width: 100%;
  max-width: 560px;
  min-height: 400px;
  margin: 0 auto;
  ${columnBox({ gap: 0 })}
  position: relative;
  letter-spacing: -0.5px;
  animation: ${FadeInWithMoveUp} 1s ease backwards;
  animation-play-state: ${(props) =>
    props.startAnimation === true ? "running" : "paused"};
  animation-direction: alternate;
`;

export const GridItemWrapperBG = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-image: ${(props) => `url(${props.bg})`};
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4));
    z-index: 1; 
  }
`

export const TypoSub = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #6dc9de;
  margin-bottom: 9px;
`;

export const InfoTitle = styled.span`
  font-size: 32px;
  font-weight: 700;
`;

export const Seperator = styled.div`
  width: 24px;
  height: 20px;
  background-color: #fff;
`;

export const TypoBox = styled.div`
  width: 100%;
  position: absolute;
  left: 33px;
  bottom: 29px;
  ${columnBox({ gap: 1.2 })}
`;

export const InfoNumber = styled.span`
  color: white;
  font-size: 3.2rem;
  font-weight: 700;
  position: relative;

  &::before {
    content: "";
    width: 2.4rem;
    height: 2px;
    background-color: #fff;
    position: absolute;
    left: 0;
    bottom: -11px;
  }
`;

export const ServiceDescription = styled.span`
  font-size: 2.4rem;
  font-weight: 400;
  letter-spacing: -0.25px;
  line-height: 3.9rem;
  white-space: pre-wrap;
`;

export const ServiceTypo = styled.span`
  color: white;
  font-size: 3.2rem;
  font-weight: 700;
  white-space: pre-wrap;
  line-height: 4rem;
`;

export const InfoButton = styled.button`
  width: fit-content;
  min-width: 9rem;
  border-radius: 5px;
  color: white;
  background-color: #336155;
  font-size: 12px;
  font-weight: 700;
  padding: 14px;
  border: none;
  cursor: pointer;
`;

// Image Section
export const SectionWrapper = styled.div`
  width: 100%;
  max-width: 144rem;
  min-height: calc(100vh - 40vh);
  ${columnBox({ gap: 1 })}
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

export const SectionTitle = styled.p`
  ${heading1({ bold: true })}
`

export const SectionDescription = styled.p`
  ${heading2({ bold: false })}
`

export const GridWithUnbalance = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(10rem, auto);
  grid-gap: 2rem;

  & > *:nth-child(3n-1) {
    margin-top: 4rem;  
  }
`

// carousel
export const CarouselWrapper = styled.div`
  width: 100vw;
  overflow: hidden;
`

export const CarouselContainer = styled.div`
  ${rowBox({ gap: 2 })}
  width: 100vw;
  transform: ${(props) => `translateX(${props.$transform}%)`};
  transition: all 1s ease;
`


// Review Card
export const CardWrapper = styled.div`
  width: 100%;
  min-width: 36rem;
  min-height: 36rem;
  background-color: #fff;
  background-image: url(${props => props.$imageSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  ${columnBox({ gap: 1 })}

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4));
    z-index: 0;
  }
`

export const ReviewText = styled.span`
  min-width: 70%;
  ${heading3({ bold: true })};
  text-align: center;
  font-size: 2rem;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`

export const CarouselButton = styled.button`
  ${bgAvailable};
  border: none;
  padding: 1rem;
  border-radius: .5rem;
  cursor: pointer;
`
