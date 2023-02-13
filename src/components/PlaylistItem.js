import React from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from "@mui/material";

const PlaylistItem = ({name, thumbnail, artist, album}) => (
  <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar alt={`${name}_by_${artist}_thumbnail`} src={thumbnail} />
    </ListItemAvatar>
    <ListItemText
      primary={name}
      secondary={
        <React.Fragment>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {artist}
          </Typography>
          {album}
        </React.Fragment>
      }
    />
  </ListItem>
);

export default PlaylistItem;