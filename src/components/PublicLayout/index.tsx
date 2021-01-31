import React from "react";

import logo from "../../assets/svg/logo.svg";

import { Background, TopBackground, Header, Logo, Content } from "./styled";

type PublicLayoutProps = {
  children: React.ReactNode;
};

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <Background>
      <TopBackground />
      <Header>
        <Logo src={logo} />
      </Header>
      <Content>{children}</Content>
    </Background>
  );
};

export type { PublicLayoutProps };

export default PublicLayout;
