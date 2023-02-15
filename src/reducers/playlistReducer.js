import { Types } from '../actions/playlistActions';

const initialState = {
  playlist: [],
  isDirty: false,
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
        isDirty: true,
      };
    case Types.RESTORE:
      return {
        ...state,
        playlist: action.playlist,
        isDirty: false,
      };
    case Types.PERSIST:
      return {
        ...state,
        isDirty: false,
      };
    case Types.CLEAR:
      return {
        ...state,
        playlist: [],
        isDirty: false,
      };
    default:
      return state;
  }
};
