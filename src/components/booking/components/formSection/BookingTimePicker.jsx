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

  // 선택된 시간을 저장하는 함수
  const onChangeTimePicker = (time) => {
    setSelectedTime(time);
  };

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

  useEffect(() => {
    const getBookings = async () => {
      const bookedTimes = await getBookedTimes(selectedDate);

      const updatedTimeSlots = { ...timeSlotsObject, ...bookedTimes };
      setTimeSlots(updatedTimeSlots);
    };

    getBookings();
  }, [selectedDate]);

  // 사용자가 옵션을 변경했을 때, 선택된 시간 초기화
  useEffect(() => {
    setTimeSlots({ ...timeSlotsObject });
    setSelectedTime([]);
  }, [selectedOption]);

  const handleTimeSelect = (time) => {
    if (selectedTime.includes(time)) {
      // 이미 선택된 시간을 클릭한 경우 선택 해제
      onChangeTimePicker(selectedTime.filter((t) => t !== time));
    } else if (selectedTime.length < maxTimeSlots) {
      // 새로운 시간을 선택해서 배열에 추가
      onChangeTimePicker([...selectedTime, time]);
    }
  };

  return (
    <St.FromSectionWrapper>
      <St.FormSectionDescText>
        원하시는 시간을 선택해주세요
      </St.FormSectionDescText>
      <St.BookingTimeSlotWrapper>
        {Object.keys(timeSlots).map((time) => (
          <ButtonCheckbox
            key={time}
            label={time}
            value={time}
            checked={selectedTime.includes(time)}
            disabled={
              // 이미 예약된 시간이거나, 최대 선택 가능 개수를 초과한 경우 Disabled
              timeSlots[time] ||
              (selectedTime.length >= maxTimeSlots &&
                !selectedTime.includes(time))
            }
            onChange={() => handleTimeSelect(time)}
          />
        ))}
      </St.BookingTimeSlotWrapper>
    </St.FromSectionWrapper>
  );
}
