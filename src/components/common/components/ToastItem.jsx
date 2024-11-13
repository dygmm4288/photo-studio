import { useEffect } from "react";
import { omitObject } from "../../../lib/util";
import useToast from "../../../store/toast/useToast";

const ToastItem = ({ toast }) => {
  const { remove } = useToast();

  useEffect(() => {
    let timeout = null;

    if (toast.autoClose) {
      timeout = setTimeout(() => {
        remove(toast.id);
        if (toast.onClose) toast.onClose();
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
        {...omitObject(toast, ["autoClose", "onClose", "duration"])}
      />
    );

  return (
    <div>
      {toast.showCloseBtn && <button>close</button>}
      {toast.icon && <div>icon</div>}
      {toast.message}
    </div>
  );
};

export default ToastItem;
