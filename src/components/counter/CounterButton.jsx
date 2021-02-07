import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Counter.css";

class CounterButton extends Component {
  //Define the initial state in a constructor
  //state => counter 0
  /*Props are
    by: variable to store value of increment amount
    incrementMethod(): method from parent Counter.jsx
  */
  constructor() {
    super(); //  Error many people make
    // this.state = {
    //   counter: 0,
    // };

    //arrow function prevents the need for binding
    //this.increment = this.increment.bind(this);
  }

  render = () => {
    return (
      <div className="counter">
        <button onClick={() => this.props.incrementMethod(this.props.by)}>
          +{this.props.by}
        </button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}>
          -{this.props.by}
        </button>
        {/* <span className="count">{this.state.counter}</span> */}
      </div>
    );
  };

  // increment = () => {
  //   //Update the state - counter++
  //   //console.log("increment");
  //   // this.state.counter++;
  //   // this.setState({
  //   //   counter: this.state.counter + this.props.by,
  //   // });

  //   this.props.incrementMethod(this.props.by);
  // };

  // decrement = () => {
  //   // this.setState({
  //   //   counter: this.state.counter - this.props.by,
  //   // });

  //   this.props.decrementMethod(this.props.by);
  // };
}
//default props values
CounterButton.defaultProps = {
  by: 1,
};

CounterButton.propTypes = {
  by: PropTypes.number,
};

export default CounterButton;
