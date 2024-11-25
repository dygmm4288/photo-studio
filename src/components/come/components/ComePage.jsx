import * as St from "../styles/ComeStyle";
import ComeMap from "./ComeMap";

const ComePage = () => {
  return (
    <St.ComeWrapper>
      <St.ComeHeading>오시는 길</St.ComeHeading>
      <ComeMap />
    </St.ComeWrapper>
  );
};

export default ComePage;
