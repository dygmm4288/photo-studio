import * as St from "../../booking/styles/BookingStyles";
import BookingConfirmationBar from "../components/formSection/BookingConfirmationBar";
import BookingCalendar from "../components/calendarSection/BookingCalendar";
import BookingForm from "./BookingForm";
import { useState } from "react";

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedTime, setSeletedTime] = useState([]);
  const [personalInfo, setPersonalInfo] = useState({
    username: "",
    phone: "",
    email: "",
  });

  const onChangePersonalInfo = (field, value) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  const onChangeOptionSelector = (options) => {
    setSelectedOption(options);
  };

  const onChangeTimePicker = (time) => {
    setSeletedTime(time);
  };

  return (
    <St.BookingContainer>
      <St.BookingWrapper>
        <BookingCalendar onDateSelect={setSelectedDate} />
        <BookingForm
          personalInfoValues={personalInfo}
          onChangePersonalInfo={onChangePersonalInfo}
          time={selectedTime}
          onChangeTime={onChangeTimePicker}
          options={selectedOption}
          onChangeOption={onChangeOptionSelector}
        />
      </St.BookingWrapper>
      <BookingConfirmationBar
        personalInfo={personalInfo}
        selectedDate={selectedDate}
        selectedOptions={selectedOption}
        selectedTime={selectedTime}
      />
    </St.BookingContainer>
  );
}
