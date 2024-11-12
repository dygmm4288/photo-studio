import useToast from "../../../store/useToast";
import ToastItem from "./ToastItem";

const ToastContainer = () => {
  const { toasts } = useToast();
  return (
    <div>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

export default ToastContainer;
