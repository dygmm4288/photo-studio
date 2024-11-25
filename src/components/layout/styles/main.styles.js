import styled from "styled-components";

export const MainWrapper = styled.main`
  ${(props) => (props.isHome ? "padding-top: 0" : "padding-top: 10.5rem")};
`;
