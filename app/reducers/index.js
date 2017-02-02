/**
 * Created by CraigFox on 3/06/16.
 */
import { combineReducers } from 'redux'
import filter from './filter'
import knights from './knights'

const knightsTaleApp = combineReducers({
        filter,
        knights
    }
)


export default knightsTaleApp