import styled, { keyframes } from "styled-components";
import { columnBox } from "../../../css/layout.styles";

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
  background-position: bottom;
  background-repeat: no-repeat;
  filter: brightness(90%);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  ${columnBox({ gap: 1 })}
  justify-content: center;
  align-items: center;
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
  white-space: pre-wrap;
  line-height: 39px;
  letter-spacing: -0.25px;
  text-align: center;
  font-weight: 400;
  font-size: 1.2rem;
  color: #fff;
`;

export const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }

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
  ${columnBox({ gap: 0 })}
  position: relative;
  letter-spacing: -0.5px;
  animation: ${FadeIn} 1s ease backwards;
  animation-play-state: ${(props) =>
    props.startAnimation === true ? "running" : "paused"};
  animation-delay: 0.3s;
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(88%);
`;

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
  font-size: 32px;
  font-weight: 700;
  position: relative;

  &::before {
    content: "";
    width: 24px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    left: 0;
    bottom: -12px;
  }
`;

export const ServiceDescription = styled.span`
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -0.25px;
  line-height: 39px;
  white-space: pre-wrap;
`;

export const ServiceTypo = styled.span`
  color: white;
  font-size: 32px;
  font-weight: 700;
  white-space: pre-wrap;
  line-height: 40px;
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
