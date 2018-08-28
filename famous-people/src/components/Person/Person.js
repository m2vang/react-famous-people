import React, { Component } from 'react';

class Person extends Component {
    constructor() {
        super();
        this.state = {name: '', role: ''};
        this.handleName = this.handleName.bind(this);
        this.handleRole = this.handleRole.bind(this);

    }

    handleName = (event) => {
        this.setState({name: event.target.value});
    }

    handleRole = (event) => {
        this.setState({ role: event.target.value });
    }

    displayOnConsole = () => {
        console.log('Famous person:', this.state.name, 'Role:', this.state.role);

    }

    render() {
        return (
            <div>
                <input onChange={this.handleName} />
                <input onChange={this.handleRole} />
                <br />
                This person, {this.state.name}, was famous for {this.state.role}!
                <br />
                <button onClick={this.displayOnConsole}>Submit</button>
            </div>
        )
    }
}

export default Person;