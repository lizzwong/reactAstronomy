import React, { Component } from 'react';

import AddStar from '../../components/AddStar/AddStar';
import StarsList from '../../components/StarsList/StarsList';

class Stars extends Component {

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
                },

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


    render() {
        return (
            <div >
                <h2>Stars</h2>
                <AddStar newStar={this.state.newStar} handleChangeFor={this.handleChangeFor} handleSubmitStar={this.handleSubmitStar} />
                <p>Star {this.state.newStar.name} has a magnitude of {this.state.newStar.magnitude}.</p>
                <StarsList starsArray={this.state.starsArray} />
            </div>
        );
    }
}

export default Stars;
