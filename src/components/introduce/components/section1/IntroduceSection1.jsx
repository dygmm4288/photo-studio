import * as St from "../../styles/IntroduceStyle";
import { introduceLeftImages, introduceRightImages } from "./const";

const IntroduceSection1 = () => {
  return (
    <St.IntroduceSection1Wrapper>
      <St.IntroduceSection1ImageWrapper>
        <div>
          {introduceLeftImages.map((image) => (
            <img key={image} src={image} />
          ))}
        </div>
        <div>
          {introduceRightImages.map((image) => (
            <img key={image} src={image} />
          ))}
        </div>
      </St.IntroduceSection1ImageWrapper>
      <St.IntroduceSection1TextWrapper>
        <St.IntroduceCategoryHeaderWrapper>
          <St.IntroduceCategory>About Us</St.IntroduceCategory>
          <St.IntroduceHeading>포레스트 픽처스</St.IntroduceHeading>
        </St.IntroduceCategoryHeaderWrapper>
        <St.IntroduceSection1DetailWrapper>
          <St.IntroduceText>
            포레스트 픽쳐스는 자연광과 조명을 활용한 감각적인 실내 스튜디오와
            돌담, 꽃길 등 제주만의 자연이 어우러진 야외 촬영 공간을 갖추고
            있습니다.
          </St.IntroduceText>
          <St.IntroduceText>
            빈티지, 자연, 모던 등 다양한 테마의 배경과 소품이 구비되어 있으며,
            편안한 대기실과 개별 환복실을 통해 고객에게 아늑한 촬영 환경을
            제공합니다.
          </St.IntroduceText>
          <St.IntroduceText>
            촬영 후에는 고화질 디스플레이를 통해 결과물을 미리 확인하고, 세심한
            리터칭 서비스를 받을 수 있습니다.
          </St.IntroduceText>
        </St.IntroduceSection1DetailWrapper>
      </St.IntroduceSection1TextWrapper>
    </St.IntroduceSection1Wrapper>
  );
};

export default IntroduceSection1;
