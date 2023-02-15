import { Types } from '../actions/spotifyApiActions';

const initialState = {
  spotifyApi: {
    client: null,
    state: '',
    searchResults: [],
    isRequestingSearch: false,
    error: null,
  },
};

// eslint-disable-next-line default-param-last
export default (state = initialState, action) => {
  switch (action.type) {
    case Types.GENERATE_AUTH_STATE:
      return {
        ...state,
        spotifyApi: {
          ...state.spotifyApi,
          state: action.state,
        },
      };
    case Types.CREATE_CLIENT:
      return {
        ...state,
        spotifyApi: {
          ...state.spotifyApi,
          client: action.client,
        },
      };
    case Types.SEARCH_REQUEST:
      return {
        ...state,
        spotifyApi: {
          ...state.spotifyApi,
          isRequestingSearch: true,
        },
      };
    case Types.SEARCH_SUCCESS:
      return {
        ...state,
        spotifyApi: {
          ...state.spotifyApi,
          isRequestingSearch: false,
          searchResults: action.songList,
        },
      };
    case Types.SEARCH_ERROR:
      return {
        ...state,
        spotifyApi: {
          ...state.spotifyApi,
          isRequestingSearch: false,
          error: action.error,
        },
      };
    case Types.UPDATE_SEARCH:
      return {
        ...state,
        spotifyApi: {
          ...state.spotifyApi,
          searchResults: state.spotifyApi.searchResults
            .filter((result) => result.id !== action.song.id),
        },
      };
    default:
      return state;
  }
};
