import {  Filters } from '../actions/actions'
import { SET_FILTER } from '../actions/actions'
const SHOW_ALL = Filters.SHOW_ALL

function filter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_FILTER:
            return action.filter
        default:
            return state
    }
}

export default filter;