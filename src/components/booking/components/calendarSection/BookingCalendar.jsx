import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function BookingCalendar({ onDateSelect }) {
  const handleSelectDate = (arg) => {
    console.log(arg);
    onDateSelect(arg.dateStr);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      dateClick={handleSelectDate}
    />
  );
}
