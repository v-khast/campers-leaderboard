import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CampersTable from '../components/CampersTable'
import * as TableActions from '../actions'

const App = ({campersAllTimes, campersPastDays, actions, allTimesIsCurrent}) => (
    <div>
        <h1>CodeCamp Leaderboard</h1>
        <CampersTable
            campersAllTimes={campersAllTimes}
            campersPastDays={campersPastDays}
            actions={actions}
            allTimesIsCurrent={allTimesIsCurrent}
        />
    </div>
);

App.propTypes = {
    campersAllTimes: PropTypes.array.isRequired,
    campersPastDays: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    allTimesIsCurrent: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
      campersAllTimes: ownProps.campersAllTimes,
      campersPastDays: ownProps.campersPastDays,
      allTimesIsCurrent: state.allTimesIsCurrent
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators(TableActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
