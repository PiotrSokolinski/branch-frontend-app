import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

type CheckmarkProps = {
  checked: boolean;
};

export const Checkmark = styled.div<CheckmarkProps>`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  margin-right: 1rem;
  justify-content: center;
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.java : "transparent"};
`;
