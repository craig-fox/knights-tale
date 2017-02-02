import { connect } from 'react-redux'
import KnightList from '../presentation/KnightList'
import {addEventResult} from '../../actions/actions'

const getFilteredKnights = (knights, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return knights
        case 'SHOW_VICTORIOUS':
            return knights.filter(k => k.tournaments.length >= 1)
        case 'SHOW_UNTESTED':
            return knights.filter(k => k.tournaments.length === 0)
    }
}

const mapStateToProps = (state) => {
    return {
        knights: getFilteredKnights(state.knights, state.filter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onKnightClick: (knight, result) => {
            dispatch(addEventResult(knight, result))
        }
    }
}

const FilteredKnightList = connect(
    mapStateToProps,
    mapDispatchToProps
)(KnightList)

export default FilteredKnightList

