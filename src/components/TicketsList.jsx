import '../style/tickets-list.css'

import React from 'react'
import Ticket from './Ticket'

const TicketsList = ({ tickets }) => (
    <div className='tickets-list'>
        {tickets.map(ticket => <Ticket {...ticket} key={JSON.stringify(ticket)} />)}
    </div>
)

export default TicketsList