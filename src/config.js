
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Firepack App - Config

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 *  Config
 */
export default {

    appBasePath: '/',

    firebaseUrl: 'https://fifa-tracker.firebaseio.com',

    sidebarMenu: [
        {
            title: 'Firepack Apps',
            links: [
                {
                    _id: 'example-app',
                    icon: 'rocket',
                    title: 'Example App',
                    route: '/apps/example-app'
                }
            ]
        }
    ]

};
