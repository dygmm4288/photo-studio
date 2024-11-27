import { useState } from "react";
import CopyIcon from "../../../assets/icons/CopyIcon";
import useToast from "../../../store/toast/useToast";
import * as St from "../styles/ComeStyle";
import ComeMap from "./ComeMap";
const ComePage = () => {
  const [hover, setHover] = useState(false);
  const { showToast } = useToast();

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText("제주도 서귀포시 중문로 123");
      showToast({ message: "복사 성공!" });
    } catch (err) {
      console.error("clip board 복사 실패", err);
    }
  };

  return (
    <St.ComeWrapper>
      <St.ComeHeading>오시는 길</St.ComeHeading>
      <St.ComeMainTextWrapper>
        <St.ComeMainText
          hover={hover}
          pointer
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          제주도 서귀포시 중문로 123
          <CopyIcon />
        </St.ComeMainText>
        <St.ComeMainText>064-123-4567</St.ComeMainText>
      </St.ComeMainTextWrapper>
      <ComeMap />
    </St.ComeWrapper>
  );
};

export default ComePage;
