import ServiceInfo from "../components/serviceSection/ServiceInfo";
import * as St from "../styles/HomeStyle";
import SecondItemBg from "/assets/ServiceSecond.jpg";
import ThirdItemBg from "/assets/ServiceThird.jpg";
import FourthItemBg from "/assets/ServiceFourth.jpg";
import ServiceFirstItem from "../components/serviceSection/ServiceFirstItem";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";

export default function ServiceSection() {
  const { ref: animationTriggerPoint, inView } = useInView({ threshold: 0.1 });
  const [animationState, setAnimationState] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimationState(true);
    }
  }, [inView]);

  return (
    <React.Fragment>
      <span style={{ height: "1px" }} ref={animationTriggerPoint}></span>
      <St.ServiceSectionWrapper>
        <ServiceFirstItem
          titleSub={"Our Services"}
          title={"포레스트 픽쳐스의 서비스"}
          description={`제주만의 감성으로 가득한다양한 스냅 촬영 서비스를\n제공 해드립니다. 가족, 연인, 그리고 소중한 친구들과 함께하는 제주 에서의 특별한 순간을 기록해보세요.`}
          buttonText={"상세보기"}
          runAnimation={animationState}
        />

        <ServiceInfo
          bg={SecondItemBg}
          infoNumber={1}
          infoText={`자연광으로\n촬영하는\n제주 감성 스냅샷`}
          runAnimation={animationState}
        />

        <ServiceInfo
          bg={ThirdItemBg}
          infoNumber={2}
          infoText={`여행 기록 사진\n및 가족 사진`}
          runAnimation={animationState}
        />

        <ServiceInfo
          bg={FourthItemBg}
          infoNumber={3}
          infoText={`맞춤형 웨딩\n스냅 촬영 서비스`}
          runAnimation={animationState}
        />
      </St.ServiceSectionWrapper>
    </React.Fragment>
  );
}
