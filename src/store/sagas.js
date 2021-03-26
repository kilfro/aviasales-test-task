import { LOAD_TICKETS_PORTION, REQUEST_SEARCH_ID } from './types'
import {
  addFoundTicket,
  loadTicketsPortion,
  setIsLoading,
  setSearchId,
} from './actions'
import { all, call, put, takeLatest } from 'redux-saga/effects'

function* fetchSearchId() {
  const searchId = yield call(() => {
    return fetch('https://front-test.beta.aviasales.ru/search')
      .then((resp) => resp.json())
      .then((data) => {
        return data.searchId
      })
  })

  yield put(setSearchId(searchId))
  yield put(loadTicketsPortion(searchId))
}

function* requestSearchIdSaga() {
  yield takeLatest(REQUEST_SEARCH_ID, fetchSearchId)
}

function* fetchTickets({ searchId }) {
  const gotTickets = yield call((searchId) => {
    return fetch(
      `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
    )
      .then((resp) => resp.json())
      .then((data) => data.tickets)
  }, searchId)

  yield put(addFoundTicket(gotTickets))
  yield put(setIsLoading(false))
}

function* watchLoadTickets() {
  yield takeLatest(LOAD_TICKETS_PORTION, fetchTickets)
}

export function* rootSaga() {
  yield all([requestSearchIdSaga(), watchLoadTickets()])
}
