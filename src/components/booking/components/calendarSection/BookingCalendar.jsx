import * as St from "../../../booking/styles/BookingStyles";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useBookings } from "../../hooks/useBookings";
import { useBookingStore } from "../../store/useBookingStore";

export default function BookingCalendar() {
  const { setSelectedDate } = useBookingStore();
  const { bookings } = useBookings();

  const handleSelectDate = (arg) => {
    setSelectedDate(arg.dateStr);
  };

  const events = bookings.map((booking) => ({
    title: booking.status,
    date: booking.date,
  }));

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      eventBackgroundColor="red"
      initialView="dayGridMonth"
      selectable={true}
      dateClick={handleSelectDate}
      events={events}
      width="100%"
      height="100%"
      eventContent={(eventInfo) => (
        <St.BookingCalendarTitle title={eventInfo.event.title}>
          {eventInfo.event.title}
        </St.BookingCalendarTitle>
      )}
    />
  );
}
