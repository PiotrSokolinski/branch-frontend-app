import React from "react";

import { Container, Wrapper } from "./styled";
import Sidebar from "../Sidebar";

type PrivateLayoutProps = {
  children: React.ReactNode;
};

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <Wrapper id="page-wrapper">{children}</Wrapper>
    </Container>
  );
};

export type { PrivateLayoutProps };

export default PrivateLayout;
