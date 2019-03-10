import React, { Component } from "react";
import Upgrade from "./Upgrade";

export default class UpgradeMenu extends Component {
  render() {
    return (
      <div>
        {this.props.upgrades.map(upgrade => (
          <Upgrade
            key={upgrade.id}
            onCost={this.props.onCost}
            onUpgrade={this.props.onUpgrade}
            upgrade={upgrade}
            currency={this.props.currency}
          />
        ))}
      </div>
    );
  }
}
