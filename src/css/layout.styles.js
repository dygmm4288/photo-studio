import { css } from "styled-components";

export const flex = css`
  display: flex;
  flex-wrap: nowrap;
`;

export const rowBox = css`
  flex-direction: row;
  gap: ${({ gap }) => (gap ? `${gap}rem` : "1.4rem")};
`;

export const columnBox = css`
  flex-direction: column;
  gap: ${({ gap }) => (gap ? `${gap}rem` : "1.4rem")};
`;

export const flexWrap = css`
  ${flex}
  flex-wrap: wrap;
`;
