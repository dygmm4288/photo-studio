import * as St from "../../booking/styles/BookingStyles";
import BookingConfirmationBar from "../components/formSection/BookingConfirmationBar";
import BookingCalendar from "../components/calendarSection/BookingCalendar";
import BookingForm from "./BookingForm";
export default function Booking() {
  return (
    <div>
      <St.BookingWrapper>
        <BookingCalendar />
        <BookingForm />
      </St.BookingWrapper>
      <BookingConfirmationBar />
    </div>
  );
}
