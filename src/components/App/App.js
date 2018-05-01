import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import AddStar from '../AddStar/AddStar';
import StarsList from '../StarsList/StarsList';

class App extends Component {

  constructor(props) {
    super(props);//do this or things will break

    this.state = {
      newStar: {
        name: '',
        magnitude: '',
      },
      starsArray: [], 
    }
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState(
      {
        newStar: {
          ...this.state.newStar,
          [propertyName]: event.target.value
        }
      }
    )
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(
      {
        starsArray: [...this.state.starsArray, this.state.newStar],
        newStar: {
          name: '',
          magnitude: '',
        }

      }
    )
    console.log('submitting...', this.state.starsArray);

  }

  render() {
    return (
      <div className="App">
        <Header title="React Astronomy"/>
        <AddStar newStar={this.state.newStar} handleChangeFor={ this.handleChangeFor} handleSubmit={this.handleSubmit}/>
        <p>Star {this.state.newStar.name} has a magnitude of {this.state.newStar.magnitude}.</p>
        <StarsList starsArray={this.state.starsArray}/>
      </div>
    );
  }
}

export default App;
