/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Routes

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import RootContainer from '../containers/RootContainer';

import HomePage from '../components/pages/HomePage';
import Page1 from '../components/pages/Page1';
import Page2 from '../components/pages/Page2';
import Page3 from '../components/pages/Page3';

/**
 *  Routes
 */
export default [
  {
    path: '/app',
    component: RootContainer,
    indexRoute: {
      component: HomePage,
    },
    childRoutes: [
      {
        path: '/app/page-1',
        component: Page1,
      },
      {
        path: '/app/page-2',
        component: Page2,
      },
      {
        path: '/app/page-3',
        component: Page3,
      },
    ],
  },
];
