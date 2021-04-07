import FlightSegment from '../../src/components/FlightSegment'
import React from 'react'

describe(FlightSegment, () => {
  test('must be rendered correctly', () => {
    const props = {
      origin: 'SVO',
      destination: 'LED',
      date: new Date(2021, 3, 7, 19, 45).toString(),
      duration: 75,
      stops: ['SVX'],
    }
    const component = shallow(<FlightSegment {...props} />)
    expect(component).toMatchSnapshot()
  })
})
