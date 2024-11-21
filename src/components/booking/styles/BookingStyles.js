import styled from "styled-components";
import { body2, heading1, heading3 } from "../../../css/fonts.styles";

export const BookingWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10rem;
`;

// 예약 전 필수 사항 //
export const ImportantNoteContainer = styled.div`
  border: 2px solid #336155;
`;

export const SectionTitle = styled.p`
  ${heading1()}
`;

export const FormTitle = styled.p`
  ${heading3()}
`;

export const FormSubTitle = styled.p`
  ${body2({ bold: true })}
`;

export const NotesList = styled.li`
  ${body2()}
`;
