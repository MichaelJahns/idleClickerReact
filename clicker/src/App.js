import React, { Component } from "react";
import Scoreboard from "./components/Scoreboard";
import ClickerZone from "./components/ClickerZone";
import "./App.css";
import UpgradeMenu from "./components/UpgradeMenu";
import Autoclicker from "./components/Autoclicker";

class App extends Component {
  state = {
    clicker: {
      tierUnlocked: 0,
      clickPower: 1,
      currency: 0,
      totalCurrency: 0,
      auto_interval: 1000,
      auto_strength: 0
    },
    upgrades: {
      clickerUpgrades: [
        {
          id: 0,
          name: "Clicker Power",
          affects: "clickPower",
          increment: 1,
          currentRank: 0,
          maxRank: 10,
          cost: 10,
          selfIncrement: 15
        }
      ],
      agentUpgrades: [
        {
          id: 0,
          name: "Farmer",
          income: 5,
          modifer: 1,
          currentRank: 0,
          maxRank: 999,
          cost: 25,
          selfIncrement: 1.1
        },
        {
          id: 1,
          name: "Town Guard",
          income: 15,
          modifer: 1,
          currentRank: 0,
          maxRank: 999,
          cost: 100,
          selfIncrement: 1.5
        },
        {
          id: 2,
          name: "Innkeeper",
          income: 50,
          modifer: 1,
          currentRank: 0,
          maxRank: 999,
          cost: 1000,
          selfIncrement: 2
        },
        {
          id: 3,
          name: "Merchant",
          income: 100,
          modifer: 1,
          currentRank: 0,
          maxRank: 999,
          cost: 10000,
          selfIncrement: 2.5
        },
        {
          id: 4,
          name: "Master at Arms",
          income: 200,
          modifer: 1,
          currentRank: 0,
          maxRank: 999,
          cost: 20000,
          selfIncrement: 3
        },
        {
          id: 5,
          name: "Mayor",
          income: 500,
          modifer: 1,
          currentRank: 0,
          maxRank: 999,
          cost: 50000,
          selfIncrement: 5
        }
      ]
    }
  };

  handleClickZone = e => {
    const clicker = this.state.clicker;
    clicker.currency += this.state.clicker.clickPower;
    this.setState({ clicker });
  };

  handleCost = upgrade => {
    let clicker = this.state.clicker;
    //migrate the below line to unique function that tracks whats supposed to be upgraded
    clicker[upgrade.affects] += upgrade.increment;
    clicker.currency -= upgrade.cost;

    this.setState({ clicker });
  };

  handleClickUpgrade = upgrade => {
    const upgrades = [...this.state.upgrades[0]];
    const index = upgrades.indexOf(upgrade);
    upgrades[index] = { ...upgrade };
    upgrades[index].currentRank++;
    upgrades[index].increment = Math.ceil(
      upgrades[index].increment * upgrade.selfIncrement
    );
    upgrades[index].cost = Math.ceil(
      upgrades[index].cost * upgrade.selfIncrement
    );
    this.setState({ upgrades });
  };

  handleTick = () => {
    const clicker = this.state.clicker;
    clicker.currency += this.state.clicker.auto_strength;
    this.setState({ clicker });
  };

  render() {
    return (
      <React.Fragment>
        <Scoreboard clicker={this.state.clicker} />
        <ClickerZone onClickZone={this.handleClickZone} />
        <Autoclicker onTick={this.handleTick} clicker={this.state.clicker} />
        <UpgradeMenu
          onCost={this.handleCost}
          currency={this.state.clicker.currency}
          upgrades={this.state.upgrades}
          onClickUpgrade={this.handleClickUpgrade}
        />
      </React.Fragment>
    );
  }
}

export default App;
