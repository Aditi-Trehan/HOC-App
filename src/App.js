import React, { Component } from 'react';
import './App.css';

let BaseCount = (BasicComponent) => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      text: "Hello"
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div className="container">
        <BasicComponent {...this.state} increment={this.incrementCount} />
      </div>
    );
  }
}

const Button = (props) => {
  return (
    <button className="btn blue-btn" onClick={props.increment}> Count: {props.count} </button>
  );
}

const Label = (props) => {
  return (
    <label onClick={props.increment}> Count: {props.count}</label>
  )
}

const Header = (props) => {
  return (
    <h2> High Order Components</h2>
  );
}

let ExtendedButton = BaseCount(Button);
let ExtendedLabel = BaseCount(Label);
let ExtendedHeader = BaseCount(Header);

const Container = () => {
  return (
    <div>
      <ExtendedButton />
      <ExtendedLabel />
      <ExtendedHeader />
    </div>
  );
}

export default Container;