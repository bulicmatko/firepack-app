/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Routes

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import RootContainer from '../containers/RootContainer';
import AuthContainer from '../containers/AuthContainer';
import WorkspaceContainer from '../containers/WorkspaceContainer';

import AuthPage from '../components/pages/AuthPage';
import DashboardPage from '../components/pages/DashboardPage';

import route from '../utils/route.util';

import store from '../store';
import getUser from '../selectors/user';

const isUserAuthenticated = () => (
  getUser(store.getState()).isAuthenticated
);

/**
 *  Routes
 */
export default (routes) => ({
  path: route('root'),
  component: RootContainer,
  indexRoute: {
    onEnter: (nextState, replace) => replace(route('auth')),
  },
  childRoutes: [
    {
      path: route('root'),
      component: AuthContainer,
      onEnter: (nextState, replace) => (isUserAuthenticated() && replace(route('dashboard'))),
      childRoutes: [
        {
          path: route('auth'),
          component: AuthPage,
        },
      ],
    },
    {
      path: route('root'),
      component: WorkspaceContainer,
      onEnter: (nextState, replace) => (!isUserAuthenticated() && replace(route('auth'))),
      childRoutes: [
        {
          path: route('dashboard'),
          component: DashboardPage,
        },
        ...routes,
      ],
    },
  ],
});
