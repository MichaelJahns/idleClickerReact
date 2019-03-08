import React, { Component } from "react";

export default class Scoreboard extends Component {
  render() {
    return <nav> {this.props.currencyClicks} </nav>;
  }
}
