import React, { PropTypes } from 'react'

const Knight = ({ onClick, name, title, tournaments }) => (
    <li
        onClick={onClick}
    >
        {title}&nbsp;{name}
    </li>
)

Knight.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tournaments: PropTypes.array.isRequired
}

export default Knight