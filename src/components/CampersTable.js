import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TableRow from './TableRow'
import classnames from 'classnames'


export default class CampersTable extends Component {

    static propTypes = {
        campersAllTimes: PropTypes.array.isRequired,
        campersPastDays: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired,
        allTimesIsCurrent: PropTypes.bool.isRequired
    };

    render() {

        const { campersAllTimes, campersPastDays, actions, allTimesIsCurrent } = this.props;
        const tableHeadClasses = {
          "table-data": true,
          "pointer": true
        }
        const pastDaysClasses = classnames({
          ...tableHeadClasses,
          "current": !allTimesIsCurrent
        });
        const allTimesClasses = classnames({
          ...tableHeadClasses,
          "current": allTimesIsCurrent
        });

        return (
            <div className="table-wrapper">
              <div className="table">

                <div className="table-head">
                  <div className="table-row">
                    <div className="table-data">#</div>
                    <div className="table-data">Name</div>
                    <div onClick={actions.showPastThirtyDays}
                         className={pastDaysClasses}>
                        Points in past 30 days
                    </div>
                    <div onClick={actions.showAllTimes}
                         className={allTimesClasses}>
                        All time points
                    </div>
                  </div>
                </div>

                <div className="table-body">
                    {allTimesIsCurrent ?

                        campersAllTimes.map((camper, index) =>
                            <TableRow key={camper.username}
                                      index={index}
                                      camper={camper} />) :

                        campersPastDays.map((camper, index) =>
                            <TableRow key={camper.username}
                                      index={index}
                                      camper={camper} />)}
                </div>

              </div>
            </div>
        )
    }
}
