import styled from "styled-components";

import hexToRgba from "../../../utils/hexToRgba";

type ContainerProps = {
  active?: boolean;
};

export const Container = styled.div<ContainerProps>`
  cursor: pointer;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 1rem;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.aquaHaze : "transparent"};
  &:hover {
    background-color: ${({ theme }) => hexToRgba(theme.colors.aquaHaze, 0.5)};
  }
`;

export const Text = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Dot = styled.div`
  height: 1rem;
  width: 1rem;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  margin-right: 0.5rem;
`;
