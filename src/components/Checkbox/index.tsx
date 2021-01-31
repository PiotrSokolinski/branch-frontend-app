import React from "react";

import Label from "../Label";

import tick from "../../assets/svg/tick.svg";

import { Container, Checkmark } from "./styled";

type CheckboxProps = {
  label?: string;
  checked: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Checkmark checked={checked}>
        {checked && <img src={tick} alt="tick" />}
      </Checkmark>
      {label && <Label>{label}</Label>}
    </Container>
  );
};

export default Checkbox;
