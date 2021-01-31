import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.java};
  &:hover,
  &:visited {
    color: ${({ theme }) => theme.colors.java};
  }
  text-decoration: underline;
  ${({ theme }) => theme.fonts.button};
`;
