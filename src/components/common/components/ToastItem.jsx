import { useEffect } from "react";
import { omitObject } from "../../../lib/util";
import useToast from "../../../store/toast/useToast";

const ToastItem = ({ toast }) => {
  const { removeToast } = useToast();

  const handleClose = () => {
    removeToast(toast.id);
    if (toast.onClose) toast.onClose();
  };

  useEffect(() => {
    let timeout = null;

    if (toast.autoClose) {
      timeout = setTimeout(() => {
        handleClose();
        clearTimeout(timeout);
      }, toast.duration);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  if (toast.component)
    return (
      <toast.component
        {...omitObject(toast, ["id", "autoClose", "onClose", "duration"])}
      />
    );

  return (
    <div>
      {toast.showCloseBtn && <button onClick={handleClose}>close</button>}
      {toast.icon && <div>icon</div>}
      {toast.message}
    </div>
  );
};

export default ToastItem;
