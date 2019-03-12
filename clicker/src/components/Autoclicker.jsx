import React, { Component } from "react";

export default class Autoclicker extends Component {
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      this.props.clicker.autoclicker.interval
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <ul>
        Autoclicker
        <li> Interval: {this.props.clicker.autoclicker.interval} </li>
        <li> Agents: {this.props.clicker.autoclicker.agents} </li>
        <li> Strength: {this.props.clicker.autoclicker.strength} </li>
      </ul>
    );
  }
  tick() {
    this.props.onTick();
  }
}
