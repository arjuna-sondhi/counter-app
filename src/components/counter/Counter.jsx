import React, { Component } from "react";
import PropTypes from "prop-types";
import CounterButton from "./CounterButton";
import "./Counter.css";

class Counter extends Component {
  constructor() {
    super(); //  Error many people make
    this.state = {
      counter: 0,
    };

    //arrow function prevents the need for binding
    //this.increment = this.increment.bind(this);
  }

  increment = (by) => {
    //Update the state - counter++
    // console.log(`increment in parent = ${by}`);
    // this.state.counter++;
    this.setState({
      counter: this.state.counter + by,
    });
  };

  render() {
    return (
      <div className="counter">
        <CounterButton by={1} incrementMethod={this.increment} />
        <CounterButton by={5} incrementMethod={this.increment} />
        <CounterButton by={10} incrementMethod={this.increment} />
        <span className="count">{this.state.counter}</span>
      </div>
    );
  }
}

export default Counter;
