import './style/app.css'

import React, { useEffect } from 'react'

import Loader from './components/Loader'
import StopsFilter from './components/StopsFilter'
import TicketsList from './components/TicketsList'
import { connect } from 'react-redux'
import { requestSearchId } from './store/actions'

const App = ({ isLoading, requestSearchId }) => {
    useEffect(requestSearchId, [])

    return (
        <div className='app'>
            {isLoading
                ? <Loader />
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