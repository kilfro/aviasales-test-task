import React from 'react'
import Ticket from '../../src/components/Ticket'

describe(Ticket, () => {
  test('must be rendered correctly', () => {
    const props = {
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
    }
    const component = shallow(<Ticket {...props} />)

    expect(component).toMatchSnapshot()
  })
})
