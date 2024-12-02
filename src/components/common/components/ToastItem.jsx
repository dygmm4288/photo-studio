import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { omitObject } from "../../../lib/util";
import useToast from "../../../store/toast/useToast";
import * as St from "../styles/toast.styles";
import ToastIcon from "./ToastIcon";

const ToastItem = ({ toast }) => {
  const { removeToast } = useToast();
  const [isExisting, setExisting] = useState(true);

  const toastOptions = omitObject(toast, [
    "id",
    "autoClose",
    "onClose",
    "duration",
  ]);

  const handleClose = () => {
    setExisting(false);
    let timer = setTimeout(() => {
      removeToast(toast.id);
      if (toast.onClose) {
        toast.onClose();
      }
      clearTimeout(timer);
    }, 300);
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

  if (toast.component) return <toast.component {...toastOptions} />;

  return (
    <St.ToastItemWrapper
      className={isExisting ? "toast-enter" : "toast-exit"}
      {...omitObject(toastOptions, "icon")}>
      {toast.icon && <ToastIcon type={toast.type} />}
      <St.ToastText>{toast.message}</St.ToastText>
      {toast.showCloseBtn && (
        <St.ToastCloseBtn onClick={handleClose}>
          <IoCloseSharp size={"2.4rem"} />
        </St.ToastCloseBtn>
      )}
    </St.ToastItemWrapper>
  );
};

export default ToastItem;
