import '../style/tickets-list.css'

import React from 'react'
import Ticket from './Ticket'
import { connect } from 'react-redux'

const TicketsList = ({ tickets }) => (
    <div className='tickets-list'>
        {tickets.slice(0, 20).map(ticket => <Ticket {...ticket} key={JSON.stringify(ticket)} />)}
    </div>
)

const mapStateToProps = state => ({
    tickets: state.tickets,
})

export default connect(mapStateToProps)(TicketsList)