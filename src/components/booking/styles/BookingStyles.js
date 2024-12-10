import styled from "styled-components";
import {
  bgAccent,
  bgPrimary,
  bgTertiary,
  body1,
  body2,
  caption1,
  heading2,
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
  ${columnBox({ gap: 1 })}
  align-items: center;
`;

// 예약 페이지 공통 //
export const FromSectionWrapper = styled.div`
  ${columnBox()}
`;

export const FormHeaderTitle = styled.h2`
  ${heading2({ bold: true })}
`;

export const FormHeaderDescText = styled.p`
  ${heading3()}
  margin-bottom: 2rem;
`;

export const FormSectionDescText = styled.p`
  ${heading3({ bold: true })}
`;

export const FormHeaderLabel = styled.span`
  ${rowBox({ gap: 0.5 })}
`;

// 예약 캘린더 //
export const BookingCalendarWrapper = styled.div`
  width: 80rem;
  height: 60rem;
  margin-bottom: 20rem;
`;

export const BookingCalendarHeader = styled.div`
  ${columnBox()}
  align-items: center;
`;

export const BookingCalendarTitle = styled.span`
  background-color: ${({ title }) => {
    if (title.includes("휴일")) {
      return `var(--bgClosed)`;
    } else if (title.includes("마감")) {
      return `var(--bgDisabled)`;
    } else {
      return `var(--bgAvailable)`;
    }
  }};
  color: ${({ title }) => {
    if (title.includes("휴일")) {
      return `var(--closed)`;
    } else if (title.includes("마감")) {
      return `var(--disabled)`;
    } else {
      return `var(--primary)`;
    }
  }};
  ${caption1()}
  padding: 0.3rem 0.8rem;
`;

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
export const OptionRadioButtonContainer = styled.div`
  ${rowBox()}
  justify-content: space-between;
`;

export const OptionCheckboxWrapper = styled.div`
  ${rowBox({ gap: 0.5 })}
  align-items: center;
`;

export const OptionRadioButtonLabel = styled.span`
  ${body1({ bold: true })}
`;

export const OptionIncludesText = styled.p`
  text-indent: 3rem;
  ${body2()}
  color: var(--gray);
`;

// 예약 시간 선택 //
export const BookingTimeSlotWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 5rem;
`;

export const BookingTimeSlotInfoMessage = styled.p`
  color: var(--closed);
  ${caption1()}
`;

// 예약 확인 바 //
export const BookingConfirmationBarContainer = styled.div`
  background-color: var(--primary);
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
  color: var(--white);
`;

export const BookingInfoText = styled.p`
  ${heading3()}
`;

export const BookingInfoAccent = styled.span`
  ${heading3()}
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
