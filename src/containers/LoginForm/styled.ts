import styled from "styled-components";

import ButtonLink from "../../components/ButtonLink";
import Button from "../../components/Button";
import Error from "../../components/Error";

export const StyledError = styled(Error)`
  margin-top: 2rem;
  font-size: 1.3rem;
  align-self: center;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 10rem;
`;

export const Form = styled.form`
  display: flex;
  width: 40rem;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

export const StyledButtonLink = styled(ButtonLink)`
  align-self: center;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  height: 5rem;
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Header = styled.h1`
  font-size: 4rem;
  margin-bottom: 3rem;
`;
