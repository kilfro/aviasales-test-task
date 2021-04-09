import { App } from '../src/App'
import Loader from '../src/components/Loader'
import React from 'react'
import TicketsList from '../src/components/TicketsList'

describe(App, () => {
  test('must show loader only while loading is in progress', () => {
    const app = shallow(<App isLoading={true} />)
    expect(app.find(Loader).length).toBe(1)
    expect(app.find(TicketsList).length).toBe(0)

    app.setProps({ isLoading: false })
    expect(app.find(Loader).length).toBe(0)
    expect(app.find(TicketsList).length).toBe(1)
  })
})
