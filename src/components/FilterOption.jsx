import '../style/filter-option.css'

import Checkbox from './Checkbox'
import React from 'react'

const FilterOption = ({ value, ...rest }) => {
    return (
        <label htmlFor={rest.id} className='filter-option'>
            <Checkbox {...rest} />{value}
        </label>
    )
}

export default FilterOption