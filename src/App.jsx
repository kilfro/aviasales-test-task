import './style/app.css'

import React from 'react'
import StopsFilter from './components/StopsFilter'
import TicketsList from './components/TicketsList'
import { connect } from 'react-redux'

const App = ({ isLoading }) => {
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

export default connect(mapStateToProps)(App)