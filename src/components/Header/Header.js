import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    constructor(props) {
        super(props);//do this or things will break

        this.state = { title: props.title }
    }

    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">{ this.state.title }</h1>
            </header>
        );
    }
}

export default Header;