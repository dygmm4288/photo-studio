import * as St from "../../styles/BookingStyles";
import { db } from "../../../../lib/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function BookingConfirmationBar({
  selectedDate,
  personalInfo,
  selectedOption,
  selectedTime,
  agreeImportantNotes,
}) {
  const handleBooking = async () => {
    // TODO: TOAST ALERT으로 변경
    if (!selectedDate) {
      alert("날짜를 선택해주세요.");
      return;
    } else if (selectedOption && !selectedTime.length) {
      alert("시간을 선택해주세요.");
      return;
    } else if (!agreeImportantNotes) {
      alert("중요 공지사항에 동의해주세요.");
      return;
    } else if (!personalInfo.email) {
      alert("이메일을 입력해주세요.");
      return;
    } else if (!personalInfo.phone) {
      alert("휴대폰 번호를 입력해주세요.");
      return;
    } else if (!personalInfo.username) {
      alert("이름을 입력해주세요.");
      return;
    } else if (!selectedOption) {
      alert("옵션을 선택해주세요.");
      return;
    }

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
            {personalInfo.username
              ? `${personalInfo.username} 님,`
              : "______님,"}
            선택하신 날짜는
            <St.BookingInfo>
              {selectedDate ? selectedDate : "______"}
            </St.BookingInfo>
            이고, 선택하신 시간은
            <St.BookingInfo>
              {selectedTime.length > 0
                ? selectedTime.sort().join(" ")
                : "______"}
            </St.BookingInfo>
            입니다.
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
