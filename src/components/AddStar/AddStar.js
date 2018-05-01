import React, { Component } from 'react';
// import './Header.css';

class AddStar extends Component {

    constructor(props) {
        super(props);//do this or things will break

        this.state = { 
            newStar:  {
                name: '',
                magnitude: '',
            }
         }
    }

    handleChangeFor = (propertyName) => (event) => {
        this.setState(
            {
                newStar: {
                    ...this.state.newStar,
                    [propertyName]:event.target.value
                }
            }
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitting...', this.state.newStar);
        
        this.setState(
            {
                newStar: {
                    name: '',
                    magnitude: '',
                }
            }
        )
    }

    render() {
        return (
            <section>
                <h2>ADD A STAR</h2>
                <form>
                    <input onChange={this.handleChangeFor('name')} value={this.state.newStar.name} type="text" placeholder="Name" />
                    <input onChange={this.handleChangeFor('magnitude')} value={this.state.newStar.magnitude} type="text" placeholder="Magnitude" />
                    <input type="Submit" placeholder="Submit" onClick={this.handleSubmit}/>
                </form>
            <p>Star {this.state.newStar.name} has a magnitude of {this.state.newStar.magnitude}.</p>

            </section>
        );
    }
}

export default AddStar;