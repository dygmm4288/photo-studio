import styled, { css } from "styled-components";
import {
  bgDisabled,
  bgPrimary,
  bgTertiary,
  label1,
  textDisabled,
  textPrimary,
  textWhite,
} from "../../../css/fonts.styles";

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
