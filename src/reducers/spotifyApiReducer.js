import initialState from './initialState'
import { Types } from '../actions/spotifyApiActions'

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.GENERATE_AUTH_STATE:
      return {
        ...state,
        spotifyApi: {
          ...state.spotifyApi,
          state: action.state,
        }
      };
    case Types.SEARCH_REQUEST:
      return {
        ...state,
        spotifyApi: {
          ...state.spotifyApi,
          isRequestingSearch: true,
        }
      };
    default:
      return state
  }
}
