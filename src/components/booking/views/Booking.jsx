import * as St from "../../booking/styles/BookingStyles";
import BookingCalendar from "../components/calendarSection/BookingCalendar";
import BookingConfirmationBar from "../components/formSection/BookingConfirmationBar";
import BookingForm from "./BookingForm";

export default function Booking() {
  return (
    <St.BookingContainer>
      <BookingCalendar />
      <BookingForm />
      <BookingConfirmationBar />
    </St.BookingContainer>
  );
}
