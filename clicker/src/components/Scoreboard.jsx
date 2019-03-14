import React, { Component } from "react";

export default class Scoreboard extends Component {
  render() {
    return (
      <nav>
        {this.props.clicker.currency} coins
        <div>
          {this.props.clicker.auto_strength}/
          {this.props.clicker.auto_interval / 1000}
          sec
        </div>
      </nav>
    );
  }
}
