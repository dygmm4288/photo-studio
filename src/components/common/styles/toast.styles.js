import styled, { css } from "styled-components";
import { rowBox } from "../../../css/layout.styles";
import { ToastPosition, ToastType } from "../../../store/toast/toast.const";

// -----------------------------------------------
// Position Styles CSS
// -----------------------------------------------
const positionStyles = (position) => {
  switch (position) {
    case ToastPosition.TOP_RIGHT:
      return `
        position: absolute;
        top: 15rem;
        right: 1rem;
      `;
    case ToastPosition.TOP_LEFT:
      return `
        position: absolute;
        top: 15rem;
        left: 1rem;
      `;
    case ToastPosition.BOTTOM_RIGHT:
      return `
        position: absolute;
        bottom: 1rem;
        right: 1rem;
      `;
    case ToastPosition.BOTTOM_LEFT:
      return `
        position: absolute;
        bottom: 1rem;
        left: 1rem;
      `;
    case ToastPosition.TOP_CENTER:
      return `
        position: absolute;
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
      `;
    case ToastPosition.BOTTOM_CENTER:
      return `
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
      `;
    case ToastPosition.CENTER:
      return `
        position: absolute;
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
const toastTypeCss = (type, position) => css`
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

  ${position && positionStyles(position)};
`;

export const ToastWrapper = styled.div`
  position: fixed;

  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const ToastItemWrapper = styled.div`
  ${(props) => toastTypeCss(props.type, props.position)}
  padding: 1.7rem 1.4rem;
  border-radius: 0.4rem;
  width: 35rem;
  ${rowBox({ gap: 1 })}
  align-items: center;
`;

export const ToastText = styled.p`
  flex: 1;
`;
