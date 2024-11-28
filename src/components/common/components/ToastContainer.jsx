import useToast from "../../../store/toast/useToast";
import * as St from "../styles/toast.styles";
import ToastItem from "./ToastItem";

const ToastContainer = () => {
  const { toasts } = useToast();
  return (
    <St.ToastWrapper>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </St.ToastWrapper>
  );
};

export default ToastContainer;
