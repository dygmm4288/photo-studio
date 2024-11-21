import styled from "styled-components";
import { body2, heading3 } from "../../../css/fonts.styles";
import { columnBox } from "../../../css/layout.styles";

export const BookingWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10rem;
`;

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
