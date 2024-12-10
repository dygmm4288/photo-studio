import useCarousel from "../../hooks/useCarousel";
import ReviewIconLeft from "/assets/reviewIconLeft.png";
import ReviewIconRight from "/assets/reviewIconRight.png";
import { reviewWithImage } from "./const";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import * as St from "../../styles/HomeStyle";

export default function ReviewCard() {
  const { bgImage, transform, handleSlide, containerRef } =
    useCarousel(reviewWithImage);

  return (
    <St.CarouselWrapper>
      <St.CarouselButton onClick={() => handleSlide("left")} $left={true}>
        <FaCaretLeft size={28} />
      </St.CarouselButton>
      <St.CarouselButton onClick={() => handleSlide("right")} $right={true}>
        <FaCaretRight size={28} />
      </St.CarouselButton>
      <St.CarouselContainer ref={containerRef} $transform={transform}>
        {bgImage.map((img) => {
          return (
            <St.CardWrapper $imageSrc={img.img} key={img.img}>
              <St.CarouselCardTextIcon
                src={ReviewIconLeft}
                alt="review-icon-left"
                width={28}
                height={28}
                $left={true}
              />
              <St.CarouselCardTextIcon
                src={ReviewIconRight}
                alt="review-icon-right"
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
