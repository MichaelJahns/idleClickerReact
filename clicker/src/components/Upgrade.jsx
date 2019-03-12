import React, { Component } from "react";

export default class Upgrade extends Component {
  render() {
    return (
      <aside>
        {this.props.children}
        <h3> {this.props.upgrade.name} </h3>
        <p>
          {this.props.upgrade.currentRank}/{this.props.upgrade.maxRank}
        </p>
        <button
          disabled={this.getDisabled()}
          onClick={() =>
            this.props.onUpgrade(this.props.upgrade) &
            this.props.onCost(this.props.upgrade)
          }
        >
          Upgrade!
        </button>
      </aside>
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
