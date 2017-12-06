import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TableRow extends Component {
    static propTypes = {
        camper: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
    };

    render() {
        const { camper, index } = this.props;

        return (
            <div className="table-row">
                <div className="table-data">{index+1}</div>
                <div className="table-data justify-left">
                    <a href={`https://www.freecodecamp.com/${camper.username}`}
                       target="_blank" className="user-link">
                        <img src={camper.img} className="profile-img"
                             alt={`${camper.username} avatar`} />
                        {camper.username}
                    </a>
                </div>
                <div className="table-data">{camper.recent}</div>
                <div className="table-data">{camper.alltime}</div>
            </div>
        )

    }
}
