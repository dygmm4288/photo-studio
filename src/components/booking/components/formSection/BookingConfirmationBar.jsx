import * as St from "../../styles/BookingStyles";

export default function BookingConfirmationBar() {
  return (
    <St.BookingConfirmationBarContainer>
      {/* TODO: 예약자 이름, 날짜, 시간, 옵션 */}
      {/* TODO: 필수 사항 입력 전 버튼 DISABLED, 입력 후 ACTIVE */}
      <St.BookingInfoWrapper>
        <div>
          <p>
            홍길동 님,
            <St.BookingInfo>2024년 11월 30일 화요일 2:30PM</St.BookingInfo>
            을(를) 선택하셨습니다.
          </p>
          <br />
          <p>
            선택하신 옵션은
            <St.BookingInfo>프리미업 스냅촬영 입니다.</St.BookingInfo>
          </p>
        </div>
        <St.BookingButton>예약하기</St.BookingButton>
      </St.BookingInfoWrapper>
    </St.BookingConfirmationBarContainer>
  );
}
