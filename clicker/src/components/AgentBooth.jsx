import React, { Component } from "react";
import Upgrade from "./Upgrade";

export default class AgentBooth extends Component {
  render() {
    return (
      <React.Fragment>
        <h3> Agent Menu</h3>
        {this.props.agentUpgrades.map(upgrade => (
          <Upgrade
            key={upgrade.id}
            onCost={this.props.onCost}
            onUpgrade={this.props.onAgentUpgrade}
            upgrade={upgrade}
            currency={this.props.currency}
          />
        ))}
      </React.Fragment>
    );
  }
}
