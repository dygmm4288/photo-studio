import * as St from "../../booking/styles/BookingStyles";
// import BookingCalendar from "../components/calendarSection/BookingCalendar";
import BookingForm from "./BookingForm";
export default function Booking() {
  return (
    <St.BookingWrapper>
      {/* <BookingCalendar /> */}
      <BookingForm />
    </St.BookingWrapper>
  );
}
