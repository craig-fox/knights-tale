/**
 * Created by CraigFox on 3/06/16.
 */
import { ADD_KNIGHT, REMOVE_KNIGHT} from '../actions/actions'

function knight(state, action){
    switch (action.type) {
        case ADD_KNIGHT:
            return {
                id: action.id,
                name: action.knight.name,
                title: action.knight.title,
                tournaments: action.knight.tournaments
            }
        default:
            return state
    }
}

function knights(state=[], action){
    switch(action.type){
        case ADD_KNIGHT:
            return [
                ...state,
                knight(state, action)
            ]

        case REMOVE_KNIGHT:
            var newState = state.slice() //copy array
            let target = newState.find((k) => {k.id === action.index})
            let targetIndex = newState.indexOf(target)
            newState.splice(targetIndex, 1) //remove element
            return newState

        default:
            return state
    }
}

export default knights
