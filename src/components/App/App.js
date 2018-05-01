import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Stars from '../../pages/Stars/Stars';
import Planets from '../../pages/Planets/Planets';

class App extends Component {



  render() {
    return (
      <div className="App">
        <Header title="React Astronomy"/>
        <Stars/>
        <Planets/>
      </div>
    );
  }
}

export default App;
