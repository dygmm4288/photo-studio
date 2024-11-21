import BookingTimePicker from "../components/formSection/BookingTimePicker";
import ImportantNotes from "../components/formSection/ImportantNotes";
import OptionSelector from "../components/formSection/OptionSelector";
import PersonalInformation from "../components/formSection/PersonalInformation";

export default function BookingForm() {
  return (
    <div>
      <form>
        <ImportantNotes />
        <PersonalInformation />
        <OptionSelector />
        <BookingTimePicker />
      </form>
    </div>
  );
}
