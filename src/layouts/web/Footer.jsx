import * as St from "../../components/layout/styles/footer.styles";
const footerInfos = [
  {
    kind: "location",
    icon: "",
    content: "제주도 서귀포시 중문로 123",
  },
  {
    kind: "operating_hours",
    icon: "",
    content: "운영 시간: 매일 10:00 ~ 18:00",
  },
  {
    kind: "tel",
    icon: "",
    content: "064-123-4567",
  },
  {
    kind: "email",
    icon: "",
    content: "forest_pictures_jeju@forestpictures.com",
  },
];
const Footer = () => {
  return (
    <St.Footer>
      <St.HeadWrapper>
        <St.Head>포레스트 픽처스</St.Head>
        <St.FooterIconContainer>
          <St.FooterIcon>인스타</St.FooterIcon>
          <St.FooterIcon>페이스북</St.FooterIcon>
          <St.FooterIcon>네이버</St.FooterIcon>
        </St.FooterIconContainer>
      </St.HeadWrapper>
      <St.Line />
      <St.FooterInfoContainer>
        {footerInfos.map((info) => (
          <St.FooterInfoWrapper key={`footer-${info.kind}`}>
            <St.FooterIcon>{info.icon}</St.FooterIcon>
            <St.FooterText>{info.content}</St.FooterText>
          </St.FooterInfoWrapper>
        ))}
      </St.FooterInfoContainer>
    </St.Footer>
  );
};

export default Footer;
