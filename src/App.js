import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        My Hello World
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
      </div>
    );
  }
}

//Class Component
class FirstComponent extends Component {
  render() {
    return <div className="firstComponent">First Component</div>;
  }
}

//Class Component
class SecondComponent extends Component {
  render() {
    return <div className="secondComponent">Second Component</div>;
  }
}

//Function Component
function ThirdComponent() {
  return <div className="thirdComponent">Third Component</div>;
}

//Function Component
function FourthComponent() {
  return <div className="fourthComponent">Fourth Component</div>;
}

export default App;
