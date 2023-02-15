import React from 'react';
import {
  Divider,
  Box,
  Button,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Playlist from './Playlist';
import { doPersistPlaylist, doClearPlaylist } from '../actions/playlistActions';

function SavedPlaylist() {
  const dispatch = useDispatch();
  const savedPlaylist = useSelector((state) => state.playlistReducer.playlist);
  const isDirty = useSelector((state) => state.playlistReducer.isDirty);

  return (
    <Card sx={{ minWidth: '400px', minHeight: '485px' }}>
      <CardContent sx={{ padding: '10px 24px 24px 24px' }}>
        <Typography variant="h4" component="div">
          Saved Playlist
        </Typography>
        <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />
        <Box sx={{ textAlign: 'right' }}>
          <Button
            variant="contained"
            sx={{ marginRight: '10px' }}
            disabled={!isDirty}
            onClick={() => dispatch(doPersistPlaylist(savedPlaylist))}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            onClick={() => dispatch(doClearPlaylist())}
          >
            Clear
          </Button>
        </Box>
        <Box>
          <Playlist name="SavedPlaylist" songs={savedPlaylist} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default SavedPlaylist;
