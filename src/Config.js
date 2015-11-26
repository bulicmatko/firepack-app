
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Config

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 *  Config
 */
const Config = {

    appPath: '/',

    firebaseUrl: 'https://fifa-tracker.firebaseio.com',

    sidebarMenu: {
        title: 'Example Apps',
        links: [
            {
                _id: 'example-app',
                icon: 'rocket',
                title: 'Example App',
                route: '/apps/example-app'
            }
        ]
    }

};

// Export Config
export default Config;
