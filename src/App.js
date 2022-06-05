import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Gun from 'gun';
import Home from './components/Home';

class App extends Component {
  constructor() {
    super();
    this.gun = Gun(window.location.origin + '/gun');
  }

  render() {
    return (
        <Home gun={this.gun} />
    );
  }
}

export default App;
