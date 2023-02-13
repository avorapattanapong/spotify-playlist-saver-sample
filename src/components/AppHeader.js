import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import logo from '../Spotify_logo_without_text.svg';
import {getAuthUrl} from "../api/spotifyClient";
import SearchBox from "./SearchBox";
import SearchIconWrapper from "./SearchIconWrapper";
import StyledInputBase from "./StyledInputBase";
import {useState} from "react";
import {doSearch} from "../actions/spotifyApiActions";
import {useSelector} from "react-redux";

const AppHeader = () => {
  const [searchText, setSearchText] = useState();
  const spotifyClient = useSelector((state) => state.spotifyApiReducer.spotifyApi.client);

  return (
    <Box sx={{ flexGrow: 1, justifyContent: 'space-between' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: '#1DD75F' }}
          >
            <img width="30px" src={logo} alt="logo" /> <span>Spotify Playlist Saver</span>
          </Typography>
          <SearchBox>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              key="searchFieldKey"
              onChange={(event) => setSearchText(event.target.value)}
              value={searchText}
              placeholder="Search + press Enter"
              inputProps={{ 'aria-label': 'search' }}
            />
          </SearchBox>
          <Button color="inherit" sx={{marginLeft: "20px"}} onClick={() => doSearch(searchText, spotifyClient)}>Search</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppHeader;