import styled from "styled-components";

import Input from "../../../components/Input";
import FormField from "../../../components/FormField";

export const StyledFormField = styled(FormField)`
  margin-top: 3rem;
  align-self: center;
`;

export const StyledInput = styled(Input)`
  border-radius: 0.5rem;
  height: 4rem;
  width: 50rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 2rem;
  button {
    width: 40rem;
  }
`;
