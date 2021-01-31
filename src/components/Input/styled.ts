import styled from "styled-components";

export const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.aquaHaze};
  height: 4rem;
  outline: none;
  text-indent: 1rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.blueDianne};
  ${({ theme }) => theme.fonts.input};
`;
