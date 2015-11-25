
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Teams List Component

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// React
import React from 'react';

// Stats Store
import StatsStore from '../stores/StatsStore';

// Teams Table Component
import TeamsTableComponent from './partials/TeamsTableComponent';

/**
 *  Teams List Component
 */
class TeamsListComponent extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            teams: StatsStore.getTeams()
        };

        this.__handleStatsStoreDataChange = this._handleStatsStoreDataChange.bind(this);
    }

    shouldComponentUpdate (nextProps, nextState) {
        return this.state.teams !== nextState.teams;
    }

    componentDidMount () {
        StatsStore.addDataChangeListener(this.__handleStatsStoreDataChange);
    }

    componentWillUnmount () {
        StatsStore.removeDataChangeListener(this.__handleStatsStoreDataChange);
    }

    _handleStatsStoreDataChange () {
        this.setState({
            teams: StatsStore.getTeams()
        });
    }

    _renderTeamsTable (teams) {
        return <TeamsTableComponent teams={teams}/>;
    }

    _renderLoading () {
        return <div>Loading...</div>;
    }

    render () {
        return (
            <section className="TeamsListComponent">
                {
                    this.state.teams.length
                        ? this._renderTeamsTable(this.state.teams)
                        : this._renderLoading()
                }
            </section>
        );
    }

}

// Export Teams List Component
export default TeamsListComponent;
