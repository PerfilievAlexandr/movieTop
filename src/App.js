import React, { Component } from 'react';
import MoviesList from './components/moviesList';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MoviesList />
      </div>
    );
  }
}

export default App;
