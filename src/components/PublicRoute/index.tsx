import React from 'react';
import { Route } from 'react-router-dom';

import { PublicLayoutProps } from '../PublicLayout';

type PublicRouteProps = {
  component: React.FC<any>;
  exact: boolean;
  path: string;
  layout: React.FC<PublicLayoutProps>;
};

const PublicRoute: React.FC<PublicRouteProps> = ({ exact, path, component: Component, layout: Layout }) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        return (
          <Layout>
            <Component />
          </Layout>
        );
      }}
    />
  );
};

export default PublicRoute;
