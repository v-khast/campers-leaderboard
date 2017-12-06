import {LOAD_TABLE, LOAD_TABLE_FAILED} from './constants'


const initialState = {
    table: [],
    current: ''
};

export default function campers(state = initialState, action) {
    switch (action.type) {

        case LOAD_TABLE:
            return action.payload;

        case LOAD_TABLE_FAILED:
            return action.payload;

        default:
            return state
    }
}