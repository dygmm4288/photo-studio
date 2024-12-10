import useCarousel from "../home/hooks/useCarousel";
import { reviewWithImage } from "../home/components/reviewSection/const";
import * as CarouselSt from "../home/styles/HomeStyle";
import * as St from "./styles/galleryStyle";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { useState } from "react";
import useModal from "../../store/useModal";
import DetailModal from "./components/detailModal/DetailModal";

const TABS = [
  { name: "제주감성", value: "jeju" },
  { name: "가족", value: "family" },
  { name: "웨딩", value: "wedding" },
  { name: "여행", value: "trip" },
  { name: "커플", value: "couple" },
];

export default function Gallery() {
  const { bgImage, containerRef, handleSlide, transform } =
    useCarousel(reviewWithImage);
  const { show, hide } = useModal();

  const [tab, setTab] = useState("jeju");

  const handleTab = (tabValue) => {
    setTab(tabValue);
  };

  const handleDetailModal = () => {
    show(<DetailModal onClose={hide} />);
  };

  return (
    <St.GalleryWrapper>
      <St.GalleryTitle>갤러리</St.GalleryTitle>
      <St.TabWrapper>
        {TABS.map((menu) => (
          <St.Tab
            onClick={() => handleTab(menu.value)}
            $isSelected={tab === menu.value}
            key={menu.name}>
            {menu.name}
          </St.Tab>
        ))}
      </St.TabWrapper>
      <St.CarouselWrapper style={{ marginBottom: "8.3rem" }}>
        <St.SubTitle>제주 감성 스냅 촬영 고객의 후기</St.SubTitle>

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
      <St.SubTitle>제주 감성 스냅 촬영 사진</St.SubTitle>
      <St.GridWrapper>
        {reviewWithImage.map((img) => {
          return (
            <img
              onClick={handleDetailModal}
              src={img.img}
              alt="section-image"
              key={img.img}
              width={475}
              height={485}
            />
          );
        })}
      </St.GridWrapper>
    </St.GalleryWrapper>
  );
}
