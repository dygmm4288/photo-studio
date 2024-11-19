import CopyrightIcon from "../../assets/icons/CopyrightIcon";
import FaceBookIcon from "../../assets/icons/FaceBookIcon";
import InstaIcon from "../../assets/icons/InstaIcon";
import LocationIcon from "../../assets/icons/LocationIcon";
import MailIcon from "../../assets/icons/MailIcon";
import NaverIcon from "../../assets/icons/NaverIcon";
import TelIcon from "../../assets/icons/TelIcon";
import TimeIcon from "../../assets/icons/TimeIcon";

import * as St from "../../components/layout/styles/footer.styles";
const footerInfos = [
  {
    kind: "location",
    icon: LocationIcon,
    content: "제주도 서귀포시 중문로 123",
  },
  {
    kind: "operating_hours",
    icon: TimeIcon,
    content: "운영 시간: 매일 10:00 ~ 18:00",
  },
  {
    kind: "tel",
    icon: TelIcon,
    content: "064-123-4567",
  },
  {
    kind: "email",
    icon: MailIcon,
    content: "forest_pictures_jeju@forestpictures.com",
  },
];
const Footer = () => {
  return (
    <St.Footer>
      <St.HeadWrapper>
        <St.Head>포레스트 픽처스</St.Head>
        <St.FooterIconContainer>
          <St.FooterIcon>
            <InstaIcon>인스타</InstaIcon>
          </St.FooterIcon>
          <St.FooterIcon>
            <FaceBookIcon>페이스북</FaceBookIcon>
          </St.FooterIcon>
          <St.FooterIcon>
            <NaverIcon>네이버</NaverIcon>
          </St.FooterIcon>
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
