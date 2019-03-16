import React, { Component } from "react";
import Upgrade from "./Upgrade";

export default class ClickBooth extends Component {
  render() {
    return (
      <React.Fragment>
        <h3> Clicker Menu</h3>
        {this.props.clickerUpgrades.map(upgrade => (
          <Upgrade
            key={upgrade.id}
            onCost={this.props.onCost}
            onUpgrade={this.props.onClickUpgrade}
            upgrade={upgrade}
            currency={this.props.currency}
          />
        ))}
      </React.Fragment>
    );
  }
}
