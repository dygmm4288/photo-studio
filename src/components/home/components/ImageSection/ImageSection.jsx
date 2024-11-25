import { useEffect, useState } from "react";
import { sectionImages } from "./const";
import * as St from "../../styles/HomeStyle";
import useResponsive from "../../hooks/useResponsive";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import useReviewSection from "../../hooks/useReviewSection";

export default function ImageSection() {
  const [images, setImages] = useState([]);
  const { isMobile } = useResponsive();
  const { bgImage, transform, handleSlide, containerRef } =
    useReviewSection(sectionImages);

  useEffect(() => {
    if (images) {
      setImages(sectionImages);
    }
  }, [images]);

  return (
    <div style={{ width: "100%", background: "#F7F1ED50", padding: "1rem" }}>
      <St.SectionWrapper>
        <St.TypoSub>Our Work</St.TypoSub>
        <St.SectionTitle>포트폴리오 갤러리</St.SectionTitle>
        <St.SectionDescription>
          {isMobile
            ? `지금까지 함께한 소중한 고객들과의 촬영 사진을 통해\n포레스트 픽쳐스의 감성을 느껴보세요.`
            : `지금까지 함께한 소중한 고객들과의 촬영 사진을 통해 포레스트 픽쳐스의 감성을 느껴보세요.`}
        </St.SectionDescription>

        {/* grid Section */}
        {!isMobile && (
          <St.GridWithUnbalance>
            {images.map((img, idx) => {
              return <img src={img} alt="section-image" key={idx} />;
            })}
          </St.GridWithUnbalance>
        )}

        {isMobile && (
          <St.CarouselWrapper>
            <St.CarouselButton onClick={() => handleSlide("left")} $left={true}>
              <FaCaretLeft size={28} />
            </St.CarouselButton>
            <St.CarouselButton
              onClick={() => handleSlide("right")}
              $right={true}>
              <FaCaretRight size={28} />
            </St.CarouselButton>
            <St.CarouselContainer ref={containerRef} $transform={transform}>
              {bgImage.map((img) => {
                return (
                  <St.CardWrapper $imageSrc={img} key={img}>
                    <St.ReviewText>{img.review}</St.ReviewText>
                  </St.CardWrapper>
                );
              })}
            </St.CarouselContainer>
          </St.CarouselWrapper>
        )}
      </St.SectionWrapper>
    </div>
  );
}
