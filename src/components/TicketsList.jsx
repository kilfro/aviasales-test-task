import '../style/tickets-list.css'

import React from 'react'
import Ticket from './Ticket'
import { connect } from 'react-redux'

const TicketsList = ({ tickets, stopsFilter, orderBy }) => {
    const filterBySteps = ticket => {
        if (stopsFilter.length === 0) return true
        return ticket.segments.reduce((sum, segment) => stopsFilter.includes(segment.stops.length) && sum, true)
    }

    const comparator = (one, two) => one[orderBy] - two[orderBy]

    return (
        <div className='tickets-list'>
            {tickets
                .filter(filterBySteps)
                .sort(comparator)
                .slice(0, 20)
                .map(ticket => <Ticket {...ticket} key={JSON.stringify(ticket)} />)}
        </div>
    )
}

const mapStateToProps = state => ({
    tickets: state.tickets,
    stopsFilter: state.stopsFilter,
    orderBy: state.orderBy,
})

export default connect(mapStateToProps)(TicketsList)