import * as St from "../../booking/styles/BookingStyles";
import BookingConfirmationBar from "../components/formSection/BookingConfirmationBar";
import BookingCalendar from "../components/calendarSection/BookingCalendar";
import BookingForm from "./BookingForm";

export default function Booking() {
  const handleSubmit = () => {
    console.log("submit");
  };
  return (
    <St.BookingContainer>
      <St.BookingWrapper>
        <BookingCalendar />
        <BookingForm onSubmit={handleSubmit} />
      </St.BookingWrapper>
      <BookingConfirmationBar />
    </St.BookingContainer>
  );
}
