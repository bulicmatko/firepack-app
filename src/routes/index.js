/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Routes

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { createRoutes } from 'firepack';

import RootContainer from '../containers/RootContainer';

import WelcomePage from '../components/pages/WelcomePage';

/**
 *  Index Path
 */
const indexPath = '/welcome';

/**
 *  Create Routes
 */
export default createRoutes([
  {
    path: '/',
    component: RootContainer,
    indexRoute: {
      component: WelcomePage,
    },
    childRoutes: [
      {
        path: '/welcome',
        component: WelcomePage,
      },
    ],
  },
], indexPath);
