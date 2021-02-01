import React from "react";
import { Route, Redirect } from "react-router-dom";

import { PublicLayoutProps } from "../PublicLayout";
import localStorageService from "../../utils/localStorage";

type PrivateRouteProps = {
  component: React.FC<any>;
  exact: boolean;
  path: string;
  layout: React.FC<PublicLayoutProps>;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  exact,
  path,
  component: Component,
  layout: Layout,
}) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        const currentUser = localStorageService.getSession();
        if (!currentUser) return <Redirect to="/login" />;
        return (
          <Layout>
            <Component />
          </Layout>
        );
      }}
    />
  );
};

export default PrivateRoute;
