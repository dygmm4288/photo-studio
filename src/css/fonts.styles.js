import { css } from "styled-components";

export const display1 = () => css`
  font-weight: 700;
  font-size: 8rem;
  line-height: 8rem;
  letter-spacing: -0.2rem;
  white-space: pre-wrap;
`;

export const display2 = () => css`
  font-weight: 700;
  font-size: 4.8rem;
  line-height: 5.8rem;
  letter-spacing: -0.1rem;
  white-space: pre-wrap;
`;

export const heading1 = () => css`
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 4rem;
  letter-spacing: -0.05rem;
  white-space: pre-wrap;
`;

export const heading2 = ({ bold = false } = {}) => css`
  font-weight: ${bold ? 700 : 400};
  font-size: 2.4rem;
  line-height: 3.2rem;
  letter-spacing: -0.025rem;
  white-space: pre-wrap;
`;

export const heading3 = ({ bold = false } = {}) => css`
  font-weight: ${bold ? 700 : 500};
  font-size: 1.8rem;
  line-height: 2.8rem;
  letter-spacing: -0.025rem;
  white-space: pre-wrap;
`;

export const body1 = ({ bold = false } = {}) => css`
  font-weight: ${bold ? 700 : 500};
  font-size: 1.6rem;
  line-height: 2.4rem;
  white-space: pre-wrap;
`;

export const body2 = ({ bold = false } = {}) => css`
  font-weight: ${bold ? 700 : 500};
  font-size: 1.4rem;
  line-height: 2rem;
  white-space: pre-wrap;
`;

export const label1 = () => css`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.6rem;
  letter-spacing: 0.1rem;
  white-space: pre-wrap;
`;

export const caption1 = () => css`
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 2rem;
  letter-spacing: 0.025rem;
  white-space: pre-wrap;
`;

export const textPrimary = () => css`
  color: var(--primary);
`;
export const textSecondary = () => css`
  color: var(--secondary);
`;
export const textTertiary = () => css`
  color: var(--tertiary);
`;
export const textAccent = () => css`
  color: var(--accent);
`;
export const textWhite = () => css`
  color: var(--white);
`;
export const textGray = () => css`
  color: var(--gray);
`;
export const textBlack = () => css`
  color: var(--black);
`;
export const textDisabled = () => css`
  color: var(--disabled);
`;
export const textClosed = () => css`
  color: var(--closed);
`;

export const bgPrimary = () => css`
  background-color: var(--primary);
`;
export const bgDisabled = () => css`
  background-color: var(--bgDisabled);
`;
export const bgAvailable = () => css`
  background-color: var(--available);
`;
export const bgClosed = () => css`
  background-color: var(--bgClosed);
`;
export const bgWhite = () => css`
  background-color: var(--white);
`;
export const bgTertiary = () => css`
  background-color: var(--tertiary);
`;
export const bgBlack = () => css`
  background-color: var(--black);
`;
export const bgAccent = () => css`
  background-color: var(--accent);
`;
