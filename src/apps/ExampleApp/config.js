
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Example App - Config

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 *  Config
 */
export default {

    appBasePath: 'example-app',

    sidebarMenu: [
        {
            title: 'Menu',
            links: [
                {
                    icon: 'tachometer',
                    title: 'Dashboard',
                    route: '/apps/example-app/dashboard'
                }, {
                    icon: 'exclamation-triangle',
                    title: 'Error 404',
                    route: '/apps/example-app/error-404'
                }
            ]
        }
    ]

};
