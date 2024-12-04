import useCarousel from "../home/hooks/useCarousel";
import { reviewWithImage } from "../home/components/reviewSection/const";
import * as CarouselSt from "../home/styles/HomeStyle";
import * as St from "./styles/galleryStyle";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export default function Gallery() {
  const { bgImage, containerRef, handleSlide, transform } =
    useCarousel(reviewWithImage);

  return (
    <St.GalleryWrapper>
      <St.CarouselWrapper>
        <CarouselSt.CarouselButton
          $left={true}
          onClick={() => handleSlide("left")}>
          <FaCaretLeft size={28} color="#fff" />
        </CarouselSt.CarouselButton>
        <CarouselSt.CarouselButton
          onClick={() => handleSlide("right")}
          $right={true}>
          <FaCaretRight size={28} color="#fff" />
        </CarouselSt.CarouselButton>
        <CarouselSt.CarouselContainer ref={containerRef} $transform={transform}>
          {bgImage.map((item) => {
            return (
              <CarouselSt.CardWrapper $imageSrc={item.img} key={item.img}>
                <CarouselSt.ReviewText>{item.review}</CarouselSt.ReviewText>
              </CarouselSt.CardWrapper>
            );
          })}
        </CarouselSt.CarouselContainer>
      </St.CarouselWrapper>
    </St.GalleryWrapper>
  );
}
