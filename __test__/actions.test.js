import {
  ADD_FOUND_TICKETS,
  LOAD_TICKETS_PORTION,
  REQUEST_SEARCH_ID,
  SET_IS_LOADING,
  SET_ORDER_BY,
  SET_SEARCH_ID,
  SET_STOPS_FILTER,
} from '../src/store/types'
import {
  addFoundTicket,
  loadTicketsPortion,
  requestSearchId,
  setIsLoading,
  setOrderBy,
  setSearchId,
  setStopsFilter,
} from '../src/store/actions'

test("Action 'set isLoading' must be created correctly", () => {
  const isLoading = false
  expect(setIsLoading(isLoading)).toStrictEqual({
    type: SET_IS_LOADING,
    isLoading,
  })
})

test("Action 'set searchId' must be created correctly", () => {
  const searchId = 'q2w3e'
  expect(setSearchId(searchId)).toStrictEqual({
    type: SET_SEARCH_ID,
    id: searchId,
  })
})

test("Action 'request searchId' must be created correctly", () => {
  expect(requestSearchId()).toStrictEqual({ type: REQUEST_SEARCH_ID })
})

test("Action 'add found tickets' must be created correctly", () => {
  const tickets = [{}, {}]
  expect(addFoundTicket(tickets)).toStrictEqual({
    type: ADD_FOUND_TICKETS,
    tickets,
  })
})

test("Action 'load tickets portion' must be created correctly", () => {
  const searchId = '2w3e4'
  expect(loadTicketsPortion(searchId)).toStrictEqual({
    type: LOAD_TICKETS_PORTION,
    searchId,
  })
})

test("Action 'set stops filter' must be created correctly", () => {
  const stopsFilter = [1, 3]
  expect(setStopsFilter(stopsFilter)).toStrictEqual({
    type: SET_STOPS_FILTER,
    stopsFilter,
  })
})

test("Action 'set oreder by' must be created correctly", () => {
  const orderBy = 'price'
  expect(setOrderBy(orderBy)).toStrictEqual({
    type: SET_ORDER_BY,
    orderBy,
  })
})
