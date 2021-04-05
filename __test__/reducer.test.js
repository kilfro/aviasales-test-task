import {
  addFoundTicket,
  setIsLoading,
  setOrderBy,
  setSearchId,
  setStopsFilter,
} from '../src/store/actions'

import reducer from '../src/store/reducer'

const getTestState = (custom) => ({
  isLoading: true,
  tickets: [],
  searchId: null,
  stopsFilter: [],
  orderBy: 'price',
  ...custom,
})

describe('Reducer', () => {
  test('must return state if action type is not found', () => {
    const action = { type: 'NONEXISTENT_TYPR' }
    const state = { isDefaultState: true }

    expect(reducer(state, action)).toStrictEqual(state)
  })

  test('must set isLoading', () => {
    const action = setIsLoading(false)
    const state = getTestState()
    const returnedState = reducer(state, action)

    expect(returnedState.isLoading).toBeFalsy()
    expect(state.isLoading).toBeTruthy()
  })

  test('must set search ID', () => {
    const id = 'qaz12'
    const action = setSearchId(id)
    const state = getTestState()
    const returnedState = reducer(state, action)

    expect(returnedState.searchId).toBe(id)
    expect(state.searchId).toBeNull()
  })

  test('must add next portion found tickets', () => {
    const foundTickets = [{ id: 10 }, { id: 11 }, { id: 12 }]
    const tickets = [{ id: 0 }]
    const action = addFoundTicket(foundTickets)
    const state = getTestState({ tickets })
    const returnedState = reducer(state, action)

    expect(returnedState.tickets.length).toBe(4)
    expect(state.tickets).toBe(tickets)
  })

  test('must set stops filter option', () => {
    const newFilter = [0, 2]
    const filter = [1, 3]
    const action = setStopsFilter(newFilter)
    const state = getTestState({ stopsFilter: filter })
    const returnedState = reducer(state, action)

    expect(returnedState.stopsFilter).toBe(newFilter)
    expect(state.stopsFilter).toBe(filter)
  })

  test('must set order by option', () => {
    const newOrder = 'new_order'
    const action = setOrderBy(newOrder)
    const state = getTestState()
    const returnedState = reducer(state, action)

    expect(returnedState.orderBy).toBe(newOrder)
    expect(state.orderBy).not.toBe(newOrder)
  })
})
