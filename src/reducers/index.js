import { combineReducers } from 'redux'
import campers from './campers'

const rootReducer = combineReducers({
    allTimesIsCurrent: campers,
});

export default rootReducer
