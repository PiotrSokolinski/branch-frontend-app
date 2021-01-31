import React from 'react';

import LoginForm from '../LoginForm';
import PublicLayout, { PublicLayoutProps } from '../../components/PublicLayout';
import RegisterForm from '../RegisterForm';

type PublicRouteType = {
  exact: boolean;
  path: string;
  Component: any;
  Layout: React.FC<PublicLayoutProps>;
};

const publicRoutes: PublicRouteType[] = [
  {
    exact: true,
    path: '/login',
    Component: LoginForm,
    Layout: PublicLayout,
  },
  {
    exact: true,
    path: '/register',
    Component: RegisterForm,
    Layout: PublicLayout,
  },
];

export type { PublicRouteType };

export default publicRoutes;
