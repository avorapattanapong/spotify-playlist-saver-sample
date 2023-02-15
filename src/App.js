import './App.css';
import {
  Alert, AlertTitle, Box, Button, Grid,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import logo from './Spotify_Logo_RGB_Green.png';
import { getAuthUrl } from './api/spotifyClient';
import { createClient } from './actions/spotifyApiActions';
import SpotifyPlaylist from './components/SpotifyPlaylist';
import AppHeader from './components/AppHeader';
import SavedPlaylist from './components/SavedPlaylist';
import { retrievePlaylist } from './utils/localStorageUtils';
import { STORAGE_KEY } from './constants/appConstants';
import { restorePlaylist } from './actions/playlistActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.hash) {
      const parsedHash = new URLSearchParams(
        window.location.hash.substring(1), // skip the first char (#)
      );

      const spotifyClient = new SpotifyWebApi();
      spotifyClient.setAccessToken(parsedHash.get('access_token'));

      dispatch(createClient(spotifyClient));
    }

    const persistedPlaylist = retrievePlaylist(STORAGE_KEY);
    if (persistedPlaylist) {
      dispatch(restorePlaylist(persistedPlaylist));
    }
  });

  const stateCode = useSelector((state) => state.spotifyApiReducer.spotifyApi.state);
  const error = useSelector((state) => state.spotifyApiReducer.spotifyApi.error);
  const errorHelpMessage = error && error.status === 401 ? ' Please login again' : '';

  let isAuthenticated = false;
  if (window.location.hash) {
    const parsedHash = new URLSearchParams(
      window.location.hash.substring(1), // skip the first char (#)
    );
    isAuthenticated = parsedHash.get('access_token');
  }

  return (
    <div className="App">
      { !isAuthenticated && (
        <Box>
          <img width="600px" src={logo} alt="logo" />
          <p>
            Click Below to login
          </p>
          <Button variant="outlined" href={getAuthUrl(stateCode)}>Login</Button>
        </Box>
      )}
      { isAuthenticated && (
        <>
          <AppHeader />
          { error && (
            <Box sx={{ marginBottom: '50px' }}>
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                There was a problem completing your request
                {' '}
                <strong>{errorHelpMessage}</strong>
              </Alert>
            </Box>
          )}
          <Box>
            <Grid container spacing={20}>
              <Grid item xs={6}>
                <SpotifyPlaylist />
              </Grid>
              <Grid item xs={6}>
                <SavedPlaylist />
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </div>
  );
}

export default App;
