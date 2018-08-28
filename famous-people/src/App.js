import React, { Component } from 'react';
import Header from './components/Header/Header.js'
import Person from './components/Person/Person.js'
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Header />
        <Person />
      </div>
    );
  }
}

export default App;
