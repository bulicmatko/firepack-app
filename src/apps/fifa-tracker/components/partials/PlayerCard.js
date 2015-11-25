
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Player Card

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// React
import React from 'react';

/**
 *  Player Card
 */
class PlayerCard extends React.Component {

    static get propTypes () {
        return {
            image: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired,
            position: React.PropTypes.string.isRequired,
            team: React.PropTypes.string.isRequired
        };
    }

    shouldComponentUpdate (nextProps, nextState) {
        return (
            this.props.image !== nextProps.image ||
            this.props.name !== nextProps.name ||
            this.props.position !== nextProps.position ||
            this.props.team !== nextProps.team
        );
    }

    render () {
        return (
            <div className="PlayerCard">
                <div className="image">
                    <img src={this.props.image} alt={this.props.name}/>
                </div>
                <div className="data">
                    <div className="name">{this.props.name}</div>
                    <div className="team">{this.props.team}</div>
                </div>
            </div>
        );
    }

}

// Export Player Card
export default PlayerCard;
