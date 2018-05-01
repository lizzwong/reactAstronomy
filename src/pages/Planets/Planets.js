import React, { Component } from 'react';
import AddPlanet from '../../components/AddPlanet/AddPlanet';
import PlanetsList from '../../components/PlanetsList/PlanetsList';

class Planets extends Component {

    constructor(props) {
        super(props);//do this or things will break

        this.state = {
            newPlanet: {
                title: '',
                size: '',
            },
            planetsArray: [],
        }
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
            <div>
                <AddPlanet newPlanet={this.state.newPlanet} handleChangeForPlanet={this.handleChangeForPlanet} handleSubmitPlanet={this.handleSubmitPlanet} />
                <p>Planet {this.state.newPlanet.title} has a magnitude of {this.state.newPlanet.size}.</p>
                <PlanetsList planetsArray={this.state.planetsArray} />
            </div>
        );
    }
}

export default Planets;
