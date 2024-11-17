import { css } from "styled-components";

export const flex = () => css`
  display: flex;
  flex-wrap: nowrap;
`;

export const rowBox = ({ gap = 1.4 }) => css`
  ${flex()}
  flex-direction: row;
  gap: ${gap}rem;
`;

export const columnBox = ({ gap = 1.4 }) => css`
  ${flex()}
  flex-direction: column;
  gap: ${gap}rem;
`;

export const flexWrap = () => css`
  ${flex()}
  flex-wrap: wrap;
`;
