import React, { Component } from "react";

export default class Upgrade extends Component {
  render() {
    return (
      <button
        className="upgrade"
        disabled={this.getDisabled()}
        onClick={() =>
          this.props.onClickUpgrade(this.props.upgrade) &
          this.props.onCost(this.props.upgrade)
        }
      >
        <h3>{this.props.upgrade.name}</h3>
        <h4> Rank: {this.props.upgrade.currentRank} </h4>
        <h4> {this.props.upgrade.cost} coins </h4>
      </button>
    );
  }
  getDisabled() {
    let disabled = true;
    if (
      this.props.upgrade.currentRank < this.props.upgrade.maxRank &&
      this.props.currency >= this.props.upgrade.cost
    ) {
      disabled = false;
    }
    return disabled;
  }
}
