import styled from "styled-components";
import {
  bgBlack,
  bgPrimary,
  caption1,
  heading2,
  heading3,
  textPrimary,
  textWhite,
} from "../../../css/fonts.styles";
import { columnBox, flex, rowBox } from "../../../css/layout.styles";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 20;
  padding: 3rem 12rem;
  background-color: unset;
  ${(props) => !props.$isTouched && bgBlack()};
  transition: backdrop-filter, background-color 0.5s ease;
  backdrop-filter: blur(0px);
  ${(props) => props.$isTouched && "backdrop-filter: blur(5px)"};

  @media screen and (max-width: 768px) {
    background-color: #336155;
    padding: 2.5rem 2rem;
    font-size: ${heading3({ bold: true })};
  }
`;

export const HeaderWrapper = styled.div`
  ${flex()}
  justify-content: space-between;
  max-width: 144rem;
  margin: 0 auto;

  @media screen {
    
  }
`;

export const HeaderLogo = styled.h1`
  ${flex()}
  justify-content: center;
  align-items: center;
  * {
    ${heading2({ bold: true })}
    ${textWhite()}
  }
`;
export const NavWrapper = styled.nav``;

export const NavList = styled.nav`
  ${rowBox({ gap: 6.9 })}
  height: 100%;
`;

export const NavItem = styled.li`
  ${textWhite()};
  ${heading3()};
  ${flex()};
  justify-content: center;
  align-items: center;

  transition: all 0.2s ease;
  position: relative;
  ::before {
    content: "";
    transition: all 0.2s ease;
    display: block;
    height: 0;
    bottom: 1rem;
    left: 0;
    right: 0;
    position: absolute;
  }

  ${(props) =>
    props.$isActive &&
    `
    ${textPrimary()}
    ::before {
      height: 0.1rem;
      ${bgPrimary()}

    }
  `};
`;


export const SideMenuWrapper = styled.div`
  width: calc(100vw - 45vw);
  height: calc(100vh - 82px);
  background-color: #fff;
  position: absolute;
  top: 82px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4.8rem 3rem;
  z-index: -1;
  transition: all .25s ease;

  transform: ${props => props.$isOpen ? 'translateX(0%)' : 'translateX(100%)'};
`

export const SideMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const SideMenu = styled.li`
  width: 100%;
  font-size:${heading3({ bold: true })};
  cursor: pointer;
  position: relative;

    &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 1px;
    ${bgPrimary()}
    transition: all 0.25s ease;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }

  
`

export const SideBarLinkSection = styled.div`
  ${columnBox({ gap: 1 })}
  align-items: flex-start;

  & > p {
    font-size: ${caption1()};
    font-weight: 600;
    color: var(--primary);
  }

  & > hr {
    width: 3rem;
  }
`

export const SideBarLinkIconBox = styled.div`
  ${rowBox};
`

export const SideBarButton = styled.button`
  width: 100%;
  max-width: 15rem;
  font-weight: 600;
  padding: 1.2rem 3.5rem;
  border-radius: .6rem;
  outline: none;
  border: none;
  cursor: pointer;
  color: #fff;
  ${bgPrimary}
  transition: transform .25s ease;

  &:hover {
    transform: scale(1.05);
  }
`