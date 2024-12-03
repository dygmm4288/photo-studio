import { useState } from "react";
import * as St from "../../styles/IntroduceStyle";
import { introduceImage, navItems } from "./const";

const IntroduceSection2 = () => {
  const [selected, setSelected] = useState(0);
  const selectedNavItem = navItems[selected];

  return (
    <St.IntroduceSection2Wrapper>
      <St.IntroduceSection2Header>
        <St.IntroduceCategory>Our Service & Style</St.IntroduceCategory>
        <St.IntroduceHeaderHeading style={{ color: "white" }}>
          <p className='heading'>
            포레스트 픽처스 서비스 <br /> & 촬영스타일
          </p>
        </St.IntroduceHeaderHeading>
      </St.IntroduceSection2Header>
      <St.IntroduceSection2Nav>
        {navItems.map((item, index) => (
          <div
            className={selected === index && "selected"}
            onClick={() => setSelected(index)}
            key={item.title}>
            {item.title}
          </div>
        ))}
      </St.IntroduceSection2Nav>
      <img src={introduceImage} />
      <St.IntroduceSection2Footer>
        <St.IntroduceSection2OptionTextWrapper>
          <p className='badge'>예약시 옵션</p>
          <div className='text-wrapper'>
            <h2>{selectedNavItem.subTitle.h}</h2>
            <span>{selectedNavItem.subTitle.span}</span>
          </div>
        </St.IntroduceSection2OptionTextWrapper>
        <St.IntroduceSection2TextWrapper>
          {selectedNavItem.contents.map((content) => (
            <div key={content.title}>
              <h3>{content.title}</h3>
              <span>{content.content}</span>
            </div>
          ))}
        </St.IntroduceSection2TextWrapper>
      </St.IntroduceSection2Footer>
    </St.IntroduceSection2Wrapper>
  );
};

export default IntroduceSection2;