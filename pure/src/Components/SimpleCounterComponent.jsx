import React, { Component } from 'react';

export default class SimpleCounterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      toggle: false,
    };
  }

  handleIncrement = () => {
    
    if (this.state.toggle) {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }
  };

  handleSetToggle = () => {
    
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  };

  render() {
    console.log("This is Simple Component");
    return (
      <div>
        <h2>SIMPLE COMPONENT: {this.state.counter}</h2>
        <button onClick={this.handleIncrement}>Counter</button>
        <button onClick={this.handleSetToggle}>Set Toggle</button>
      </div>
    );
  }
}
