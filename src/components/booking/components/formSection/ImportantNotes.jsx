import { importantNotes } from "../../data/importantNotes";
import { useBookingStore } from "../../store/useBookingStore";
import * as St from "../../styles/BookingStyles";
import { IoIosCheckmark } from "react-icons/io";

export default function ImportantNotes() {
  const { agreeImportantNotes, setAgreeImportantNotes } = useBookingStore();
  const onChangeAgreeImportantNotesHandler = (e) => {
    setAgreeImportantNotes(e.target.checked);
  };

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
      <St.AgreeCheckboxWrapper>
        <input
          type="checkbox"
          id="agree"
          value="agree"
          name="agree"
          checked={agreeImportantNotes}
          onChange={onChangeAgreeImportantNotesHandler}
        />
        <label htmlFor="agree">위 사항들을 숙지 하였으며 동의합니다.</label>
      </St.AgreeCheckboxWrapper>
    </St.ImportantNoteContainer>
  );
}
