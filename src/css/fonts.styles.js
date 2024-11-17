import { css } from "styled-components";

export const display1 = css`
  font-weight: 700;
  font-size: 80px;
  line-height: 80px;
  letter-spacing: -2px;
`;

export const display2 = css`
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  letter-spacing: -1px;
`;

export const heading1 = css`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.5px;
`;

export const heading2 = css`
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.25px;
`;

export const heading3 = css`
  font-weight: ${(props) => (props.bold ? "700" : "500")};
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.25px;
`;

export const body1 = css`
  font-weight: ${(props) => (props.bold ? "700" : "500")};
  font-size: 16px;
  line-height: 24px;
`;

export const body2 = css`
  font-weight: ${(props) => (props.bold ? "700" : "500")};
  font-size: 14px;
  line-height: 20px;
`;

export const label1 = css`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1px;
`;

export const caption1 = css`
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.25px;
`;
