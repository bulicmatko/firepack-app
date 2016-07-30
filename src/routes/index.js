/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Routes

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { registerRoutes } from 'firepack';

import RootContainer from '../containers/RootContainer';

import WelcomePage from '../components/pages/WelcomePage';

/**
 *  Index Path
 */
const indexPath = '/welcome';

/**
 *  Register Routes
 */
export default registerRoutes([
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
