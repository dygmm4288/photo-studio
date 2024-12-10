import { reviewWithImage } from "../../../home/components/reviewSection/const";
import useResponsive from "../../../home/hooks/useResponsive";
import * as St from "./style";

export default function DetailModal({ onClose }) {
  const mockData = reviewWithImage;
  const { isMobile } = useResponsive();

  return (
    <St.DetailWrapper>
      {/* <St.CloseButton onClick={onClose}>닫기</St.CloseButton> */}
      <St.DetailMainSection>
        <img src={mockData[0].img} />
        <St.ReviewBox>
          <St.ReviewTitle>
            제주 여행의 하이라이트가 된 완벽한 여행 촬영!
          </St.ReviewTitle>
          <St.ReviewInfo>2024년 10월 15일 | 익명</St.ReviewInfo>
          <St.ReviewContent>
            포레스트 픽쳐스와 함께한 촬영은 제주의 아름다움을 그대로 담아낸
            특별한 경험이었습니다. 촬영 장소도 너무 아름다웠고, 작가님이 정말
            친절하게 이끌어 주셔서 자연스러운 모습을 담을 수 있었어요. 특히
            석양이 비치는 해변에서 찍은 사진은 잊을 수 없을 만큼 감동적이
            었습니다. 다음에도 꼭 다시 이용하고 싶어요!
          </St.ReviewContent>
        </St.ReviewBox>
      </St.DetailMainSection>
      <St.GridBox $column={isMobile ? 1 : 3}>
        {reviewWithImage.slice(3, 6).map((img) => {
          return <St.ImageCard key={img.img} $imgSrc={img.img} />;
        })}
      </St.GridBox>
      <St.GridBox $column={isMobile ? 1 : 2} style={{ alignItems: "center" }}>
        {reviewWithImage.slice(7, 9).map((img) => {
          return (
            <St.ImageCard key={img.img} $imgSrc={img.img} width={"100%"} />
          );
        })}
      </St.GridBox>
      {isMobile && <St.CloseButton onClick={onClose}>닫기</St.CloseButton>}
    </St.DetailWrapper>
  );
}
