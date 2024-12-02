import useResponsive from "../../hooks/useResponsive";
import * as St from "../../styles/HomeStyle";
import ReviewCard from "./ReviewCard";

export default function ReviewSection() {
  const { isMobile } = useResponsive();
  return (
    <St.SectionWrapper>
      <St.TypoSub>Reviews</St.TypoSub>
      <St.SectionTitle>고객의 소중한 리뷰</St.SectionTitle>
      <St.SectionDescription>
        {isMobile
          ? `지금까지 함께한 소중한 고객들과의 촬영 사진을 통해\n포레스트 픽쳐스의 감성을 느껴보세요.`
          : `지금까지 함께한 소중한 고객들과의 촬영 사진을 통해 포레스트 픽쳐스의 감성을 느껴보세요.`}
      </St.SectionDescription>
      <ReviewCard />
    </St.SectionWrapper>
  );
}
