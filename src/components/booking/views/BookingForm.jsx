import BookingTimePicker from "../components/formSection/BookingTimePicker";
import ImportantNotes from "../components/formSection/ImportantNotes";
import OptionSelector from "../components/formSection/OptionSelector";
import PersonalInformation from "../components/formSection/PersonalInformation";
import * as St from "../../booking/styles/BookingStyles";

export default function BookingForm({
  onChangePersonalInfo,
  personalInfoValues,
  time,
  onChangeTime,
  options,
  onChangeOption,
}) {
  return (
    <St.BookingFormContainer>
      <ImportantNotes />
      <PersonalInformation
        onChangePersonalInfo={onChangePersonalInfo}
        personalInfoValues={personalInfoValues}
      />
      <OptionSelector
        selectedOptions={options}
        onChangeOption={onChangeOption}
      />
      <BookingTimePicker selectedTime={time} onChangeTime={onChangeTime} />
    </St.BookingFormContainer>
  );
}
