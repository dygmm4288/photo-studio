import * as St from "../../booking/styles/BookingStyles";
import BookingConfirmationBar from "../components/formSection/BookingConfirmationBar";
import BookingCalendar from "../components/calendarSection/BookingCalendar";
import BookingForm from "./BookingForm";
import { useState } from "react";
import { useBookings } from "../hooks/useBookings";

export default function Booking() {
  const { bookings } = useBookings();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedTime, setSeletedTime] = useState([]);
  const [personalInfo, setPersonalInfo] = useState({
    username: "",
    phone: "",
    email: "",
  });

  const onChangePersonalInfo = (field, value) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  const onChangeOptionSelector = (option) => {
    setSelectedOption(option);
  };

  const onChangeTimePicker = (time) => {
    setSeletedTime(time);
  };

  const getBookedTimesForDate = (date) => {
    if (!date || !bookings) return [];

    const booking = bookings.find((reserved) => {
      const reservedDate = reserved.date.toISOString().split("T")[0];
      return reservedDate === date;
    });

    return booking ? booking.times : [];
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
          option={selectedOption}
          onChangeOption={onChangeOptionSelector}
          bookedTimes={getBookedTimesForDate(selectedDate)}
        />
      </St.BookingWrapper>
      <BookingConfirmationBar
        personalInfo={personalInfo}
        selectedDate={selectedDate}
        selectedOption={selectedOption}
        selectedTime={selectedTime}
      />
    </St.BookingContainer>
  );
}
