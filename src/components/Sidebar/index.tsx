import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import logOut from "../../assets/svg/log-out.svg";

import { Container, Header, Logout, Icon, Text, Wrapper, Top } from "./styled";
import NavButton from "./NavButton";

type SidebarProps = {};

const routes = [
  { url: "/products", name: "Products" },
  { url: "/orders", name: "Orders" },
];

const logout = {
  url: "/logout",
  name: "Logout",
};
const Sidebar: React.FC<SidebarProps> = () => {
  const { pathname } = useLocation();
  const { push } = useHistory();
  const goToLogout = () => push(logout.url);
  return (
    <Container>
      <Top>
        <Header>COVID-19 Store</Header>
        <Wrapper>
          {routes.map((route) => {
            const handleClick = () => push(route.url);
            return (
              <NavButton active={pathname === route.url} onClick={handleClick}>
                {route.name}
              </NavButton>
            );
          })}
        </Wrapper>
      </Top>
      <Logout onClick={goToLogout}>
        <Icon src={logOut} />
        <Text>{logout.name}</Text>
      </Logout>
    </Container>
  );
};

export default Sidebar;
