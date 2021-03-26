import './style/app.css'

import React, { useEffect } from 'react'

import StopsFilter from './components/StopsFilter'
import TicketsList from './components/TicketsList'
import { connect } from 'react-redux'
import { requestSearchId } from './store/actions'

const App = ({ isLoading, requestSearchId }) => {
    useEffect(requestSearchId, [])

    return (
        <div className='app'>
            {isLoading
                ? <h1>Загрузка...</h1>
                : <>
                    <StopsFilter />
                    <TicketsList />
                </>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    isLoading: state.isLoading
})

const mapDispatchToProps = {
    requestSearchId
}

export default connect(mapStateToProps, mapDispatchToProps)(App)