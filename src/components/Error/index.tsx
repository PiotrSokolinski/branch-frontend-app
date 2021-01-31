import React from "react";

import { StyledError } from "./styled";

type ErrorProps = {
  children: React.ReactChild;
  className?: string;
};

const Error: React.FC<ErrorProps> = ({ className, children }) => {
  return <StyledError className={className}>{children}</StyledError>;
};

export default Error;
