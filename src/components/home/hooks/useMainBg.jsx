import { mainImages } from "../views/const";
import { useEffect, useState } from "react";

export default function useMainBg() {
  const [mainImage, setMainImage] = useState();
  const [fadeOut, setFadeOut] = useState(false);

  // 12초마다 이미지 변경
  useEffect(() => {
    const changeImage = setInterval(() => {
      setFadeOut(true);
      const randomIndex = Math.floor(Math.random() * mainImages?.length);

      // fadeOut 후
      // 이미지 인덱스를 랜덤으로 변경 후 0.4초 뒤에 새 이미지로 교체
      setTimeout(() => {
        setMainImage(mainImages[randomIndex]);
        setFadeOut(false);
      }, 250);
    }, 12 * 1000);

    return () => clearInterval(changeImage);
  }, [mainImage]);

  // 이미지 경로가 담긴 배열을 가져와서 초기화
  useEffect(() => {
    setMainImage(mainImages[0]);
  }, []);

  return { mainImage, fadeOut };
}
