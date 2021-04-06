import '../style/filter-option.css'

import Checkbox from './Checkbox'
import PropTypes from 'prop-types'
import React from 'react'

const FilterOption = ({ value, ...rest }) => {
    return (
        <label htmlFor={rest.id} className='filter-option'>
            <Checkbox {...rest} />{value}
        </label>
    )
}

FilterOption.propTypes = {
    checked: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}

export default FilterOption