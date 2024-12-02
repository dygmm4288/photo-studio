import * as St from "../styles/IntroduceStyle";
import IntroduceSection1 from "./section1/IntroduceSection1";
import IntroduceSection3 from "./section3/IntroduceSection3";

const Introduce = () => {
  return (
    <St.IntroduceWrapper>
      <St.IntroduceHeader>
        <St.IntroduceHeaderHeading>
          포레스트 픽처스 소개
        </St.IntroduceHeaderHeading>
        <St.IntroduceHeaderText>
          제주의 자연을 배경으로 감성적인 순간을 기록하기 위해 설립된 포레스트
          픽쳐스는 특별한 순간을 평생 간직할 수 있는 사진으로 남겨 드립니다.
        </St.IntroduceHeaderText>
      </St.IntroduceHeader>
      <IntroduceSection1 />

      <IntroduceSection3 />
    </St.IntroduceWrapper>
  );
};

export default Introduce;
