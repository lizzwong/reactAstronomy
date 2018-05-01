import React, { Component } from 'react';
// import './Header.css';

class PlanetsList extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <section>
                <h2>Planet List</h2>
                <ul>
                    {this.props.planetsArray.map((planet, i) => <li key={i}>Planet {planet.title} has a magnitude of {planet.size}</li>)}
                </ul>
            </section>
        );
    }
}

export default PlanetsList;