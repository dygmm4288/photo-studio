import useModal from "../../../store/useModal";

const Modal = () => {
  const { isShow, Component } = useModal();

  if (!isShow) return null;
  if (!Component) {
    console.error("[Error Modal] : not defined component");
    return;
  }

  return (
    <div>
      <Component />
    </div>
  );
};

export default Modal;
