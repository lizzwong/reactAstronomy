import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import AddStar from '../AddStar/AddStar';
import StarsList from '../StarsList/StarsList';
import AddPlanet from '../AddPlanet/AddPlanet';
import PlanetsList from '../PlanetsList/PlanetsList';

class App extends Component {

  constructor(props) {
    super(props);//do this or things will break

    this.state = {
      newStar: {
        name: '',
        magnitude: '',
      },
      starsArray: [], 
      newPlanet: {
        title: '',
        size: '',
      },
      planetsArray: [],
    }
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState(
      {
        newStar: {
          ...this.state.newStar,
          [propertyName]: event.target.value
        },
        
      }
    )
  }

  handleChangeForPlanet = (propertyName) => (event) => {
    this.setState(
      {
        newPlanet: {
          ...this.state.newPlanet,
          [propertyName]: event.target.value
        }
      }
    )
  }

  handleSubmitStar = (event) => {
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

  handleSubmitPlanet = (event) => {
    event.preventDefault();
    this.setState(
      {
        planetsArray: [...this.state.planetsArray, this.state.newPlanet],
        newPlanet: {
          title: '',
          size: '',
        }

      }
    )
    console.log('submitting...', this.state.planetsArray);

  }


  render() {
    return (
      <div className="App">
        <Header title="React Astronomy"/>
        <AddStar newStar={this.state.newStar} handleChangeFor={ this.handleChangeFor} handleSubmitStar={this.handleSubmitStar}/>
        <p>Star {this.state.newStar.name} has a magnitude of {this.state.newStar.magnitude}.</p>
        <StarsList starsArray={this.state.starsArray}/>
        <AddPlanet newPlanet={this.state.newPlanet} handleChangeForPlanet={this.handleChangeForPlanet} handleSubmitPlanet={this.handleSubmitPlanet}/>
        <p>Planet {this.state.newPlanet.title} has a magnitude of {this.state.newPlanet.size}.</p>
        <PlanetsList planetsArray={this.state.planetsArray} />
      </div>
    );
  }
}

export default App;
