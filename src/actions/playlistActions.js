import {
  persistPlaylist as persistPlaylistToStorage,
  clearPlaylist as clearPlaylistFromStorage,
} from '../utils/localStorageUtils';
import { STORAGE_KEY } from '../constants/appConstants';

export const Types = {
  UPDATE: 'UPDATE',
  RESTORE: 'RESTORE',
  PERSIST: 'PERSIST',
  CLEAR: 'CLEAR',
};

export const updatePlaylist = (song) => ({
  type: Types.UPDATE,
  song,
});

export const restorePlaylist = (playlist) => ({
  type: Types.RESTORE,
  playlist,
});

const persistPlaylist = () => ({
  type: Types.PERSIST,
});
export const doPersistPlaylist = (savedPlaylist) => (dispatch) => {
  persistPlaylistToStorage(STORAGE_KEY, savedPlaylist);
  dispatch(persistPlaylist());
};

const clearPlaylist = () => ({
  type: Types.CLEAR,
});
export const doClearPlaylist = () => (dispatch) => {
  clearPlaylistFromStorage(STORAGE_KEY);
  dispatch(clearPlaylist());
};
