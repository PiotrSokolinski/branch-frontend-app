import styled from "styled-components";

type LabelProps = {
  clickable?: boolean;
};

export const StyledLabel = styled.label<LabelProps>`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.blueDianne};
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
  ${({ theme }) => theme.fonts.label};
`;
