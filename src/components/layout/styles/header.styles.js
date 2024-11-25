import styled from "styled-components";
import { heading2, heading3, textWhite } from "../../../css/fonts.styles";
import { flex, rowBox } from "../../../css/layout.styles";

export const Header = styled.header`
  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
  padding: 3rem 0;
  width: 100vw;
  backdrop-filter: blur(10px);
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
  ${heading2({ bold: true })}
  ${textWhite()}
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
`;
