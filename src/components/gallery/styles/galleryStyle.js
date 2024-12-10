import styled from "styled-components";
import { heading1, heading2 } from "../../../css/fonts.styles";

export const GalleryWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh);
  max-width: 144rem;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 9rem 0;
`
export const GalleryTitle = styled.p`
  ${heading1}
  margin-bottom: 5.6rem;
`

export const CarouselWrapper = styled.div`
  width: 90vw;
  overflow: hidden;
  position: relative;
  margin-left: auto;
`

export const TabWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: var(--primary);
  margin-bottom: 5.6rem;
`

export const Tab = styled.p`
  ${heading2()}
  position: relative;
  cursor: pointer;
  font-weight: ${props => props.$isSelected ? 600 : 500};


  &::after {
    content: '';
    width: ${props => props.$isSelected ? '100%' : '0%'};
    height: .3rem;
    background-color: var(--primary);
    position: absolute;
    left: 0;
    bottom: -.4rem;
    transition: all .25s ease;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`

export const SubTitle = styled.p`
  ${heading2({ bold: true })}
  color: var(--primary);
  margin-right: auto;
  margin-block: 1.4rem;
`


export const GridWrapper = styled.div`
  width: 100%;
  max-width: 144rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`