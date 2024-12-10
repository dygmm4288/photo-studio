import { useEffect, useState } from "react";
import * as St from "../../../booking/styles/BookingStyles";
import ButtonCheckbox from "../../../common/components/ButtonCheckbox";
import { arrayToTimeObject, timeSlotsObject } from "../../data/timeSlots";
import { useBookingStore } from "../../store/useBookingStore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../lib/firebase";

export default function BookingTimePicker() {
  const { selectedOption, selectedTime, setSelectedTime, selectedDate } =
    useBookingStore();
  const maxTimeSlots = (selectedOption?.duration || 0) * 2;
  const [timeSlots, setTimeSlots] = useState({ ...timeSlotsObject });
  const [infoMessage, setInfoMessage] = useState("");

  // 파이어베이스에서 선택한 날짜의 예약된 시간을 가져오는 함수
  const getBookedTimes = async (selectedDate) => {
    if (!selectedDate) return;

    const bookingsCollection = await getDocs(collection(db, "bookings"));
    const bookings = bookingsCollection.docs
      .map((doc) => doc.data())
      .filter(
        (data) =>
          data.booking.date.toDate().toISOString().split("T")[0] ===
          selectedDate
      );

    return arrayToTimeObject(bookings.map((data) => data.booking.times).flat());
  };

  const handleTimeSelect = (time) => {
    const startIndex = Object.keys(timeSlots).indexOf(time); // 선택한 시간의 인덱스
    const endIndex = startIndex + maxTimeSlots; // 선택한 시간의 인덱스 + 최대 선택 가능 개수

    const selectStartToEndTimes = Object.keys(timeSlots).slice(
      startIndex,
      endIndex
    ); // 선택한 시간의 인덱스부터 최대 선택 가능 개수까지 시간 배열
    const bookedTimes = selectStartToEndTimes.filter((t) => timeSlots[t]); // 이미 다른 사람이 예약한 시간의 배열

    if (bookedTimes.length > 0) {
      // e.g. 선택한 시간이 10:00이고, 최대 선택 가능 개수가 4개라면, 10:00 ~ 12:00 사이에 예약된 시간이 있는 경우
      setInfoMessage(
        `이미 예약된 시간이 있습니다. ${bookedTimes.join(
          ", "
        )}은 예약이 불가능 합니다.`
      );
    } else if (endIndex > Object.keys(timeSlots).length) {
      setInfoMessage(`마감 30분 전에는 예약이 불가능 합니다.`);
    } else {
      setSelectedTime(selectStartToEndTimes);
      setInfoMessage("");
    }
  };

  useEffect(() => {
    const getBookings = async () => {
      const bookedTimes = await getBookedTimes(selectedDate);
      const updatedTimeSlots = { ...timeSlotsObject, ...bookedTimes };
      setTimeSlots(updatedTimeSlots);
    };

    getBookings();
  }, [selectedDate]);

  useEffect(() => {
    setInfoMessage("");
  }, [selectedOption]);

  return (
    <St.FromSectionWrapper>
      <St.FormSectionDescText>
        원하시는 시간을 선택해주세요
        <St.BookingTimeSlotInfoMessage>
          {infoMessage}
        </St.BookingTimeSlotInfoMessage>
      </St.FormSectionDescText>
      <St.BookingTimeSlotWrapper>
        {Object.keys(timeSlots).map((time) => (
          <ButtonCheckbox
            key={time}
            label={time}
            value={time}
            checked={selectedTime.includes(time)}
            disabled={timeSlots[time]}
            onChange={() => handleTimeSelect(time)}
          />
        ))}
      </St.BookingTimeSlotWrapper>
    </St.FromSectionWrapper>
  );
}
