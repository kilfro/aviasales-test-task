import '../style/tickets-list.css'

import React from 'react'
import Ticket from './Ticket'
import { connect } from 'react-redux'

const TicketsList = ({ tickets, stopsFilter }) => {
    const filterBySteps = ticket => (
        ticket.segments.reduce((sum, segment) => segment.stops.length === stopsFilter && sum, true)
    )

    return (
        <div className='tickets-list'>
            {tickets
                .filter(filterBySteps)
                .slice(0, 20)
                .map(ticket => <Ticket {...ticket} key={JSON.stringify(ticket)} />)}
        </div>
    )
}

const mapStateToProps = state => ({
    tickets: state.tickets,
    stopsFilter: state.stopsFilter,
})

export default connect(mapStateToProps)(TicketsList)