import React, { Component } from 'react';
import './App.css';
import Wit from './Wit'

class App extends Component {
  constructor() {
    super();
    this.state ={text :""} ;
  }
  ShowText = () =>{
    this.setState({

    })
  }
  render() {

    return (

      <div className="Wit-container">
      <Wit/>
      <Wit/>
      <Wit/>
      </div>


    );
  }
}

export default App;
