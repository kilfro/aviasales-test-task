import React from 'react'
import { TicketsList } from '../../src/components/TicketsList'

describe(TicketsList, () => {
  const tickets = [
    {
      price: 31101,
      carrier: 'SU',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2021-04-03T02:33:00.000Z',
          stops: [],
          duration: 1729,
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2021-04-23T01:08:00.000Z',
          stops: ['SHA', 'BKK'],
          duration: 1149,
        },
      ],
    },
    {
      price: 44751,
      carrier: 'EY',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2021-04-03T01:37:00.000Z',
          stops: ['IST', 'HKG'],
          duration: 670,
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2021-04-23T15:13:00.000Z',
          stops: ['SIN', 'DXB'],
          duration: 1289,
        },
      ],
    },
    {
      price: 30982,
      carrier: 'EK',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2021-04-03T06:30:00.000Z',
          stops: ['AUH', 'SHA', 'BKK'],
          duration: 1902,
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2021-04-23T05:32:00.000Z',
          stops: ['BKK', 'IST'],
          duration: 941,
        },
      ],
    },
    {
      price: 79466,
      carrier: 'SU',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2021-04-03T04:20:00.000Z',
          stops: ['SIN', 'SHA'],
          duration: 661,
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2021-04-23T05:53:00.000Z',
          stops: ['AUH'],
          duration: 1600,
        },
      ],
    },
    {
      price: 43073,
      carrier: 'TG',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2021-04-03T08:09:00.000Z',
          stops: ['IST', 'BKK', 'DXB'],
          duration: 855,
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2021-04-22T23:47:00.000Z',
          stops: [],
          duration: 1750,
        },
      ],
    },
  ]

  test('must be rendered correctly', () => {
    const component = shallow(
      <TicketsList tickets={tickets} orderBy='price' stopsFilter={[]} />
    )

    expect(component).toMatchSnapshot()
  })
})
