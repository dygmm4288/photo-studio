import styled from "styled-components";

export const StFlex = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const StRow = styled(StFlex)`
  flex-direction: row;
`;

export const StColumn = styled(StFlex)`
  flex-direction: column;
`;

export const StFlexWrap = styled(StFlex)`
  flex-wrap: wrap;
`;
