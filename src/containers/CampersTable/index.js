import React, { Component } from 'react'
import TableRow from '../../components/TableRow/index'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getCampersTable } from './selectors'
import { loadAllTimes, loadPastThirtyDays } from './actions'


export class CampersTable extends Component {

    componentDidMount(){
        this.props.onLoadAllTimes();
    }

    render() {

        const { campersTable: { table, current, errorMessage }, onLoadAllTimes, onLoadPastThirtyDays } = this.props;

        const tableHeadClasses = {
          "table-data pointer": true,
        };

        const pastDaysClasses = classnames({
          ...tableHeadClasses,
          "current": current === "recent"
        });

        const allTimesClasses = classnames({
          ...tableHeadClasses,
          "current": current === "all"
        });

        return (
            <div className="table-wrapper">
                <div className="table">

                <div className="table-head">
                  <div className="table-row">
                    <div className="table-data">#</div>
                    <div className="table-data">Name</div>
                    <div onClick={onLoadPastThirtyDays}
                         className={pastDaysClasses}>
                        Points in past 30 days
                    </div>
                    <div onClick={onLoadAllTimes}
                         className={allTimesClasses}>
                        All time points
                    </div>
                  </div>
                </div>

                <div className="table-body">
                  {errorMessage ?
                      <div>
                          <h3>Sorry, there is no data to display.</h3>
                          <p>It seems that you do not have access to the requested data.</p>
                          <p>Error message: {errorMessage}</p>
                      </div> :
                      table.length ?
                          table.map((camper, index) =>
                              <TableRow key={camper.username}
                                        index={index}
                                        camper={camper} />) :
                          <div>Loading...</div>}
                </div>

              </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    campersTable: getCampersTable(),
});

const mapDispatchToProps = {
    onLoadAllTimes: loadAllTimes,
    onLoadPastThirtyDays: loadPastThirtyDays,
};

const EnhancedComponent = connect(mapStateToProps, mapDispatchToProps)(CampersTable);
export default EnhancedComponent;