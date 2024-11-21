import * as St from "../../styles/BookingStyles";
import { IoIosCheckmark } from "react-icons/io";

const importantNotes = [
  {
    title: "촬영 시간 준수",
    notes: [
      "예약된 시간에 촬영이 시작되며, 지각 시 촬영 시간이 줄어들 수 있습니다.",
      "예약 변경 및 취소는 최소 48시간 전에 요청해 주세요.",
    ],
  },
  {
    title: "의상 및 소품 준비",
    notes: [
      "개인 의상과 소품은 직접 준비해 오셔야 합니다.",
      "추가 소품 대여를 원하시면 예약 시 미리 말씀해 주세요.",
    ],
  },
  {
    title: "날씨에 따른 촬영 안내",
    notes: [
      "야외 촬영의 경우 기상 상황에 따라 일정이 변경될 수 있습니다.",
      "촬영 24시간 전 최종 안내를 드립니다.",
    ],
  },
  {
    title: "환불 및 취소 정책",
    notes: [
      "예약 취소는 48시간 전까지 가능하며, 이후 취소 시 일부 금액이 차감될 수 있습니다.",
    ],
  },
  {
    title: "개인정보 제공 동의",
    notes: [
      "촬영된 사진은 고객 동의 없이 외부에 공개 되지 않습니다.",
      "마케팅용 사용을 동의하실 경우 추가 할인 혜택이 제공됩니다.",
    ],
  },
];

export default function ImportantNotes() {
  return (
    <St.ImportantNoteContainer>
      <St.NoteTitle>예약 전 필수 사항</St.NoteTitle>
      {importantNotes.map((noteData) => (
        <div key={noteData.title}>
          <St.NoteSubTitleWrapper>
            <IoIosCheckmark fontSize={24} />
            <St.NoteSubTitle>{noteData.title}</St.NoteSubTitle>
          </St.NoteSubTitleWrapper>
          <ul>
            {noteData.notes.map((note) => (
              <St.NotesList key={note}>{note}</St.NotesList>
            ))}
          </ul>
        </div>
      ))}
    </St.ImportantNoteContainer>
  );
}
