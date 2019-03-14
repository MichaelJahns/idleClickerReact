import React, { Component } from "react";

export default class Autoclicker extends Component {
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      this.props.clicker.auto_interval
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return <p> Timer </p>;
  }
  tick() {
    this.props.onTick();
  }
}
