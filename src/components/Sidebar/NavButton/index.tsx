import React from "react";

import { Container, Text, Dot } from "./styled";

type NavButtonProps = {
  children: React.ReactChild;
  active: boolean;
  onClick: () => void;
};

const NavButton: React.FC<NavButtonProps> = ({ onClick, active, children }) => {
  return (
    <Container active={active} onClick={onClick}>
      <Dot />
      <Text>{children}</Text>
    </Container>
  );
};
export default NavButton;
