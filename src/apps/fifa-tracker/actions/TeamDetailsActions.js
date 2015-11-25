
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Team Details Actions

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// Dispatcher
import Dispatcher from '../../_app/dispatchers/Dispatcher';

// Team Details Events
import TeamDetailsEvents from '../events/TeamDetailsEvents';

/**
 *  Team Details Actions
 */
class TeamsListActions {

    fetchTeams () {
        Dispatcher.dispatch({
            event: TeamDetailsEvents.FETCH_TEAMS
        });
    }

}

// Export Team Details Actions
export default new TeamsListActions();
