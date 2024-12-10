import * as St from "../../../booking/styles/BookingStyles";
import InputRadio from "../../../common/components/InputRadio";
import { availableOptions } from "../../data/availableOptions";
import { useBookingStore } from "../../store/useBookingStore";

export default function OptionSelector() {
  const { selectedOption, setSelectedOption, setSelectedTime } =
    useBookingStore();
  const onChangeOptionSelector = (option) => {
    setSelectedOption(option);
    setSelectedTime([]);
  };

  return (
    <St.FromSectionWrapper>
      <St.FormSectionDescText>
        원하시는 옵션을 선택해 주세요.
      </St.FormSectionDescText>
      {availableOptions.map((option) => {
        console.log(selectedOption.product);
        return (
          <div key={option.product}>
            <St.OptionRadioButtonContainer>
              <St.OptionCheckboxWrapper>
                <InputRadio
                  name={option.product}
                  value={option.product}
                  id={option.product}
                  checked={selectedOption?.product === option.product}
                  onChange={() => onChangeOptionSelector(option)}
                />
                <St.OptionRadioButtonLabel>
                  {option.product}
                </St.OptionRadioButtonLabel>
              </St.OptionCheckboxWrapper>
              <St.OptionRadioButtonLabel>
                {option.price}
              </St.OptionRadioButtonLabel>
            </St.OptionRadioButtonContainer>
            <St.OptionIncludesText>{option.includes}</St.OptionIncludesText>
          </div>
        );
      })}
    </St.FromSectionWrapper>
  );
}
