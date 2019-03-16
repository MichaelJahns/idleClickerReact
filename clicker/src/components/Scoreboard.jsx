import React, { Component } from "react";

export default class Scoreboard extends Component {
  render() {
    return (
      <nav>
        <h3>{this.props.clicker.currency} coins </h3>
        <h4>
          {this.props.clicker.income}/{this.props.clicker.autoInterval / 1000}
          sec
        </h4>
      </nav>
    );
  }
}
