import React, { useState } from 'react';
import {
  Box, Button, CircularProgress, Divider, Grid,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Playlist from './Playlist';
import { doSearch } from '../actions/spotifyApiActions';

function SpotifyPlaylist() {
  const searchResults = useSelector((state) => state.spotifyApiReducer.spotifyApi.searchResults);
  const isRequestingSearch = useSelector((state) => state
    .spotifyApiReducer
    .spotifyApi
    .isRequestingSearch);
  const [searchText, setSearchText] = useState();
  const spotifyClient = useSelector((state) => state.spotifyApiReducer.spotifyApi.client);
  const dispatch = useDispatch();

  return (
    <Card sx={{ minWidth: '250px' }}>
      <CardContent sx={{ padding: '10px 24px 24px 24px' }}>
        <Typography variant="h4" component="div">
          Search Results
        </Typography>
        <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <TextField
                id="standard-basic"
                label="Artists, songs, or albums"
                variant="standard"
                onChange={(event) => setSearchText(event.target.value)}
                value={searchText}
                sx={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={2}>
              <Button color="inherit" sx={{ marginTop: '10px' }} onClick={() => dispatch(doSearch(searchText, spotifyClient))}>Search</Button>
            </Grid>
          </Grid>
        </Box>
        {isRequestingSearch && (
          <Box sx={{
            display: 'flex', minHeight: '150px', alignItems: 'center', justifyContent: 'center',
          }}
          >
            <CircularProgress />
          </Box>
        )}
        {!isRequestingSearch && (
          <Box>
            <Playlist name="SearchResultList" songs={searchResults} />
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default SpotifyPlaylist;
