import React from "react";

import { Container } from "./styled";

type PromptProps = {
  children: React.ReactChild;
};

const Prompt: React.FC<PromptProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Prompt;
