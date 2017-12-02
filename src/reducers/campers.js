import { SHOW_ALL_TIMES, SHOW_PAST_30_DAYS } from '../constants/ActionTypes'

const allTimesIsCurrent = false;

export default function campers(state = allTimesIsCurrent, action) {
    switch (action.type) {

        case SHOW_ALL_TIMES:
            return true;

        case SHOW_PAST_30_DAYS:
            return false;

        default:
            return state
    }
}
