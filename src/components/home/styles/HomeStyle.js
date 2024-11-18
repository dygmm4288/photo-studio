import styled, { keyframes } from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  max-width: 144rem;
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

export const MainSection = styled.div`
  width: 100%;
  min-height: calc(100vh - 10vh);
  position: relative;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  gap: 1rem;
  margin: 0 auto;
`

export const MainBG = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.$imageSrc})`};
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  filter:brightness(90%);
  position: absolute;
  top:0;
  left:0;
  z-index:-1;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  gap: 1rem;
`;


export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap ? `${gap}rem` : '1.4rem'};
`

/**
 * fontSize - ex). 숫자만 입력하면 됩니당
 * color - ex). #fff, #388CFF, 'blue'
 */

export const TitleText = styled.span`
  font-weight: 700;
  font-size: ${(props) => props.$fontSize ? `${props.$fontSize}rem` : '2rem'};
  color: ${(props) => props.color ? props.color : '#fff'};
  letter-spacing: -0.5px;
  text-align:center;
`

export const SubText = styled.span`
  white-space: pre-wrap;
  line-height: 39px;
  letter-spacing: -0.25px;
  text-align: center;
  font-weight: 400;
  font-size: 1.2rem;
  color:#fff;
`

export const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }

`


// Service Section
export const ServiceSectionWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 40vh);
  max-width: 1440px;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 2rem;
  margin: 0 auto;
`

export const GridItemWrapper = styled.div`
  width: 100%;
  max-width: 560px;
  min-height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  letter-spacing: -0.5px;
  animation: ${FadeIn} 1s ease backwards;
  animation-play-state: ${(props) => (props.startAnimation === true) ? 'running' : 'paused'};
  animation-delay: .3s;
  animation-direction: alternate;
`

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
  color: #6DC9DE;
  margin-bottom: 9px;
  
`

export const InfoTitle = styled.span`
  font-size: 32px;
  font-weight: 700;
`

export const Seperator = styled.div`
  width:24px;
  height: 20px;
  background-color: #fff;
`

export const TypoBox = styled.div`
  width: 100%;
  position: absolute;
  left: 33px;
  bottom: 29px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const InfoNumber = styled.span`
  color:white;
  font-size: 32px;
  font-weight: 700;
  position: relative;

  &::before {
    content: '';
    width:24px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    left: 0;
    bottom: -12px;
  }
`

export const ServiceDescription = styled.span`
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -0.25px;
  line-height: 39px;
  white-space: pre-wrap;
`

export const ServiceTypo = styled.span`
  color:white;
  font-size: 32px;
  font-weight: 700;
  white-space: pre-wrap;
  line-height: 40px;
`

export const InfoButton = styled.button`
  width: fit-content;
  min-width: 9rem;
  border-radius: 5px;
  color: white;
  background-color: #336155;
  font-size: 12px;
  font-weight: 700;
  padding:14px;
  border: none;
  cursor: pointer;
`