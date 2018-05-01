import React, { Component } from 'react';
// import './Header.css';

class AddPlanet extends Component {



    render() {
        return (
            <section>
                <h2>Add a Planet</h2>
                <form>
                    <input onChange={this.props.handleChangeForPlanet('title')} value={this.props.newPlanet.title} type="text" placeholder="Name" />
                    <input onChange={this.props.handleChangeForPlanet('size')} value={this.props.newPlanet.size} type="text" placeholder="Magnitude" />
                    <input type="Submit" placeholder="Submit" onClick={this.props.handleSubmitPlanet} />
                </form>

            </section>
        );
    }
}

export default AddPlanet;