import { ADD_FOUND_TICKETS, SET_IS_LOADING, SET_SEARCH_ID } from './types'

const reducer = {
  [SET_IS_LOADING](state, payload) {
    const { isLoading } = payload
    return { ...state, isLoading: isLoading }
  },

  [SET_SEARCH_ID](state, payload) {
    return { ...state, searchId: payload.id }
  },

  [ADD_FOUND_TICKETS](state, payload) {
    const tickets = [...state.tickets, ...payload.tickets]
    return { ...state, tickets }
  },
}

export default function (state, action) {
  const { type, ...payload } = action
  return reducer.hasOwnProperty(type) ? reducer[type](state, payload) : state
}
