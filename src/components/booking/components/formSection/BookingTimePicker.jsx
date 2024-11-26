import * as St from "../../../booking/styles/BookingStyles";
import ButtonCheckbox from "../../../common/components/ButtonCheckbox";

const timeSlots = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
];

export default function BookingTimePicker({ selectedTime, onChangeTime }) {
  return (
    <St.FromSectionWrapper>
      <St.FormSectionDescText>
        원하시는 시간을 선택해주세요
      </St.FormSectionDescText>
      <St.BookingTimeSlotWrapper>
        {timeSlots.map((time) => (
          <ButtonCheckbox key={time} label={time}></ButtonCheckbox>
        ))}
      </St.BookingTimeSlotWrapper>
    </St.FromSectionWrapper>
  );
}
