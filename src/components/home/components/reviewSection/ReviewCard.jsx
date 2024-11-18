import useReviewSection from "../../hooks/useReviewSection";
import ReviewIconLeft from "/assets/reviewIconLeft.png";
import ReviewIconRight from "/assets/reviewIconRight.png";
import * as St from "../../styles/HomeStyle";

export default function ReviewCard() {
  const { bgImage, transform, handleTransform } = useReviewSection();

  return (
    <St.CarouselWrapper>
      <St.CarouselButton onClick={handleTransform}>
        임시 캐러셀 버튼
      </St.CarouselButton>
      <St.CarouselContainer $transform={transform}>
        {bgImage.map((img) => {
          return (
            <St.CardWrapper $imageSrc={img.img} key={img.img}>
              <img
                src={ReviewIconLeft}
                alt="review-icon-left"
                style={{
                  position: "absolute",
                  zIndex: 1,
                  left: "3%",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
                width={28}
                height={28}
              />
              <img
                src={ReviewIconRight}
                alt="review-icon-right"
                style={{
                  position: "absolute",
                  zIndex: 1,
                  right: "3%",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
                width={28}
                height={28}
              />
              <St.ReviewText>{img.review}</St.ReviewText>
            </St.CardWrapper>
          );
        })}
      </St.CarouselContainer>
    </St.CarouselWrapper>
  );
}
