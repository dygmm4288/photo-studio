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
      events={events}
      eventContent={(eventInfo) => (
        <div>
          <p>{eventInfo.event.title}</p>
        </div>
      )}
    />
  );
}
