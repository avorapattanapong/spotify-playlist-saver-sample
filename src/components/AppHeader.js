import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Avatar, Container, IconButton, Tooltip,
} from '@mui/material';
import userIcon from '../user.png';
import SpotifyIcon from './icons/spotifyIcon';

function AppHeader() {
  return (
    <AppBar component="nav">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SpotifyIcon />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 3,
            }}
          >
            Playlist Saver
          </Typography>
          {/* TODO: Implement logout here */}
          <Box sx={{ flexGrow: 1 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={() => {}} sx={{ p: 0 }}>
                <Avatar alt="user" src={userIcon} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppHeader;
