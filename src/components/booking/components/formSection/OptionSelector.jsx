import * as St from "../../../booking/styles/BookingStyles";
import { availableOptions } from "../../data/availableOptions";
import { useBookingStore } from "../../store/useBookingStore";

export default function OptionSelector() {
  const { selectedOption, setSelectedOption } = useBookingStore();
  const onChangeOptionSelector = (option) => {
    setSelectedOption(option);
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
                  checked={selectedOption?.product === option.product}
                  onChange={() => onChangeOptionSelector(option)}
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
