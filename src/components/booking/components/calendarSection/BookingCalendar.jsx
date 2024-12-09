import * as St from "../../../booking/styles/BookingStyles";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useBookings } from "../../hooks/useBookings";
import { useBookingStore } from "../../store/useBookingStore";

export default function BookingCalendar() {
  const titleLabel = ["휴일", "마감", "예약가능"];
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
    <St.BookingCalendarWrapper>
      <St.BookingCalendarHeader>
        <St.FormHeaderTitle>예약하기</St.FormHeaderTitle>
        <St.FormHeaderLabel>
          {titleLabel.map((label) => (
            <St.BookingCalendarTitle key={label} title={label}>
              {label}
            </St.BookingCalendarTitle>
          ))}
        </St.FormHeaderLabel>
        <St.FormHeaderDescText>
          원하시는 날짜를 선택하시고, 아래의 예약 신청서를 작성해 주세요.
        </St.FormHeaderDescText>
      </St.BookingCalendarHeader>
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
    </St.BookingCalendarWrapper>
  );
}
