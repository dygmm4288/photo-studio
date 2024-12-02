import styled from "styled-components";
import {
  bgAccent,
  bgDisabled,
  bgPrimary,
  bgTertiary,
  body2,
  heading3,
  label1,
  textAccent,
  textWhite,
} from "../../../css/fonts.styles";
import { columnBox, rowBox } from "../../../css/layout.styles";
import { motion } from "framer-motion";

export const BookingContainer = styled.div`
  margin-top: 10rem; // 헤더와의 간격
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BookingWrapper = styled.div`
  ${columnBox({ gap: 5 })}
`;

// 예약 페이지 공통 //
export const FromSectionWrapper = styled.div`
  ${columnBox()}
`;

export const FormSectionDescText = styled.p`
  ${heading3({ bold: true })}
`;

// 예약 캘린더 //

// 예약 폼 //
export const BookingFormContainer = styled.div`
  ${columnBox({ gap: 5 })}
`;

// 예약 전 필수 사항 //
export const ImportantNoteContainer = styled.div`
  border: 0.2rem solid #336155;
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

export const AgreeCheckboxWrapper = styled.div`
  ${rowBox({ gap: 0.5 })}
  justify-content: center;
  align-items: center;
  ${body2({ bold: true })}
`;

// 예약 옵션 선택 //
export const OptionCheckboxContainer = styled.div`
  ${rowBox()}
  justify-content: space-between;
`;

export const OptionCheckboxWrapper = styled.div`
  ${rowBox({ gap: 0.5 })}
  align-items: center;
`;

export const OptionIncludesText = styled.p`
  text-indent: 1.8rem;
`;

// 예약 시간 선택 //
export const BookingTimeSlotWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 5rem;
`;

// 예약 확인 바 //
export const BookingConfirmationBarContainer = styled.div`
  background-color: #336155;
  height: 20rem;
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
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

export const BookingButton = styled(motion.button)`
  ${bgTertiary()};
  ${label1()}
  border: none;
  text-align: center;
  padding: 1.45rem 4.25rem;
  outline: none;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    ${bgAccent()}
    ${textWhite()}
  }
`;
