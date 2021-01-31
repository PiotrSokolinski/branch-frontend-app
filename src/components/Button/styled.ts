import styled from "styled-components";

type ContainerProps = {
  width: number;
};

export const Container = styled.div<ContainerProps>`
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width, theme }) => theme.rem(width)};
  background-color: ${({ theme }) => theme.colors.java};
  color: ${({ theme }) => theme.colors.blueDianne};
  border-radius: 10rem;
`;

type StyledButtonProps = {
  type?: string;
  disabled?: boolean;
};

export const StyledButton = styled.button.attrs((props: StyledButtonProps) => ({
  type: props.type,
  disabled: props.disabled,
}))<StyledButtonProps>`
  width: fit-content;
  padding: 1rem 3rem;
  outline: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.blueDianne};
  ${({ theme }) => theme.fonts.button};
  border-radius: 10rem;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.aquaHaze : theme.colors.java};

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08));
  }
`;
