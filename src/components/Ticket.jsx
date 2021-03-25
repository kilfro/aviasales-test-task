import '../style/ticket.css'

import FlightSegment from './FlightSegment'
import React from 'react'

const Ticket = ({ price, carrier, segments }) => {
    return (
        <div className='ticket-card'>
            <div className='ticket-header'>
                <div>{price.toLocaleString('ru-ru')} P</div>
                <img src={`http://pics.avs.io/99/36/${carrier}.png`} />
            </div>
            {segments.map(segment => <FlightSegment key={segment.date} {...segment} />)}
        </div>
    )
}

export default Ticket