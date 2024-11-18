import styled, { css } from "styled-components";
import {
  bgDisabled,
  bgPrimary,
  bgTertiary,
  body1,
  label1,
  textBlack,
  textDisabled,
  textPrimary,
  textWhite,
} from "../../../css/fonts.styles";
import { rowBox } from "../../../css/layout.styles";

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
