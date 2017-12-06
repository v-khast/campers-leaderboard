import * as types from './constants'
import axios from 'axios';


export function loadTable(table) {
    return {
        type: types.LOAD_TABLE,
        payload: table
    };
}

export function loadTableFailed(error) {
    return {
        type: types.LOAD_TABLE_FAILED,
        payload: error
    };
}

export const loadAllTimes = () => async (dispatch) => {
    try {
        const response = await axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
        dispatch(loadTable({
            table: response.data,
            current: 'all'
        }));
    } catch (error) {
        console.log(error);
        dispatch( loadTableFailed(error) );
    }
};

export const loadPastThirtyDays = () => async (dispatch) => {
    try {
        const response = await axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
        dispatch(loadTable({
            table: response.data,
            current: 'recent'
        }));
    } catch (error) {
        console.log(error);
        dispatch(loadTableFailed(error));
    }
};
