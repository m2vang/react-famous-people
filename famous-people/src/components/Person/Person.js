import React, { Component } from 'react';

class Person extends Component {
    constructor() {
        super();   
        this.state = { star:{} };
    }

    handleChange = (event) => {
        let star = this.state.star;
        let name = event.target.name;
        let value = event.target.value;
        star[name] = value;
        this.setState({star});
    }


    displayOnConsole = () => {
        // console.log('Famous person:', this.state.name, 'Role:', this.state.role);
        console.log(this.state.star);
    }

    render() {
        return (
            <div>
                <input name="name" onChange={this.handleChange} />
                <input name="role" onChange={this.handleChange} />
                <br />
                This person, {this.state.name}, was famous for {this.state.role}!
                <br />
                <button onClick={this.displayOnConsole}>Submit</button>
            </div>
        )
    }
}

export default Person;