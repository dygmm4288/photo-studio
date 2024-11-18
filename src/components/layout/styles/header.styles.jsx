import styled from "styled-components";
import { flex, rowBox } from "../../../css/layout.styles";

export const HeaderWrapper = styled.section`
  ${flex}
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  top: 3rem;
`;

export const HeaderLogo = styled.h1``;
export const NavWrapper = styled.nav``;

export const NavList = styled.nav`
  ${rowBox}
  gap: 6.9rem;
`;

export const NavItem = styled.li``;
