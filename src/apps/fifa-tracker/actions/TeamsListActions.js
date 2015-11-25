
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Teams List Actions

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// Dispatcher
import Dispatcher from '../../_app/dispatchers/Dispatcher';

// Teams List Events
import TeamsListEvents from '../events/TeamsListEvents';

/**
 *  Teams List Actions
 */
class TeamsListActions {

    fetchTeams () {
        Dispatcher.dispatch({
            event: TeamsListEvents.FETCH_TEAMS
        });
    }

}

// Export Teams List Actions
export default new TeamsListActions();
