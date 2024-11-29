import * as St from "../../styles/BookingStyles";
import { db } from "../../../../lib/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function BookingConfirmationBar({
  selectedDate,
  personalInfo,
  selectedOption,
  selectedTime,
}) {
  const handleBooking = async () => {
    try {
      const bookingData = {
        email: personalInfo.email,
        username: personalInfo.username,
        phone: personalInfo.phone,
        selectedProduct: {
          name: selectedOption.product,
          duration: selectedOption.duration,
        },
        selectedDate: new Date(selectedDate),
        selectedTime: selectedTime,
      };

      await addDoc(collection(db, "booking"), bookingData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <St.BookingConfirmationBarContainer>
      <St.BookingInfoWrapper>
        <div>
          <p>
            {personalInfo.username} 님,
            <St.BookingInfo>
              {selectedDate} {selectedTime}
            </St.BookingInfo>
            을(를) 선택하셨습니다.
          </p>
          <br />
          <p>
            선택하신 옵션은
            <St.BookingInfo>{selectedOption?.product}</St.BookingInfo>입니다.
          </p>
        </div>
        <St.BookingButton onClick={handleBooking}>예약하기</St.BookingButton>
      </St.BookingInfoWrapper>
    </St.BookingConfirmationBarContainer>
  );
}
