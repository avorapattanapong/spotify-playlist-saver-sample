import React from "react";
import {Divider, Paper, List,CircularProgress} from "@mui/material";
import PlaylistItem from "./PlaylistItem";
import {useSelector} from "react-redux";

const SpotifyPlaylist = () => {
  const searchResults = useSelector((state) => state.spotifyApiReducer.spotifyApi.searchResults);
  const isRequestingSearch = useSelector((state) => state.spotifyApiReducer.spotifyApi.isRequestingSearch);

  return (
    <Paper sx={{minWidth: '750px'}}>
      {!isRequestingSearch && (
        <CircularProgress
          variant="determinate"
          sx={{
            color: (theme) =>
              theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
          }}
          size={40}
          thickness={4}
          value={100}
        />
      )}
      {isRequestingSearch && (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          { searchResults.map((result, index) => (
            <>
              <PlaylistItem
                name={result.name}
                artist={result.artist}
                album={result.album}
                thumbnail={result.thumbnail}
              />
              { index === searchResults.length - 1 &&
                <Divider variant="inset" component="li" />
              }
            </>
          ))}
        </List>
      )}
    </Paper>
  );
}

export default SpotifyPlaylist;
