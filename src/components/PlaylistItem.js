import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { ItemTypes } from '../constants/dndConstants';
import { updatePlaylist } from '../actions/playlistActions';
import { getImageUrl } from '../utils/util';

function PlaylistItem({ song }) {
  const dispatch = useDispatch();
  const { name, artists, album } = song;
  const artist = artists[0].name;
  const thumbnailSrc = getImageUrl(64, album.images);
  const albumName = album.name;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.PLAYLIST_ITEM,
    item: song,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        dispatch(updatePlaylist(item));
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <ListItem className="listItem" key={song.id} ref={drag} alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={`${name}_by_${artist}_thumbnail`} src={thumbnailSrc} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={(
          <>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {artist}
            </Typography>
            {albumName}
          </>
        )}
      />
    </ListItem>
  );
}

PlaylistItem.propTypes = {
  song: PropTypes.shape.isRequired,
};

export default PlaylistItem;
