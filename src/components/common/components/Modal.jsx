import useModal from "../../../store/useModal";

const Modal = () => {
  const { isShow, component } = useModal();

  if (!isShow) return null;
  if (!component) {
    console.error("[Error Modal] : not defined component");
    return;
  }

  return (
    <div>
      <component />
    </div>
  );
};

export default Modal;
