import { useEffect, useRef, useState } from "react";
import useResponsive from "./useResponsive";

export default function useReviewSection(imageList) {
  // 임시 이미지
  const [bgImage, setBgImage] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCard, setVisibleCard] = useState(4);
  const containerRef = useRef(null);
  const { isMobile } = useResponsive();

  useEffect(() => {
    const calculateVisibleCard = () => {
      if (containerRef.current?.children[0]) {
        setCardWidth(containerRef.current.children[0].offsetWidth + 10);

        // viewport에 보이는 카드 수 계산 (현재 컨테이너 너비 / 카드 너비)
        setVisibleCard(
          Math.floor(containerRef.current.offsetWidth / cardWidth),
        );
      }
    };
    calculateVisibleCard();

    // 화면이 resize될 때 재계산
    window.addEventListener("resize", calculateVisibleCard);
    return () => window.removeEventListener("resize", calculateVisibleCard);
  }, [bgImage, cardWidth]);

  const handleSlide = (direction) => {
    const delta = isMobile ? 1 : visibleCard;

    setCurrentIndex((prev) => {
      if (direction === "left") {
        return prev === 0 ? imageList.length - delta : prev - 1;
      } else {
        return prev === imageList.length - delta ? 0 : prev + 1;
      }
    });
  };

  const transform = -currentIndex * cardWidth;

  useEffect(() => {
    if (imageList) {
      setBgImage(imageList);
    }
  }, [imageList]);

  return { bgImage, transform, handleSlide, containerRef };
}
