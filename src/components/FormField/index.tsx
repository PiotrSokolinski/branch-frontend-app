import React from "react";

import Label from "../Label";
import Error from "../Error";

import { Container } from "./styled";

type FormInputProps = {
  label: string;
  name?: string;
  className?: string;
  error?: string | false;
  children: React.ReactChild;
};

const FormInput: React.FC<FormInputProps> = ({
  label,
  className,
  error,
  children,
  name,
}) => {
  return (
    <Container className={className}>
      <Label htmlFor={name}>{label}</Label>
      {children}
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default FormInput;
