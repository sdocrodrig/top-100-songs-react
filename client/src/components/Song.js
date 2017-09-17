import React from 'react';
import SongList from './SongList';

const Song = ({ id, name, artist, genre, editSong, updateSong, deleteSong }) => (
  <div>
    {name}
  </div>
)

export default Song;
