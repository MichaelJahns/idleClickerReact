import React, { Component } from "react";

export default class Autoclicker extends Component {
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return <div> Words </div>;
  }
  tick() {
    this.props.onTick();
  }
}
