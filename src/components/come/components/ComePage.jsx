import CopyIcon from "../../../assets/icons/CopyIcon";
import * as St from "../styles/ComeStyle";
import ComeMap from "./ComeMap";
const ComePage = () => {
  return (
    <St.ComeWrapper>
      <St.ComeHeading>오시는 길</St.ComeHeading>
      <St.ComeMainTextWrapper>
        <St.ComeMainText>
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
