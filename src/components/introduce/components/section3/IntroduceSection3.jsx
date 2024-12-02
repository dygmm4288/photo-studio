import * as St from "../../styles/IntroduceStyle";
import { introduceLargeImage, introduceSmallImages } from "./const";

const IntroduceSection3 = () => {
  return (
    <St.IntroduceSection3Wrapper>
      <St.IntroduceSection3LargeImageWrapper>
        <img src={introduceLargeImage} />
      </St.IntroduceSection3LargeImageWrapper>
      <St.IntroduceSection3RightWrapper>
        <St.IntroduceSection3TextWrapper>
          <St.IntroduceCategory>Hidden Spot</St.IntroduceCategory>
          <St.IntroduceHeading>주요 촬영 스팟</St.IntroduceHeading>
          <St.IntroduceText>
            제주의 아름다운 자연을 배경으로 촬영하며, 오름과 해변, 돌담길 같은
            독특한 스팟에서 특별한 경험을 제공합니다.
          </St.IntroduceText>
        </St.IntroduceSection3TextWrapper>
        <St.IntroduceSection3SmallImageWrapper>
          {introduceSmallImages.map((src) => (
            <img src={src} key={src} />
          ))}
        </St.IntroduceSection3SmallImageWrapper>
      </St.IntroduceSection3RightWrapper>
    </St.IntroduceSection3Wrapper>
  );
};

export default IntroduceSection3;
