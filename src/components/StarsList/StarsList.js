import React, { Component } from 'react';
// import './Header.css';

class StarsList extends Component {

    constructor(props){
        super(props);

       
    }

    render() {
        return (
            <section>
                <h2>Star List</h2>
               <ul>
                   {this.props.starsArray.map( (star, i) => <li key={i}>Star {star.name} has a magnitude of {star.magnitude}</li>) }
               </ul>
            </section>
        );
    }
}

export default StarsList;