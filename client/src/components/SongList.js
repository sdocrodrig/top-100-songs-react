import React from 'react';
import Song from './Song';

const SongList = ({ songs, id, editSong, updateSong, deleteSong }) => (
  <div className="row">
    { songs.map( song =>
        <Song
          key={song.id}
          {...song}
          editSong={editSong}
          updateSong={updateSong}
          deleteSong={deleteSong}
        />
      )
    }
  </div>
)


export default SongList;
