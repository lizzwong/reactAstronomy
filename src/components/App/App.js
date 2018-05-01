import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import AddStar from '../AddStar/AddStar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="React Astronomy"/>
        <AddStar/>
      </div>
    );
  }
}

export default App;
