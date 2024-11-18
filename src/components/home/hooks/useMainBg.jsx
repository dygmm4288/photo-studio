import MainImage from "/assets/Main.jpg";
import MainImage2 from "/assets/Main2.jpg";
import { useEffect, useState } from "react";

export default function useMainBg() {
  const [mainImage, setMainImage] = useState([MainImage2, MainImage]);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const changeImage = setInterval(() => {
      setFadeOut(true);

      setTimeout(() => {
        setMainImage(mainImage.reverse());
        setFadeOut(false);
      }, 400);
    }, 12 * 1000);

    return () => clearInterval(changeImage);
  }, []);
  return { mainImage, fadeOut };
}
