export const Types = {
  UPDATE: 'UPDATE',
};

export const updatePlaylist = (song) => ({
  type: Types.UPDATE,
  song,
});
