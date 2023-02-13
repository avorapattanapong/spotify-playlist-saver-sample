
// Secure Client ID and Secret
const clientID = "850a9a6612a64452b153574e060ecd0f";
const redirectUri = "http://localhost:3000"

export const getAuthUrl = (state) => {
  const scope = 'user-read-private user-read-email';

  let authUrl = 'https://accounts.spotify.com/authorize';
  authUrl += '?response_type=token';
  authUrl += '&client_id=' + encodeURIComponent(clientID);
  authUrl += '&scope=' + encodeURIComponent(scope);
  authUrl += '&redirect_uri=' + encodeURIComponent(redirectUri);
  authUrl += '&state=' + encodeURIComponent(state);

  return authUrl;
}
