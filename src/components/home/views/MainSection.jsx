import MainImage from "/assets/Main.jpg";
import Typo from "/assets/Main_Typo.png";
import * as St from "../styles/HomeStyle";

export default function MainSection() {
  return (
    <St.MainSection>
      <St.ColumnBox gap={6}>
        <St.TitleText>제주에서 남기는 감성 가득한 순간</St.TitleText>
        <St.ColumnBox>
          <img src={Typo} alt="메인화면 타이포그래피" width={850} />
          <St.SubText>
            {`제주의 자연속에서 당신만의 이야기를 사진에 담아보세요.\n 당신의 특별한 제주 여행을 기억으로남겨드립니다.`}
          </St.SubText>
        </St.ColumnBox>
      </St.ColumnBox>
      <St.MainBG $imageSrc={MainImage}></St.MainBG>
    </St.MainSection>
  );
}
