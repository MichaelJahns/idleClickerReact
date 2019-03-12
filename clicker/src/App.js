import React, { Component } from "react";
import Scoreboard from "./components/Scoreboard";
import ClickerZone from "./components/ClickerZone";
import "./App.css";
import UpgradeMenu from "./components/UpgradeMenu";
import Autoclicker from "./components/Autoclicker";

class App extends Component {
  state = {
    clicker: {
      clickPower: 1,
      totalClicks: 0,
      currencyClicks: 0,
      auto_interval: 5000,
      auto_strength: 1,
      auto_agents: 0
    },
    upgrades: [
      {
        id: 11,
        name: "Clicker Power Rnk I",
        affects: "clickPower",
        increment: 1,
        currentRank: 0,
        maxRank: 10,
        cost: 10
      },
      {
        id: 12,
        name: "Clicker Power Rnk II",
        affects: "clickPower",
        increment: 10,
        currentRank: 0,
        maxRank: 10,
        cost: 500
      },
      {
        id: 13,
        name: "Clicker Power Rnk III",
        affects: "clickPower",
        increment: 100,
        currentRank: 0,
        maxRank: 10,
        cost: 5000
      },
      {
        id: 14,
        name: "Clicker Power Rnk IV",
        affects: "clickPower",
        increment: 1000,
        currentRank: 0,
        maxRank: 10,
        cost: 500000
      },
      {
        id: 15,
        name: "Clicker Power Rnk V",
        affects: "clickPower",
        increment: 10000,
        currentRank: 0,
        maxRank: 10,
        cost: 50000000
      },
      {
        id: 21,
        name: "Hire Agents",
        affects: "auto_agents",
        increment: 1,
        currentRank: 0,
        maxRank: 999,
        cost: 500
      },
      {
        id: 25,
        name: "Reduce Interval",
        affects: "auto_interval",
        increment: -10,
        currentRank: 0,
        maxRank: 999,
        cost: 500
      },
      {
        id: 30,
        name: "Increase Agents Power",
        affects: "auto_strength",
        increment: 1,
        currentRank: 0,
        maxRank: 999,
        cost: 500
      }
    ]
  };

  handleClickZone = e => {
    const clicker = this.state.clicker;
    clicker.totalClicks += this.state.clicker.clickPower;
    clicker.currencyClicks += this.state.clicker.clickPower;
    this.setState({ clicker });
  };

  handleCost = upgrade => {
    let clicker = this.state.clicker;
    //migrate the below line to unique function that tracks whats supposed to be upgraded
    clicker[upgrade.affects] += upgrade.increment;
    clicker.currencyClicks -= upgrade.cost;

    this.setState({ clicker });
  };

  handleUpgrade = upgrade => {
    const upgrades = [...this.state.upgrades];
    const index = upgrades.indexOf(upgrade);
    upgrades[index] = { ...upgrade };
    upgrades[index].currentRank++;
    upgrades[index].cost = Math.ceil(upgrades[index].cost * 1.25);
    this.setState({ upgrades });
  };

  handleTick = () => {
    console.log("tick");
    const clicker = this.state.clicker;
    clicker.totalClicks +=
      this.state.clicker.auto_strength * this.state.clicker.auto_agents;
    clicker.currencyClicks +=
      this.state.clicker.auto_strength * this.state.clicker.auto_agents;
    this.setState({ clicker });
  };

  render() {
    return (
      <React.Fragment>
        <Scoreboard currencyClicks={this.state.clicker.currencyClicks} />
        <ClickerZone onClickZone={this.handleClickZone} />
        <Autoclicker onTick={this.handleTick} clicker={this.state.clicker} />
        <UpgradeMenu
          onCost={this.handleCost}
          currency={this.state.clicker.currencyClicks}
          upgrades={this.state.upgrades}
          onUpgrade={this.handleUpgrade}
        />
      </React.Fragment>
    );
  }
}

export default App;
