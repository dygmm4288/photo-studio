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
  option,
  onChangeOption,
  bookedTimes,
  agreeImportantNotes,
  onChangeAgreeImportantNotes,
}) {
  return (
    <St.BookingFormContainer>
      <ImportantNotes
        agreeImportantNotes={agreeImportantNotes}
        onChangeAgreeImportantNotes={onChangeAgreeImportantNotes}
      />
      <PersonalInformation
        onChangePersonalInfo={onChangePersonalInfo}
        personalInfoValues={personalInfoValues}
      />
      <OptionSelector selectedOption={option} onChangeOption={onChangeOption} />
      <BookingTimePicker
        selectedTime={time}
        onChangeTime={onChangeTime}
        selectedOption={option}
        bookedTimes={bookedTimes}
      />
    </St.BookingFormContainer>
  );
}
