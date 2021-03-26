import React from 'react'
import StopsFilter from './components/StopsFilter'
import Ticket from './components/Ticket'

const testTicket = {
    "price": 31101,
    "carrier": "SU",
    "segments": [
        {
            "origin": "MOW",
            "destination": "HKT",
            "date": "2021-04-03T02:33:00.000Z",
            "stops": [],
            "duration": 1729
        },
        {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2021-04-23T01:08:00.000Z",
            "stops": [
                "SHA",
                "BKK"
            ],
            "duration": 1149
        }
    ]
}

const App = () => {
    return (
        <>
            <StopsFilter />
            <Ticket {...testTicket} />
        </>
    )
}

export default App

