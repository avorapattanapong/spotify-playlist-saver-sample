// TODO: do validation before calling JSON.parse / stringify or handle
// errors.
// Encapsulating local storage logic in case choice of storage changes
export const persistPlaylist = (key, payload) => {
  window.localStorage.setItem(key, JSON.stringify(payload));
};

export const retrievePlaylist = (key) => JSON.parse(window.localStorage.getItem(key));

export const clearPlaylist = (key) => {
  window.localStorage.removeItem(key);
};
