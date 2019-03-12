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
      autoclicker: {
        interval: 5000,
        strength: 1,
        agents: 0
      }
    },
    upgrades: [
      {
        name: "Clicker Power Rnk I",
        increment: 1,
        currentRank: 0,
        maxRank: 10,
        cost: 10
      },
      {
        name: "Clicker Power Rnk II",
        increment: 10,
        currentRank: 0,
        maxRank: 10,
        cost: 500
      },
      {
        name: "Clicker Power Rnk III",
        increment: 100,
        currentRank: 0,
        maxRank: 10,
        cost: 5000
      },
      {
        name: "Clicker Power Rnk IV",
        increment: 1000,
        currentRank: 0,
        maxRank: 10,
        cost: 500000
      },
      {
        name: "Clicker Power Rnk V",
        increment: 10000,
        currentRank: 0,
        maxRank: 10,
        cost: 50000000
      },
      {
        name: "Passive Income",
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
    clicker.clickPower += upgrade.increment;
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
      this.state.clicker.autoclicker.strength *
      this.state.clicker.autoclicker.agents;
    clicker.currencyClicks +=
      this.state.clicker.autoclicker.strength *
      this.state.clicker.autoclicker.agents;
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
