import React, { Component } from "react";
import Upgrade from "./Upgrade";

export default class UpgradeMenu extends Component {
  handleHideMenu() {
    // let state = this.state;
    // state.showUpgradeMenu = true;
    // this.setState = { state };
  }
  render() {
    return (
      <div>
        <button onClick={this.handleHideMenu()}> X </button>
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
