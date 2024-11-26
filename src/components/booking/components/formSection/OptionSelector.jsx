import * as St from "../../../booking/styles/BookingStyles";

const availableOptions = [
  {
    product: "기본 스냅 촬영",
    price: "50,000 원",
    includes: "30분 촬영 + 사진 10컷 제공",
    duration: 0.5,
  },
  {
    product: "프리미엄 스냅 촬영",
    price: "100,000 원",
    includes: "1시간 촬영 + 사진 30컷 제공 + 소품 대여",
    duration: 1,
  },
  {
    product: "웨딩 스냅 촬영",
    price: "200,000 원",
    includes: "2시간 촬영 + 사진 50컷 제공 + 의상 대여",
    duration: 2,
  },
  {
    product: "가족 및 단체 스냅 패키지",
    price: "150,000 원",
    includes: "1.5시간 촬영 + 사진 40컷 제공",
    duration: 1.5,
  },
];

export default function OptionSelector({ selectedOption, onChangeOption }) {
  const handleToggleOption = (product) => {
    onChangeOption(product);
  };

  return (
    <St.FromSectionWrapper>
      <St.FormSectionDescText>
        원하시는 옵션을 선택해 주세요.
      </St.FormSectionDescText>
      {availableOptions.map((option) => {
        return (
          <div key={option.product}>
            <St.OptionCheckboxContainer>
              <St.OptionCheckboxWrapper>
                <input
                  type="radio"
                  id={option.product}
                  name={option.product}
                  value={option.product}
                  checked={selectedOption === option.product}
                  onChange={() => handleToggleOption(option.product)}
                />
                <label htmlFor={option.product}>{option.product}</label>
              </St.OptionCheckboxWrapper>
              <span>{option.price}</span>
            </St.OptionCheckboxContainer>
            <St.OptionIncludesText>{option.includes}</St.OptionIncludesText>
          </div>
        );
      })}
    </St.FromSectionWrapper>
  );
}
