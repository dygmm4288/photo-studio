import styled from "styled-components";
import {
  bgBlack,
  bgPrimary,
  heading2,
  heading3,
  textPrimary,
  textWhite,
} from "../../../css/fonts.styles";
import { flex, rowBox } from "../../../css/layout.styles";

export const Header = styled.header`
  z-index: 20;
  position: fixed;
  left: 0;
  right: 0;
  padding: 3rem 0;
  width: 100vw;
  background-color: unset;
  ${(props) => !props.isTouched && bgBlack()};
  transition: backdrop-filter, background-color 0.5s ease;
  backdrop-filter: blur(0px);
  ${(props) => props.isTouched && "backdrop-filter: blur(5px)"};
`;

export const HeaderWrapper = styled.div`
  ${flex()}
  justify-content: space-between;
  max-width: 144rem;
  margin: 0 auto;
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
    props.isActive &&
    `
    ${textPrimary()}
    ::before {
      height: 0.1rem;
      ${bgPrimary()}

    }
  `};
`;
