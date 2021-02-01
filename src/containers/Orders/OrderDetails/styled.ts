import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 80rem;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  box-shadow: 0px 0px 3rem ${({ theme }) => theme.colors.solitude};
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.solitude};
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  align-self: center;
  margin-top: 3rem;
  min-width: 40rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  &:first-of-type {
    margin-top: 0;
  }
`;

export const Label = styled.label`
  font-size: 1.8rem;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 1.5rem;
`;
