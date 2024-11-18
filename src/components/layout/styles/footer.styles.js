import styled from "styled-components";
import {
  bgBlack,
  bgTertiary,
  heading1,
  heading3,
} from "../../../css/fonts.styles";
import { columnBox, rowBox } from "../../../css/layout.styles";

export const Footer = styled.footer`
  width: 100%;
  ${bgTertiary()}
  padding: 6.85rem 13.65rem;
  ${columnBox({ gap: 3 })}
`;

export const HeadWrapper = styled.div`
  ${columnBox({ gap: 1 })}
`;
export const Head = styled.h1`
  ${heading1()}
`;

export const FooterIconContainer = styled.div`
  ${rowBox({ gap: 1.6 })}
`;

export const FooterIcon = styled.i``;

export const Line = styled.div`
  width: 2.1rem;
  height: 0.1rem;
  ${bgBlack()}
`;

export const FooterInfoContainer = styled.div`
  ${columnBox({ gap: 1.1 })}
`;
export const FooterInfoWrapper = styled.div`
  ${rowBox({ gap: 1 })}
`;
export const FooterText = styled.p`
  ${heading3()}
`;
