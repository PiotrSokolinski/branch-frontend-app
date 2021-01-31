import React from "react";

import { StyledLabel } from "./styled";

type LabelProps = {
  children: React.ReactChild;
  clickable?: boolean;
  htmlFor?: string;
};

const Label: React.FC<LabelProps> = ({ htmlFor, clickable, children }) => {
  return (
    <StyledLabel clickable={clickable} htmlFor={htmlFor}>
      {children}
    </StyledLabel>
  );
};

export default Label;
