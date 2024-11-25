import { useEffect, useState } from "react";
import { sectionImages } from "./const";
import * as St from "../../styles/HomeStyle";

export default function ImageSection() {
  const [images, setImages] = useState([]);

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
          지금까지 함께한 소중한 고객들과의 촬영 사진을 통해 포레스트 픽쳐스의
          감성을 느껴보세요.
        </St.SectionDescription>

        {/* grid Section */}
        <St.GridWithUnbalance>
          {images.map((img, idx) => {
            return <img src={img} alt="section-image" key={idx} />;
          })}
        </St.GridWithUnbalance>
      </St.SectionWrapper>
    </div>
  );
}
