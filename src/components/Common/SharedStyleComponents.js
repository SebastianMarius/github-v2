import styled from "styled-components";

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.givenHeightVh}vh;
  flex-direction: ${(props) => props.flexDirection};
`;

export const MakeFlex = styled.div`
  display: flex;
`;

export const halfWidthPercentage = styled.div`
  max-width: 50%;
`;

export const marginTop = styled.div`
  ${(props) => props.marginTop}
`;
