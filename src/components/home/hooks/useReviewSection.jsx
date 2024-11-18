import { useEffect, useState } from "react";
import { reviewWithImage } from "../components/reviewSection/const";


export default function useReviewSection() {
  // 임시 이미지
  const [bgImage, setBgImage] = useState([]);
  const [transform, setTransform] = useState(0);

  const handleTransform = () => {
    setTransform((prev) => {
      if (prev < -(reviewWithImage.length * 10)) return 0;
      else return prev - 30;
    });
  };

  useEffect(() => {
    if (bgImage) {
      setBgImage(reviewWithImage);
    }
  }, [bgImage]);

  return { bgImage, transform, handleTransform };
}
