import { IoMdClose } from "react-icons/io";
import useModal from "../../../store/useModal";
import * as St from "../styles/common.styles";

const Modal = () => {
  const { isShow, Component, hide } = useModal();

  if (!isShow) return null;
  if (!Component) {
    console.error("[Error Modal] : not defined component");
    return;
  }

  return (
    <St.ModalWrapper>
      <St.ModalBackground>
        <header>
          <IoMdClose
            className='cursor-pointer'
            size={"2.4rem"}
            onClick={() => hide()}
          />
        </header>
        <Component />
      </St.ModalBackground>
    </St.ModalWrapper>
  );
};

export default Modal;
