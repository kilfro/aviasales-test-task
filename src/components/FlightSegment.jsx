import { getDurationString, getFlightTimes, getStopsQuantityString } from '../functions'

import React from 'react'

const FlightSegment = ({ origin, destination, date, duration, stops }) => (
    <div className='flight-segment'>
        <div className='segment-part'>
            <div>{origin} - {destination}</div>
            <div>{getFlightTimes(new Date(date), duration)}</div>
        </div>
        <div className='segment-part'>
            <div>в пути</div>
            <div>{getDurationString(duration)}</div>
        </div>
        <div className='segment-part'>
            <div>{getStopsQuantityString(stops.length)}</div>
            <div>{stops.join(', ')}</div>
        </div>
    </div>
)

export default FlightSegment