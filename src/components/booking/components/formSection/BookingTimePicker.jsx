import * as St from "../../../booking/styles/BookingStyles";
import ButtonCheckbox from "../../../common/components/ButtonCheckbox";
import { timeSlots } from "../../data/timeSlots";

export default function BookingTimePicker({
  selectedTime,
  selectedOption,
  onChangeTime,
  bookedTimes = [],
}) {
  const maxTimeSlots = (selectedOption?.duration || 0) * 2;

  console.log(bookedTimes);
  const onChageTimeSlots = (time) => {
    if (selectedTime.includes(time)) {
      const updateTime = selectedTime.filter((t) => t !== time);
      onChangeTime(updateTime);
    } else if (selectedTime.length < maxTimeSlots) {
      const updateTime = [...selectedTime, time];
      onChangeTime(updateTime);
    }
  };
  return (
    <St.FromSectionWrapper>
      <St.FormSectionDescText>
        원하시는 시간을 선택해주세요
      </St.FormSectionDescText>
      <St.BookingTimeSlotWrapper>
        {timeSlots.map((time) => (
          <ButtonCheckbox
            key={time}
            label={time}
            value={time}
            checked={selectedTime.includes(time)}
            disabled={
              // 이미 예약된 시간이거나, 최대 선택 가능 개수를 초과한 경우
              bookedTimes.includes(time) ||
              (selectedTime.length >= maxTimeSlots &&
                !selectedTime.includes(time))
            }
            onChange={() => onChageTimeSlots(time)}
          />
        ))}
      </St.BookingTimeSlotWrapper>
    </St.FromSectionWrapper>
  );
}
