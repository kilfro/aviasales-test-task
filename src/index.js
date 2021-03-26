import './index.css'

import App from './App'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './store/reducer'
import { toggleIsLoading } from './store/actions'

const testTicket = [
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
]
const defaultState = {
  isLoading: true,
  tickets: testTicket,
}
const store = createStore(reducer, defaultState)

setTimeout(() => store.dispatch(toggleIsLoading()), 1500)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
