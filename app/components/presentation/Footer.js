/**
 * Created by CraigFox on 3/06/16.
 */
import React from 'react'
import FilterLink from '../container/FilterLink'

const Footer = () => (
    <p>
        Show:
        {" "}
        <FilterLink filter="SHOW_ALL">
            All
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_VICTORIOUS">
            Victorious Knights
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_UNTESTED">
            Untested Knights
        </FilterLink>
    </p>
)

export default Footer