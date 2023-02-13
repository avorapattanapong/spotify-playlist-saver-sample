import logo from './Spotify_Logo_RGB_Green.png';
import './App.css';
import {Box, Button} from "@mui/material";
import {useEffect} from "react";
import {getAuthUrl} from "./api/spotifyClient";
import {useSelector} from "react-redux";
import SpotifyWebApi from "spotify-web-api-js";
import {createClient} from "./actions/spotifyApiActions";
import SpotifyPlaylist from "./components/SpotifyPlaylist";
import AppHeader from "./components/AppHeader";

function App() {
  useEffect(() => {
    if(window.location.hash) {
      console.log(window.location.hash);
      const parsedHash = new URLSearchParams(
        window.location.hash.substring(1) // skip the first char (#)
      );

      const spotifyClient = new SpotifyWebApi();
      spotifyClient.setAccessToken(parsedHash.get("access_token"));

      createClient(spotifyClient);
    }
  });

  const stateCode = useSelector((state) => state.spotifyApiReducer.spotifyApi.state);
  let isAuthenticated = false;
  if(window.location.hash) {
    const parsedHash = new URLSearchParams(
      window.location.hash.substring(1) // skip the first char (#)
    );
    isAuthenticated = parsedHash.get("access_token");
  }

  return (
    <div className="App">
      <header className="App-header">
      { !isAuthenticated && (
          <Box>
            <img src={logo} alt="logo" />
            <p>
              Click Below to login
            </p>
            <Button variant="outlined" href={getAuthUrl(stateCode)}>Login</Button>
          </Box>
      )}
      { isAuthenticated && (
        <Box>
          <AppHeader />
          <SpotifyPlaylist />
        </Box>
      )}
      </header>
    </div>
  );
}

export default App;
