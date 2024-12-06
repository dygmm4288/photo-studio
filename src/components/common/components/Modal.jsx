import useModal from "../../../store/useModal";
import * as Style from "../../common/styles/globalModal.styles";

const Modal = () => {
  const { isShow, component } = useModal();

  if (!isShow) return null;
  if (!component) {
    console.error("[Error Modal] : not defined component");
    return;
  }

  return (
    <Style.ModalWrapper $isShow={isShow}>
      <Style.ModalBox $isShow={isShow}>
        <Style.ContentWrapper>{component}</Style.ContentWrapper>
      </Style.ModalBox>
    </Style.ModalWrapper>
  );
};

export default Modal;
