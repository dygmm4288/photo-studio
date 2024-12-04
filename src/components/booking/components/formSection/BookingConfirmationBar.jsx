import { addDoc, collection } from "firebase/firestore";
import _ from "lodash";
import { db } from "../../../../lib/firebase";
import * as St from "../../styles/BookingStyles";

const NO_NAME = "______ ";

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

  const username = personalInfo.username || NO_NAME;
  const date = selectedDate || NO_NAME;
  const times = _.isEmpty(selectedTime)
    ? NO_NAME
    : selectedTime.sort().join(", ");

  return (
    <St.BookingConfirmationBarContainer>
      <St.BookingInfoWrapper>
        <div>
          <p>
            <St.BookingInfo>{username}</St.BookingInfo>
            님, 선택하신 날짜는
            <St.BookingInfo>{date}</St.BookingInfo>
            이고, 선택하신 시간은
            <St.BookingInfo>{times}</St.BookingInfo>
            입니다.
          </p>
          <br />
          <p>
            선택하신 옵션은
            <St.BookingInfo>{selectedOption?.product}</St.BookingInfo>입니다.
          </p>
        </div>
        <St.BookingButton
          onClick={handleBooking}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          예약하기
        </St.BookingButton>
      </St.BookingInfoWrapper>
    </St.BookingConfirmationBarContainer>
  );
}
