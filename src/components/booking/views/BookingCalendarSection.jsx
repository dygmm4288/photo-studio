import BookingCalendar from "../components/calendarSection/BookingCalendar";

export default function BookingCalendarSection() {
  return (
    <div>
      <h2>예약하기</h2>
      <p>원하시는 날짜를 선택하시고, 아래의 예약 신청서를 작성해 주세요.</p>
      <BookingCalendar />
    </div>
  );
}
