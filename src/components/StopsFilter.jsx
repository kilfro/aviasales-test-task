import '../style/stops-filter.css'

import FilterOption from './FilterOption'
import React from 'react'

const all = new Map()
all.set(0, 'Без пересадок')
all.set(1, '1 пересадка')
all.set(2, '2 пересадки')

const StopsFilter = ({ allOptions = all }) => {
    const [filterBy, setFilterBy] = React.useState([])
    const [chooseAll, setChooseAll] = React.useState(false)

    const isChecked = key => filterBy.includes(key)

    const changeHandler = key => {
        let newFilterBy
        if (isChecked(key)) {
            newFilterBy = filterBy.filter(f => f !== key)
            if (chooseAll) {
                setChooseAll(false)
            }
        } else {
            newFilterBy = [...filterBy, key]
            if (allOptions.size === newFilterBy.length) {
                setChooseAll(true)
            }
        }

        setFilterBy(newFilterBy)
    }

    const chooseAllHandler = () => {
        if (chooseAll) {
            setChooseAll(false)
            setFilterBy([])
        } else {
            setChooseAll(true)
            setFilterBy(Array.from(allOptions.keys()))
        }
    }

    return <div className='filter-container'>
        <div style={{margin: '0 20px 10px 20px'}}>количество пересадок</div>
        <FilterOption checked={chooseAll} onChange={chooseAllHandler} value='Все' />
        {Array.from(allOptions).map(([key, value]) => (
            <FilterOption id={key.toString()} checked={isChecked(key)} onChange={() => changeHandler(key)} value={value} key={key.toString()} />
        ))}
    </div>
}

export default StopsFilter