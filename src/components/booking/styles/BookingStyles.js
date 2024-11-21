import styled from "styled-components";
import { body2, heading3, label1, textAccent } from "../../../css/fonts.styles";
import { columnBox } from "../../../css/layout.styles";

export const BookingWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10rem;
`;

// 예약 캘린더 //

// 예약 전 필수 사항 //
export const ImportantNoteContainer = styled.div`
  border: 2px solid #336155;
  padding: 4rem 2rem;
  ${columnBox()}
`;

export const NoteTitle = styled.p`
  ${heading3()}
  text-align: center;
`;

export const NoteSubTitle = styled.p`
  ${body2({ bold: true })}
`;

export const NoteSubTitleWrapper = styled.div`
  display: flex;
  gap: 0.1rem;
  align-items: center;
`;

export const NotesList = styled.li`
  list-style: disc;
  list-style-position: inside;
  text-indent: 2.4rem;
  ${body2()};
`;

// 예약자 정보 //

// 예약 옵션 선택 //

// 예약 시간 선택 //

// 예약 확인 바 //
export const BookingConfirmationBarContainer = styled.div`
  background-color: #336155;
  height: 9rem;
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookingInfoWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  color: #ffffff;
`;

export const BookingInfo = styled.span`
  ${textAccent()}
`;

export const BookingButton = styled.button`
  background-color: #ff9100;
  padding: 1rem 3rem;
  color: #ffffff;
  ${label1()}
`;
