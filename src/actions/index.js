import * as types from '../constants/ActionTypes'

export const showAllTimes = () => ({
    type: types.SHOW_ALL_TIMES,
});

export const showPastThirtyDays = () => ({
    type: types.SHOW_PAST_30_DAYS,
});
