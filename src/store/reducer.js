import { TOGGLE_IS_LOADING } from './types'

const reducer = {
  [TOGGLE_IS_LOADING](state) {
    return { ...state, isLoading: !state.isLoading }
  },
}

export default function (state, action) {
  console.log(state)
  return reducer.hasOwnProperty(action.type)
    ? reducer[action.type](state, action.payload)
    : state
}
