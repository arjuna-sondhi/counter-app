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
    this.setState((prevState) => {
      return { counter: prevState.counter + by };
    });
  };

  decrement = (by) => {
    //Update the state - counter++
    // console.log(`increment in parent = ${by}`);
    // this.state.counter++;
    this.setState((prevState) => {
      return { counter: prevState.counter - by };
    });
  };

  reset = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <div className="counter">
        <CounterButton
          by={1}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={5}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={10}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <div>
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
        </div>

        <span className="count">{this.state.counter}</span>
      </div>
    );
  }
}

export default Counter;
