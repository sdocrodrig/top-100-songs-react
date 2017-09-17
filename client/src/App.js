import React, { Component } from 'react';
import SongForm from './components/SongForm';
import SongList from './components/SongList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { songs: [] }


  render() {
    return (
      <div className="container">
       <SongForm />
       <SongList />
      </div>
    );
  }
}

export default App;
