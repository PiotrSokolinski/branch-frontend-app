import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  flex-shrink: 0;
  left: 0;
  top: 0;
  width: 30rem;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 3rem ${({ theme }) => theme.colors.solitude};
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: space-between;
  height: 100vh;
  z-index: 3;
`;

export const Top = styled.div``;

export const Header = styled.h1`
  display: flex;
  justify-content: center;
`;

export const Logout = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
`;

export const Icon = styled.img`
  transform: rotate(180deg);
`;

export const Text = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 0.5rem;
`;

export const Wrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
`;
