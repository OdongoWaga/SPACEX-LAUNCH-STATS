import React, { Component } from 'react';
import logo from './spaceX.jpg'
import './App.css';
import { Z_BLOCK } from 'zlib';

class App extends Component {
  render() {
    return (
      <div className="App">
      <img
      src={logo}
      alt="SpaceX"
      style={{width:300, display:'block', margin:"auto" }}
      />
      </div>
    );
  }
}

export default App;
