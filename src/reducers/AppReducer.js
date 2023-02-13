import { extend } from 'lodash'
import initialState from './initialState'
import { Types } from '../actions/spotifyApiActions'

export default (state, action) => {
  const nextState = { ...state }

  switch (action.type) {
    case Types.CAD_TO_THB_REQUEST:
      nextState.exchangeRate.requesting = true
      break
    case Types.CAD_TO_THB_RECEIVED:
      nextState.exchangeRate.requesting = false
      nextState.exchangeRate.cadToThai = action.cadToThbExchangeRate
      break
    case Types.CAD_TO_THB_ERROR:
      nextState.exchangeRate.requesting = false
      break
    default:
      return state || initialState
  }

  return extend({}, state, nextState)
}
