import { useEffect, useRef, useState } from "react";
import { reviewWithImage } from "../components/reviewSection/const";

export default function useReviewSection() {
  // 임시 이미지
  const [bgImage, setBgImage] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCard, setVisibleCard] = useState(4);
  const containerRef = useRef(null);

  useEffect(() => {
    const calculateVisibleCard = () => {
      if (containerRef.current?.children[0]) {
        setCardWidth(containerRef.current.children[0].offsetWidth + 20);

        // viewport에 보이는 카드 수 계산 (현재 컨테이너 너비 / 카드 너비)
        setVisibleCard(Math.ceil(containerRef.current.offsetWidth / cardWidth));
      }
    };
    calculateVisibleCard();

    // 화면이 resize될 때 재계산
    window.addEventListener("resize", calculateVisibleCard);
    return () => window.removeEventListener("resize", calculateVisibleCard);
  }, [bgImage, cardWidth]);

  const handleSlide = (direction) => {
    setCurrentIndex((prev) => {
      if (direction === "left") {
        return prev === bgImage.length - visibleCard ? 0 : prev + 1;
      } else {
        return prev === 0 ? bgImage.length - visibleCard : prev - 1;
      }
    });
  };

  const transform = -currentIndex * cardWidth;

  useEffect(() => {
    if (bgImage) {
      setBgImage(reviewWithImage);
    }
  }, [bgImage]);

  return { bgImage, transform, handleSlide, containerRef };
}
