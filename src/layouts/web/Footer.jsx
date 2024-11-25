import CopyrightIcon from "../../assets/icons/CopyrightIcon";
import * as St from "../../components/layout/styles/footer.styles";
import { footerInfos, footerSNS } from "./footer.const";
const Footer = () => {
  return (
    <St.Footer>
      <St.HeadWrapper>
        <St.Head>포레스트 픽처스</St.Head>
        <St.FooterIconContainer>
          {footerSNS.map((sns) => (
            <St.FooterIcon key={sns.href}>
              <a href={sns.href}>
                <sns.icon>{sns.name}</sns.icon>
              </a>
            </St.FooterIcon>
          ))}
        </St.FooterIconContainer>
      </St.HeadWrapper>
      <St.Line />
      <St.FooterInfoContainer>
        {footerInfos.map((info) => (
          <St.FooterInfoWrapper key={`footer-${info.kind}`}>
            <St.FooterIcon>
              <info.icon />
            </St.FooterIcon>
            <St.FooterText>{info.content}</St.FooterText>
          </St.FooterInfoWrapper>
        ))}
        <St.FooterCopyrightWrapper>
          <CopyrightIcon />
          <St.FooterCopyrightText>
            2024 Forest Pictures. All Rights Reserved.
          </St.FooterCopyrightText>
        </St.FooterCopyrightWrapper>
      </St.FooterInfoContainer>
    </St.Footer>
  );
};

export default Footer;
