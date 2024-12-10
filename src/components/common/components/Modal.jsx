import { useEffect } from "react";
// import { IoMdClose } from "react-icons/io";
import useModal from "../../../store/useModal";
import * as St from "../styles/common.styles";

const Modal = () => {
  const { isShow, Component, hide } = useModal();

  const handleClickModalWrapper = (e) => {
    if (e.currentTarget === e.target) hide();
  };

  const handleClickEscKey = (e) => {
    if (isShow && e.code === "Escape") hide();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleClickEscKey);
    return () => {
      window.removeEventListener("keydown", handleClickEscKey);
    };
  }, [isShow]);

  if (!isShow) {
    return null;
  }
  if (!Component) {
    console.error("[Error Modal] : not defined component");
    return;
  }

  return (
    <>
      <St.ModalWrapper onClick={handleClickModalWrapper}>
        <header>
          {/* <IoMdClose
            className="cursor-pointer"
            size={"2.4rem"}
            onClick={() => hide()}
          /> */}
        </header>
        {Component}
      </St.ModalWrapper>
    </>
  );
};

export default Modal;
