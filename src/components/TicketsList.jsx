import '../style/tickets-list.css'

import React from 'react'
import SortTabs from './SortTabs'
import Ticket from './Ticket'
import { connect } from 'react-redux'

export const TicketsList = ({ tickets, stopsFilter, orderBy }) => {
    const filterBySteps = ticket => {
        if (stopsFilter.length === 0) return true
        return ticket.segments.reduce((sum, segment) => stopsFilter.includes(segment.stops.length) && sum, true)
    }

    const sumUpDuration = ticket => {
        return ticket.segments.reduce((sum, next) => sum + next.duration, 0)
    }

    const comparator = (one, two) => {
        if (orderBy === 'duration') {
            return sumUpDuration(one) - sumUpDuration(two)
        }
        return one[orderBy] - two[orderBy]
    }

    return (
        <div className='tickets-list'>
            <SortTabs />
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