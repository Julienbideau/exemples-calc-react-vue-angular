import React, { Component } from "react";
import "./App.css";
import Calculator from "./components/calculator";

class App extends Component {
  constructor() {
    super();
    this.state = {
      formula: ""
    };
  }

  updateFormula(formula) {
    this.setState({
      formula
    });
  }

  render() {
    return (
      <div>
       <h1>Ma jolie calculatrice en ReactJS</h1>
      <div id="background">
      
        <div id="result">{this.state.formula}</div>
        <Calculator updateFormula={formula => this.updateFormula(formula)} />
      </div>
      </div>
    );
  }
}

export default App;