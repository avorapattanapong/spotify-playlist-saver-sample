import { generateRandomString } from '../utils/util';

export const Types = {
  GENERATE_AUTH_STATE: 'GENERATE_AUTH_STATE',
  CREATE_CLIENT: 'CREATE_CLIENT',
  SEARCH_REQUEST: 'SEARCH_REQUEST',
  SEARCH_SUCCESS: 'SEARCH_SUCCESS',
  SEARCH_ERROR: 'SEARCH_ERROR',
  UPDATE_SEARCH: 'UPDATE_SEARCH',
};

export const genrateAuthState = () => ({
  type: Types.GENERATE_AUTH_STATE,
  state: generateRandomString(16),
});

export const createClient = (client) => ({
  type: Types.CREATE_CLIENT,
  client,
});

export const searchRequest = () => ({
  type: Types.SEARCH_REQUEST,
});

export const searchSuccess = (songList) => ({
  type: Types.SEARCH_SUCCESS,
  songList,
});

export const searchError = (error) => ({
  type: Types.SEARCH_ERROR,
  error,
});

export const doSearch = (searchTerms, spotifyClient) => (dispatch) => {
  dispatch(searchRequest());
  spotifyClient.searchTracks(searchTerms, { limit: 5 }).then(
    (data) => {
      dispatch(searchSuccess(data.tracks.items));
    },
    (err) => {
      dispatch(searchError(err));
    },
  );
};

export const updateSearch = (song) => ({
  type: Types.UPDATE_SEARCH,
  song,
});
