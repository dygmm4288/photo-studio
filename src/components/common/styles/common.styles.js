import styled, { css } from "styled-components";
import {
  bgAccent,
  bgDisabled,
  bgPrimary,
  bgTertiary,
  bgWhite,
  body1,
  label1,
  textBlack,
  textDisabled,
  textPrimary,
  textWhite,
} from "../../../css/fonts.styles";
import { columnBox, flex, rowBox } from "../../../css/layout.styles";

const primary = css`
  ${textWhite()}
  ${bgPrimary()}
`;
const secondary = css`
  ${textPrimary()}
  ${bgTertiary()}
`;
const disabled = css`
  ${textDisabled()}
  ${bgDisabled()}
  border: 1px solid #bdbdbd;
`;

export const Button = styled.button`
  ${(props) => props.theme === "primary" && primary};
  ${(props) => props.theme === "secondary" && secondary};
  ${label1()}
  border: none;
  text-align: center;
  padding: 1.45rem 4.25rem;
  outline: none;
  border-radius: 0.5rem;
  ${(props) => props.disabled && disabled};
  cursor: pointer;
`;

export const InputWrapper = styled.section`
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid #336155;
  padding: 1.2rem 1.8rem;
  ${rowBox(1.3)}
  height: 4.9rem;
`;

export const Input = styled.input`
  ${textBlack()}
  ${body1()}
  background:transparent;
  outline: none;
  border: none;
  flex-wrap: nowrap;
  flex: 1;
`;

export const InputLine = styled.div`
  height: 2.4rem;
  width: 0.1rem;
  ${bgPrimary()}
`;

export const InputLabel = styled.label`
  ${textPrimary()}
  ${body1({ bold: true })}
`;

export const ButtonCheckboxWrapper = styled.div`
  ${(props) =>
    props.selected &&
    css`
      ${textWhite()}
      ${bgPrimary()}
    `}
  ${(props) =>
    !props.selected &&
    css`
      ${bgWhite()}
      ${textPrimary()}
    `}
    ${(props) =>
    props.disabled &&
    css`
      border-color: #bdbdbd;
      ${bgDisabled()}
      ${textDisabled()}
    `}
    border-radius: 0.5rem;
  border: 1px solid #336155;
  width: 13rem;
`;
export const ButtonCheckbox = styled.input`
  display: none;
`;

export const ButtonCheckboxLabel = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  padding: 1.45rem 2.35rem;
  text-align: center;
  ${label1()}
`;

export const FloatingButtonWrapper = styled.button`
  ${bgAccent()}
  ${textWhite()}
  border-radius: 1rem;
  outline: none;
  border: none;

  width: 11.4rem;
  height: 6rem;
  padding: 1.8rem 1.6rem;

  position: fixed;
  bottom: 3rem;
  right: 6.6rem;
  z-index: 1;
  cursor: pointer;

  ${flex()}
  justify-content: center;
  align-items: center;

  box-shadow: 0 0.4rem 0.6rem rgba(76, 76, 76, 0.48);

  @media screen and (max-width: 767px) {
    border-radius: 99999rem;
    width: 6rem;
  }
`;

export const FloatingText = styled.span`
  ${label1()}
  ${textWhite()}
`;

export const RadioLabel = styled.label`
  width: 2.4rem;
  height: 2.4rem;
  ${rowBox()}
  align-items: center;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
`;

export const ModalBackground = styled.div`
  border-radius: 3rem;
  ${columnBox({ gap: 9 })}
  background-color: var(--primary);
  width: max-content;
  height: max-content;

  padding: 5.2rem 6.5rem;

  header {
    ${rowBox()}
    justify-content: flex-end;
    min-width: 30rem;
  }
`;
