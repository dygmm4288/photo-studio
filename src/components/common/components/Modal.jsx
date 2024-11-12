import useModal from "../../../store/useModal";

const Modal = () => {
  const { isShow, component } = useModal();

  if (!component) {
    console.error("[Error Modal] : not defined component");
    return;
  }

  if (!isShow) return null;

  return (
    <div>
      <component />
    </div>
  );
};

export default Modal;
