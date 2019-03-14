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
      <aside>
        <button onClick={this.handleHideMenu()}> X </button>

        <div className="upgradeMenu">
          {this.props.upgrades.clickerUpgrades.map(upgrade => (
            <Upgrade
              key={upgrade.id}
              onCost={this.props.onCost}
              onClickUpgrade={this.props.onClickUpgrade}
              upgrade={upgrade}
              currency={this.props.currency}
            />
          ))}
        </div>
        <div className="upgradeMenu">
          {this.props.upgrades.agentUpgrades.map(upgrade => (
            <Upgrade
              key={upgrade.id}
              onCost={this.props.onCost}
              onAgentUpgrade={this.props.onAgentUpgrade}
              upgrade={upgrade}
              currency={this.props.currency}
            />
          ))}
        </div>
      </aside>
    );
  }
}
