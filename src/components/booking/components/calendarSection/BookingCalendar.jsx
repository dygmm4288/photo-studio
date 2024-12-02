import * as St from "../../../booking/styles/BookingStyles";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useBookings } from "../../hooks/useBookings";

export default function BookingCalendar({ onDateSelect }) {
  const { bookings } = useBookings();

  const events = bookings.map((booking) => ({
    title: booking.status,
    date: booking.date,
  }));

  const handleSelectDate = (arg) => {
    onDateSelect(arg.dateStr);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      dateClick={handleSelectDate}
      themeSystem="bootstrap5"
      aspectRatio={2}
      events={events}
      width={"100%"}
      height={"100%"}
      eventContent={(eventInfo) => (
        <div>
          <St.BookingCalendarTitle title={eventInfo.event.title}>
            {eventInfo.event.title}
          </St.BookingCalendarTitle>
        </div>
      )}
    />
  );
}
