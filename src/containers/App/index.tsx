import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import publicRoutes, { PublicRouteType } from "./publicRoutes";
import privateRoutes, { PrivateRouteType } from "./privateRoutes";
import NotFound from "../NotFound";
import PrivateRoute from "../../components/PrivateRoute";
import PublicRoute from "../../components/PublicRoute";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <Switch>
      {publicRoutes.map(
        ({ path, exact, Layout, Component }: PublicRouteType) => (
          <PublicRoute
            key={`el-route-${path}`}
            exact={exact}
            path={path}
            component={Component}
            layout={Layout}
          />
        )
      )}
      {privateRoutes.map(
        ({ path, exact, Layout, Component }: PrivateRouteType) => (
          <PrivateRoute
            key={`el-route-${path}`}
            exact={exact}
            path={path}
            component={Component}
            layout={Layout}
          />
        )
      )}
      <Route exact path="/">
        <Redirect to="/products" />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
