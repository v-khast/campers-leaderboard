import { combineReducers } from 'redux'
import campers from './containers/CampersTable/reducer'

const rootReducer = combineReducers({
    campersTable: campers,
});

export default rootReducer