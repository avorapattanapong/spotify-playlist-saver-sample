import React from 'react';
import {
  Divider,
  Box,
} from '@mui/material';
import { useSelector } from 'react-redux';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Playlist from './Playlist';

function SavedPlaylist() {
  const savedPlaylist = useSelector((state) => state.playlistReducer.playlist);

  return (
    <Card sx={{ minWidth: '250px' }}>
      <CardContent sx={{ padding: '10px 24px 24px 24px' }}>
        <Typography variant="h4" component="div">
          Saved Playlist
        </Typography>
        <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />
        <Box>
          <Playlist name="SavedPlaylist" songs={savedPlaylist} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default SavedPlaylist;
