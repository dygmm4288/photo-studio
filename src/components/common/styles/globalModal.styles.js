import styled, { css, keyframes } from 'styled-components';



const WrapperFadeIn = keyframes`
  from {
    opacity: 0;
    display: none;
  }

  to {
    opacity: 1;
    display: block;
  }
`;

const WrapperFadeOut = keyframes`
  from {
    opacity: 1;
    display: block;
  }

  to {
    opacity: 0;
    display: none;
  }
`;

const BgFadeIn = keyframes`
  from {
    opacity: 0;
    display: none;
  }

  to {
    opacity: 0.5;
    display: block;
  }
`;

const BgFadeOut = keyframes`
  from {
    opacity: 0.5;
    display: block;
  }

  to {
    opacity: 0;
    display: none;
  }
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999999;
  ${({ $isOpen }) => {
    if ($isOpen) {
      return css`
        animation: ${WrapperFadeIn} 0.35s ease forwards;
      `;
    }
    if (!$isOpen) {
      return css`
        animation: ${WrapperFadeOut} 0.35s ease forwards;
      `;
    }
  }}
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
  position: relative;
  ${({ $isOpen }) => {
    if ($isOpen) {
      return css`
        animation: ${BgFadeIn} 0.35s ease forwards;
      `;
    }
    if (!$isOpen) {
      return css`
        animation: ${BgFadeOut} 0.35s ease forwards;
      `;
    }
  }}
`;

const FadeIn = keyframes`
  from {
    transform: translate(-50%, -40%);
  }

  to {
    transform: translate(-50%, -50%);
  }
`;

const FadeOut = keyframes`
  from {
    transform: translate(-50%, -50%);
  }

  to {
    transform: translate(-50%, -40%);
  }
`;

const ModalBox = styled.div`
  width: 100%;
  max-width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${({ $isOpen }) => {
    if ($isOpen) {
      return css`
        animation: ${FadeIn} 0.35s ease forwards;
      `;
    }
    if (!$isOpen) {
      return css`
        animation: ${FadeOut} 0.35s ease forwards;
      `;
    }
  }}
  z-index: 999;
`;

const ModalTitleBar = styled.div`
  width: 100%;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #212629;
  color: white;
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 10vh);
  overflow-y: scroll;
  background-color: var(--primary);
  padding: 1.8rem 2rem;
  border-bottom-left-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  border-radius: 1rem;
`;

export {
  ModalWrapper,
  ModalBackground,
  ModalBox,
  ModalTitleBar,
  ContentWrapper,
};
