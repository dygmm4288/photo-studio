import * as St from "../../styles/BookingStyles";
import _ from "lodash";
import useToast from "../../../../store/toast/useToast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import { ToastPosition, ToastType } from "../../../../store/toast/toast.const";
import { useNavigate } from "react-router";
import { useBookingStore } from "../../store/useBookingStore";

const NO_NAME = "______ ";

export default function BookingConfirmationBar() {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const {
    personalInfo,
    selectedDate,
    selectedOption,
    selectedTime,
    agreeImportantNotes,
    setPersonalInfo,
    setSelectedDate,
    setSelectedOption,
    setSelectedTime,
    setAgreeImportantNotes,
  } = useBookingStore();

  const handleBooking = async () => {
    if (!selectedDate) {
      showToast({
        message: "날짜를 선택해주세요.",
        type: ToastType.WARNING,
        position: ToastPosition.TOP_RIGHT,
        icon: true,
        showCloseBtn: true,
      });
      return;
    } else if (selectedOption && !selectedTime.length) {
      showToast({
        message: "시간을 선택해주세요.",
        type: ToastType.WARNING,
        position: ToastPosition.TOP_RIGHT,
        icon: true,
        showCloseBtn: true,
      });
      return;
    } else if (!agreeImportantNotes) {
      showToast({
        message: "중요 공지사항에 동의해주세요.",
        type: ToastType.WARNING,
        position: ToastPosition.TOP_RIGHT,
        icon: true,
        showCloseBtn: true,
      });
      return;
    } else if (!personalInfo.email) {
      showToast({
        message: "이메일을 입력해주세요.",
        type: ToastType.WARNING,
        position: ToastPosition.TOP_RIGHT,
        icon: true,
        showCloseBtn: true,
      });
      return;
    } else if (!personalInfo.phone) {
      showToast({
        message: "휴대폰 번호를 입력해주세요.",
        type: ToastType.WARNING,
        position: ToastPosition.TOP_RIGHT,
        icon: true,
        showCloseBtn: true,
      });
      return;
    } else if (!personalInfo.username) {
      showToast({
        message: "이름을 입력해주세요.",
        type: ToastType.WARNING,
        position: ToastPosition.TOP_RIGHT,
        icon: true,
        showCloseBtn: true,
      });
      return;
    } else if (!selectedOption) {
      showToast({
        message: "옵션을 선택해주세요.",
        type: ToastType.WARNING,
        position: ToastPosition.TOP_RIGHT,
        icon: true,
        showCloseBtn: true,
      });
      return;
    }

    try {
      const bookingData = {
        email: personalInfo.email,
        username: personalInfo.username,
        phone: personalInfo.phone,
        product: {
          name: selectedOption.product,
          duration: selectedOption.duration,
        },
        booking: {
          date: new Date(selectedDate),
          times: selectedTime,
        },
      };

      await addDoc(collection(db, "bookings"), bookingData);
      setPersonalInfo({});
      setSelectedDate("");
      setSelectedOption("");
      setSelectedTime([]);
      setAgreeImportantNotes(false);

      showToast({
        message: "예약이 완료되었습니다.",
        type: ToastType.SUCCESS,
        position: ToastPosition.TOP_RIGHT,
        icon: true,
        showCloseBtn: true,
      });
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      console.error(error);
    }
  };

  const username = personalInfo.username || NO_NAME;
  const date = selectedDate || NO_NAME;
  const times = _.isEmpty(selectedTime)
    ? NO_NAME
    : `${selectedTime.join(" , ")}`;
  const option = _.isEmpty(selectedOption?.product)
    ? NO_NAME
    : selectedOption?.product;

  return (
    <St.BookingConfirmationBarContainer>
      <St.BookingInfoWrapper>
        <div>
          <St.BookingInfoText>
            <St.BookingInfoAccent>{username}</St.BookingInfoAccent>
            님, 선택하신 날짜는
            <St.BookingInfoAccent>{date}</St.BookingInfoAccent>
            이고, 선택하신 시간은
            <St.BookingInfoAccent>{times}</St.BookingInfoAccent>
            입니다.
          </St.BookingInfoText>
          <br />
          <St.BookingInfoText>
            선택하신 옵션은
            <St.BookingInfoAccent>{option}</St.BookingInfoAccent>
            입니다.
          </St.BookingInfoText>
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
