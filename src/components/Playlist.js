import React from 'react';
import PropTypes from 'prop-types';
import { Divider, List } from '@mui/material';
import { useDrop } from 'react-dnd';
import PlaylistItem from './PlaylistItem';
import { ItemTypes } from '../constants/dndConstants';

function Playlist({ name, songs }) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.PLAYLIST_ITEM,
    drop: () => ({ name }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <List ref={drop} sx={{ width: '100%', minHeight: '150px', bgcolor: 'background.paper' }}>
      { songs.map((result, index) => (
        <>
          <PlaylistItem
            song={result}
          />
          { index !== songs.length - 1
            && <Divider />}
        </>
      ))}
    </List>
  );
}

Playlist.propTypes = {
  name: PropTypes.string.isRequired,
  songs: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
export default Playlist;
