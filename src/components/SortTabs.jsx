import '../style/sort-tabs.css'

import React from 'react'
import { connect } from 'react-redux'
import { setOrderBy } from '../store/actions'

const SortTabs = ({ orderBy, setOrderBy }) => {
    const chosenStyle = {
        border: 'none',
        background: '#2196F3',
        color: '#FFFFFF',
    }
    const getChosenStyle = (option) => orderBy === option ? chosenStyle : {}
    const clickHandler = event => {
        setOrderBy(event.target.id)
    }

    return (
        <div className='tabs-container'>
            <div style={getChosenStyle('price')} onClick={clickHandler} id='price'>Самый дешевый</div>
            <div style={getChosenStyle('duration')} onClick={clickHandler} id='duration'>Самый быстрый</div>
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