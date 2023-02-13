import { useDispatch } from 'react-redux'
import {generateRandomString} from "../utils/util";

export const Types = {
  GENERATE_AUTH_STATE: 'GENERATE_AUTH_STATE',
  CREATE_CLIENT: 'CREATE_CLIENT',
  SEARCH_REQUEST: 'SEARCH_REQUEST',
  SEARCH_SUCCESS: 'SEARCH_SUCCESS',
  SEARCH_ERROR: 'SEARCH_ERROR',
}

export const genrateAuthState = () => ({
  type: Types.GENERATE_AUTH_STATE,
  state: generateRandomString(16),
});

export const createClient = (client) => ({
  type: Types.CREATE_CLIENT,
  client,
});

export const searchRequest = () => ({
  type: Types.SEARCH_REQUEST
})

export const searchSuccess = (songList) => ({
  type: Types.SEARCH_SUCCESS,
  songList,
});

export const searchError = (error) => ({
  type: Types.SEARCH_ERROR,
  error: error,
});

export const doSearch = (searchTerms, spotifyClient) => () => (dispatch) => {
  dispatch(searchRequest());

  spotifyClient.searchTracks(searchTerms).then(
    function (data) {
      console.log(data);

    },
    function (err) {
      console.log(err);
    }
  );

}

/*export const getCadToThbExchangeRate = () => async (dispatch) => {
  dispatch(requestCadToThbExchangeRate())

  try {
    const exchangeRate = await requestExchangeRate('CAD', 'THB', '1')
    dispatch(receiveCadToThbExchangeRate(exchangeRate))
  } catch (error) {
    console.log(error);
    dispatch(cadToThbExchangeRateError(error))
    dispatch(enqueueSnackbar({
      message: "Error fetching exchange rates.",
      options: {
        key: new Date().getTime() + Math.random(),
        variant: 'error',
        action: key => (
          <Button onClick={() => closeSnackbar(key)}>dismiss me</Button>
        ),
      }
    }))
  }
}*/
