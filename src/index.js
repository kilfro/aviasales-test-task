import './index.css'
import 'regenerator-runtime/runtime'

import { applyMiddleware, createStore } from 'redux'

import App from './App'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import reducer from './store/reducer'
import { rootSaga } from './store/sagas'

const defaultState = {
  isLoading: true,
  tickets: [],
  searchId: null,
  stopsFilter: [],
  orderBy: 'price',
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  defaultState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
