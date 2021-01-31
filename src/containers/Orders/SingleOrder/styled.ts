import styled from "styled-components";

export const Container = styled.div`
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.solitude};
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: 3rem;
  box-shadow: 0px 0px 3rem ${({ theme }) => theme.colors.solitude};
  cursor: pointer;
  &:hover {
    border-color: ${({ theme }) => theme.colors.java};
  }
`;

export const Text = styled.h1``;
export const Name = styled.h2`
  margin-left: 0.5rem;
`;

export const Quantity = styled.h2`
  margin-left: 0.5rem;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
