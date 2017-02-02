/**
 * Created by CraigFox on 3/06/16.
 */
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actions/actions'
import Link from '../presentation/Link'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.filter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink
