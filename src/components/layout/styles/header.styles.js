import styled from "styled-components";
import { heading2, heading3, textWhite } from "../../../css/fonts.styles";
import { flex, rowBox } from "../../../css/layout.styles";

export const HeaderWrapper = styled.header`
  ${flex}
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  top: 3rem;
  max-width: 144rem;
  width: 100vw;
  margin: 0 auto;
`;

export const HeaderLogo = styled.h1`
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
