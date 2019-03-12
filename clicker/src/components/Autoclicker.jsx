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
    return (
      <ul>
        Autoclicker
        <li> Interval: {this.props.clicker.auto_interval} </li>
        <li> Agents: {this.props.clicker.auto_agents} </li>
        <li> Strength: {this.props.clicker.auto_strength} </li>
      </ul>
    );
  }
  tick() {
    this.props.onTick();
  }
}
