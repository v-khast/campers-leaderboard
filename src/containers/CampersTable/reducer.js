import {LOAD_TABLE, LOAD_TABLE_FAILED} from './constants'


const initialState = {
    table: [],
    current: '',
    errorMessage: ''
};

export default function campers(state = initialState, action) {
    switch (action.type) {

        case LOAD_TABLE:
            return {
                ...state,
                table: action.payload.table,
                current: action.payload.current,
            };

        case LOAD_TABLE_FAILED:
            return {
                ...state,
                errorMessage: action.payload,
            };

        default:
            return state
    }
}