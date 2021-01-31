import styled from "styled-components";

export const StyledError = styled.p`
  color: ${({ theme }) => theme.colors.flamingo};
  ${({ theme }) => theme.fonts.p};
  width: fit-content;
`;
