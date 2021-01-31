import React from "react";

import Dashboard from "../Dashboard";
import PrivateLayout, {
  PrivateLayoutProps,
} from "../../components/PrivateLayout";
import Logout from "../Logout";
import Orders from "../Orders";

type PrivateRouteType = {
  exact: boolean;
  path: string;
  Component: any;
  Layout: React.FC<PrivateLayoutProps>;
};

const privateRoutes: PrivateRouteType[] = [
  {
    exact: true,
    path: "/products",
    Component: Dashboard,
    Layout: PrivateLayout,
  },
  {
    exact: true,
    path: "/logout",
    Component: Logout,
    Layout: PrivateLayout,
  },
  {
    exact: true,
    path: "/orders",
    Component: Orders,
    Layout: PrivateLayout,
  },
];

export type { PrivateRouteType };

export default privateRoutes;
