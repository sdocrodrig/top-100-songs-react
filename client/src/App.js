import React, { Component } from 'react';
import SongForm from './components/SongForm';
import SongList from './components/SongList';


class App extends Component {
  state = { songs: [] }

  componentDidMount() {
    //make a call to our rails server to get Items
  }

  addSong = (name) => {
    //make api call to rails server to add item
    //update state
  }

  editSong = (id) => {
    //make api call to edit song
    //update state
  }

  updateSong = (id) => {
    //make api call to update todo
    //update state
  }

  deleteSong = (id) => {
    //make api call to delete todo
    //remove it from state
  }

  render() {
    return (
      <div className="container">
        <h1>Top 100 Songs</h1>
        <SongForm addSong={this.addSong} />
        <SongList
          songs={this.state.songs}
        />
      </div>
    );
  }
}

export default App;
