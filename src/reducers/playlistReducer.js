import { Types } from '../actions/playlistActions';

const initialState = {
  playlist: [],
};

const addToPlaylist = (playlist, song) => {
  const updatedPlaylist = [song];
  updatedPlaylist.concat(playlist);
  return updatedPlaylist.concat(playlist);
};

// eslint-disable-next-line default-param-last
export default (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE:
      return {
        ...state,
        playlist: addToPlaylist(state.playlist, action.song),
      };
    default:
      return state;
  }
};
