/**
 * Created by CraigFox on 3/06/16.
 */
import React, { PropTypes } from 'react'
import Knight from './Knight'

const KnightList = ({ knights, onKnightClick }) => (
    <div>
    <h3>A Game of Knights</h3>
    <ul>
        {knights.map(knight =>
            <Knight
                key={knight.id}
                {...knight}
                onClick={() => onKnightClick(knight, 'Grande Tourney')}
            />
        )}

    </ul>
    </div>
)

KnightList.propTypes = {
    knights: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        tournaments: PropTypes.array.isRequired
    }).isRequired).isRequired,
    onKnightClick: PropTypes.func.isRequired
}

export default KnightList
