import BookingTimePicker from "../components/formSection/BookingTimePicker";
import ImportantNotes from "../components/formSection/ImportantNotes";
import OptionSelector from "../components/formSection/OptionSelector";
import PersonalInformation from "../components/formSection/PersonalInformation";
import * as St from "../../booking/styles/BookingStyles";

export default function BookingForm() {
  return (
    <St.BookingWrapper>
      <St.FormHeaderTitle>예약하기</St.FormHeaderTitle>
      <St.FormHeaderDescText>
        원하시는 날짜를 선택하시고, 아래의 예약 신청서를 작성해 주세요.
      </St.FormHeaderDescText>
      <St.BookingFormContainer>
        <ImportantNotes />
        <PersonalInformation />
        <OptionSelector />
        <BookingTimePicker />
      </St.BookingFormContainer>
    </St.BookingWrapper>
  );
}
