import { BiSolidError } from "react-icons/bi";
import { GoCheckCircleFill } from "react-icons/go";
import { ToastType } from "../../../store/toast/toast.const";
const ToastIcon = ({ type }) => {
  let Component = null;
  const props = {
    size: "2.4rem",
  };
  switch (type) {
    case ToastType.WARNING:
      Component = <BiSolidError {...props} />;
      break;
    case ToastType.SUCCESS:
      Component = <GoCheckCircleFill {...props} />;
      break;
    default:
      break;
  }
  return Component;
};

export default ToastIcon;
