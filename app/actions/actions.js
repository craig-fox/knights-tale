/**
 * Created by CraigFox on 3/06/16.
 */
export const ADD_KNIGHT = 'ADD_KNIGHT'
export const REMOVE_KNIGHT = 'REMOVE_KNIGHT'
export const WITHDRAW_KNIGHT = 'WITHDRAW_KNIGHT'
export const ADD_EVENT_RESULT = 'ADD_EVENT_RESULT'
export const SET_FILTER = 'SET_FILTER'

let nextKnightId = 0

export const Filters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_VICTORIOUS: 'SHOW_VICTORIOUS',
    SHOW_UNTESTED: 'SHOW_UNTESTED'
}

export function addKnightToTournament(knight){
    console.log("Adding the knight " + JSON.stringify(knight))
    return {
        type: ADD_KNIGHT,
        id: nextKnightId++,
        knight
    }
}

export function removeKnightFromTournament(index){
    return {type: REMOVE_KNIGHT, index}
}

export function withdrawKnightFromTournament(knight){
    return {type: WITHDRAW_KNIGHT, knight}
}

export function addEventResult(knight, result){
    return {type: ADD_EVENT_RESULT, knight: knight, result}
}

export function setFilter(filter){
    return {type: SET_FILTER, filter }
}