import React, { Component } from 'react';
// import './Header.css';

class StarsList extends Component {

    constructor(props){
        super(props);

       
    }

    render() {
        return (
            <section>
                <h2>STAR LIST</h2>
               <pre>{JSON.stringify (this.props.starsArray) }</pre>
               <ul>
                   {this.props.starsArray.map( (star) => <li>{star}</li>) }
               </ul>
            </section>
        );
    }
}

export default StarsList;