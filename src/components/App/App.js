import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import Star from '../StarList/StarList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Star />
      </div>
    );
  }
}

export default App;
