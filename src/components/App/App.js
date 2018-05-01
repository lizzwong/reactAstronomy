import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Stars from '../../pages/Stars/Stars';
import Planets from '../../pages/Planets/Planets';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {



  render() {
    return (
      <Router>
      <div className="App">
        <Header title="React Astronomy"/>
        
          <div><Link to="/stars">Stars</Link></div>
          <div><Link to="/planets">Planets</Link></div>
        
        <Route path="/stars" component={Stars}/>
        <Route path="/planets" component={Planets}/>
      </div>
      </Router>
    );
  }
}

export default App;
