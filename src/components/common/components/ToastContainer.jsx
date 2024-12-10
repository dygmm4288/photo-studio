import _ from "lodash";
import useToast from "../../../store/toast/useToast";
import * as St from "../styles/toast.styles";
import ToastItem from "./ToastItem";

const ToastContainer = () => {
  const { toasts } = useToast();
  const groupedToasts = _.groupBy(toasts, "position");

  return (
    <St.ToastWrapper>
      {_.map(groupedToasts, (groupedToast, key) => {
        return (
          <St.ToastListWrapper key={key} position={key}>
            {groupedToast.map((toast) => (
              <ToastItem key={toast.id} toast={toast} />
            ))}
          </St.ToastListWrapper>
        );
      })}
    </St.ToastWrapper>
  );
};

export default ToastContainer;
