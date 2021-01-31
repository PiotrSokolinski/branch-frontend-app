import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 0;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  display: flex;
  padding: 4rem;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.aquaHaze};
`;
