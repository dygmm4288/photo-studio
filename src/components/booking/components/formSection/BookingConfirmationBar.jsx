import * as St from "../../styles/BookingStyles";

export default function BookingConfirmationBar({
  selectedDate,
  personalInfo,
  selectedOptions,
  selectedTime,
}) {
  return (
    <St.BookingConfirmationBarContainer>
      {/* TODO: 예약자 이름, 날짜, 시간, 옵션 */}
      {/* TODO: 필수 사항 입력 전 버튼 DISABLED, 입력 후 ACTIVE */}
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
            <St.BookingInfo>{selectedOptions} 입니다.</St.BookingInfo>
          </p>
        </div>
        <St.BookingButton>예약하기</St.BookingButton>
      </St.BookingInfoWrapper>
    </St.BookingConfirmationBarContainer>
  );
}
