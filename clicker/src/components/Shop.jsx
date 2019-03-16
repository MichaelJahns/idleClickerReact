import React, { Component } from "react";
import ClickBooth from "./ClickBooth";
import AgentBooth from "./AgentBooth";

export default class Shop extends Component {
  state = { shopShown: "hidden" };

  handleHideShop() {
    let shopShown = this.state.shopShown;
    shopShown === "hidden" ? (shopShown = "visible") : (shopShown = "hidden");
    this.setState({ shopShown });
  }

  render() {
    return (
      <aside className={this.state.visible}>
        <button onClick={() => this.handleHideShop(this.state)}>X</button>
        <ClickBooth
          clickerUpgrades={this.props.clickerUpgrades}
          onClickUpgrade={this.props.onClickUpgrade}
          currency={this.props.currency}
          onCost={this.props.onCost}
        />
        <AgentBooth
          agentUpgrades={this.props.agentUpgrades}
          onAgentUpgrade={this.props.onAgentUpgrade}
          currency={this.props.currency}
          onCost={this.props.onCost}
        />
      </aside>
    );
  }
}
