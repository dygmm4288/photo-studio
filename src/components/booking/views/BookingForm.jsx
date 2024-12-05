import BookingTimePicker from "../components/formSection/BookingTimePicker";
import ImportantNotes from "../components/formSection/ImportantNotes";
import OptionSelector from "../components/formSection/OptionSelector";
import PersonalInformation from "../components/formSection/PersonalInformation";
import * as St from "../../booking/styles/BookingStyles";

export default function BookingForm() {
  return (
    <St.BookingFormContainer>
      <ImportantNotes />
      <PersonalInformation />
      <OptionSelector />
      <BookingTimePicker />
    </St.BookingFormContainer>
  );
}
