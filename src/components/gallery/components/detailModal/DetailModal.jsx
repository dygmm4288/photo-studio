import * as St from "./style";

export default function DetailModal({ onClose }) {
  return (
    <St.DetailWrapper>
      <button onClick={onClose}>닫기</button>
      {/* 모달 내용 */}
    </St.DetailWrapper>
  );
}
