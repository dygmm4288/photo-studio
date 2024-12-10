import { useEffect } from "react";
import * as Style from "../styles/globalModal.styles";
import { useLocation } from "react-router";
import { useSetGlobalModalStore } from "../../../store/useGloBalModal";

export default function GlobalModal() {
  const { stack, onClose } = useSetGlobalModalStore();
  const { pathname } = useLocation();

  useEffect(() => {
    onClose();
  }, [pathname]);

  if (!stack?.length) {
    return null;
  }

  return (
    <>
      {stack.map((node, i) => {
        return (
          <Style.ModalWrapper $isOpen={true} key={node.title + i}>
            <Style.ModalBox $isOpen={true}>
              {/* <Style.ModalTitleBar>
                <span>{node.title}</span>
                <img
                  style={{ cursor: "pointer" }}
                  src={CloseIcon}
                  width={20}
                  height={20}
                  alt="닫기 버튼"
                  onClick={onClose}
                />
              </Style.ModalTitleBar> */}
              <Style.ContentWrapper>{node.component}</Style.ContentWrapper>
            </Style.ModalBox>
            <Style.ModalBackground
              $isOpen={true}
              onClick={onClose}></Style.ModalBackground>
          </Style.ModalWrapper>
        );
      })}
    </>
  );
}
