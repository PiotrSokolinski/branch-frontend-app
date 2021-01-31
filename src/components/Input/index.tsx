import React from "react";

import { StyledInput } from "./styled";

type InputProps = {
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent) => any;
  onBlur?: (e: React.ChangeEvent) => any;
  placeholder?: string;
  name?: string;
  type?: string;
  id?: string;
};

const Input: React.FC<InputProps> = ({
  name,
  value,
  onChange,
  placeholder,
  type,
  onBlur,
  id,
  className,
}) => {
  return (
    <StyledInput
      className={className}
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  );
};

export default Input;
