import Typo from "/assets/Main_Typo.png";
import * as St from "../styles/HomeStyle";
import useMainBg from "../hooks/useMainBg";
import useResponsive from "../hooks/useResponsive";

export default function MainSection() {
  const { mainImage, fadeOut } = useMainBg();
  const { isMobile } = useResponsive();

  return (
    <St.MainSection>
      <St.ColumnBox gap={6}>
        {!isMobile && (
          <St.TitleText>제주에서 남기는 감성 가득한 순간</St.TitleText>
        )}
        <St.ColumnBox>
          <img
            src={Typo}
            alt="메인화면 타이포그래피"
            width={isMobile ? 400 : 850}
            style={{ margin: "0 auto" }}
          />
          {!isMobile && (
            <St.SubText>
              {`제주의 자연속에서 당신만의 이야기를 사진에 담아보세요.\n 당신의 특별한 제주 여행을 기억으로남겨드립니다.`}
            </St.SubText>
          )}
        </St.ColumnBox>
      </St.ColumnBox>
      <St.MainBG
        $imageSrc={mainImage && mainImage}
        $fadeOut={fadeOut}></St.MainBG>
    </St.MainSection>
  );
}
