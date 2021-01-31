import styled from "styled-components";

export const Container = styled.div`
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.solitude};
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  margin-top: 3rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 3rem ${({ theme }) => theme.colors.solitude};

  max-width: 80rem;
`;

export const Name = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Description = styled.p`
  margin-top: 2rem;
  font-size: 1.5rem;
  width: 100%;
  display: flex;
`;

export const BottomContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.h1``;

export const Price = styled.h2`
  margin-left: 0.5rem;
`;

export const Stock = styled.h2`
  margin-left: 0.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 2rem;
  button {
    width: 30rem;
  }
`;
