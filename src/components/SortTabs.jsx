import '../style/sort-tabs.css'

import React from 'react'
import { connect } from 'react-redux'
import { setOrderBy } from '../store/actions'

const SortTabs = ({ orderBy, setOrderBy }) => {
    const orderOptions = {
        price: 'Самый дешевый',
        duration: 'Самый быстрый',
    }

    const chosenStyle = {
        border: 'none',
        background: '#2196F3',
        color: '#FFFFFF',
    }

    const getChosenStyle = (option) => orderBy === option ? chosenStyle : {}

    return (
        <div className='tabs-container'>
            {Object.entries(orderOptions).map(([key, label]) => (
                <div
                    style={getChosenStyle(key)}
                    onClick={() => setOrderBy(key)}
                    key={key}
                >
                    {label}
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    orderBy: state.orderBy
})

const mapDispatchToProps = {
    setOrderBy
}

export default connect(mapStateToProps, mapDispatchToProps)(SortTabs)