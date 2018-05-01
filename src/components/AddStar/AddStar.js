import React, { Component } from 'react';
// import './Header.css';

class AddStar extends Component {

    

    render() {
        return (
            <section>
                <h2>ADD A STAR</h2>
                <form>
                    <input onChange={this.props.handleChangeFor('name')} value={this.props.newStar.name} type="text" placeholder="Name" />
                    <input onChange={this.props.handleChangeFor('magnitude')} value={this.props.newStar.magnitude} type="text" placeholder="Magnitude" />
                    <input type="Submit" placeholder="Submit" onClick={this.props.handleSubmit}/>
                </form>
            {/* <p>Star {this.props.newStar.name} has a magnitude of {this.props.newStar.magnitude}.</p> */}

            </section>
        );
    }
}

export default AddStar;