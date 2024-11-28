import styled, { css } from "styled-components";
import { columnBox, rowBox } from "../../../css/layout.styles";
import { ToastPosition, ToastType } from "../../../store/toast/toast.const";

// -----------------------------------------------
// Position Styles CSS
// -----------------------------------------------
const positionStyles = (position) => {
  switch (position) {
    case ToastPosition.TOP_RIGHT:
      return `
        top: 15rem;
        right: 1rem;
      `;
    case ToastPosition.TOP_LEFT:
      return `
        top: 15rem;
        left: 1rem;
      `;
    case ToastPosition.BOTTOM_RIGHT:
      return `
        bottom: 1rem;
        right: 1rem;
      `;
    case ToastPosition.BOTTOM_LEFT:
      return `
        bottom: 1rem;
        left: 1rem;
      `;
    case ToastPosition.TOP_CENTER:
      return `
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
      `;
    case ToastPosition.BOTTOM_CENTER:
      return `
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
      `;
    case ToastPosition.CENTER:
      return `
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `;
    default:
      return ``;
  }
};

// -----------------------------------------------
// Toast Type CSS
// -----------------------------------------------
const toastTypeCss = (type) => css`
  border: 1px solid;

  ${type === ToastType.SUCCESS &&
  `
    background-color: var(--bgAvailable);
    border-color: var(--primary);
    color: var(--primary);
    * {
      color: var(--primary);
    }
  `};

  ${type === ToastType.WARNING &&
  `
    background-color: var(--bgClosed);
    border-color: var(--closed);
    color: var(--closed);
    * {
      color: var(--closed);
    }
  `};
`;

export const ToastWrapper = styled.div`
  position: absolute;
  inset: 0;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-20%);
    }
  }

  .toast-enter {
    animation: fadeIn 0.3s ease-out forwards;
  }

  .toast-exit {
    animation: fadeOut 0.3s ease-out forwards;
  }
`;

export const ToastListWrapper = styled.ul`
  position: absolute;
  ${(props) => positionStyles(props.position)}
  ${columnBox({ gap: 1 })}
  z-index: 500;
`;
export const ToastItemWrapper = styled.div`
  ${(props) => toastTypeCss(props.type)}
  padding: 1.7rem 1.4rem;
  border-radius: 0.4rem;
  width: 35rem;
  ${rowBox({ gap: 1 })}
  align-items: center;
`;

export const ToastText = styled.p`
  flex: 1;
`;
