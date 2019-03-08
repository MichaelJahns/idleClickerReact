import React, { Component } from "react";
import Scoreboard from "./components/Scoreboard";
import ClickerZone from "./components/ClickerZone";
import "./App.css";
import UpgradeMenu from "./components/UpgradeMenu";

class App extends Component {
  state = {
    clicker: {
      totalClicks: 0,
      currencyClicks: 0
    },
    upgrades: [
      {
        name: "Clicker Power",
        currentRank: 0,
        maxRank: 10,
        cost: 50
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
    clicker.totalClicks++;
    clicker.currencyClicks++;
    this.setState({ clicker });
  };

  handleCost = upgrade => {
    console.log(upgrade.cost, "paid");
    let clicker = this.state.clicker;
    clicker.currencyClicks -= upgrade.cost;

    this.setState({ clicker });
  };

  handleUpgrade = upgrade => {
    const upgrades = [...this.state.upgrades];
    const index = upgrades.indexOf(upgrade);
    upgrades[index] = { ...upgrade };
    upgrades[index].currentRank++;
    upgrades[index].cost += 10;
    this.setState({ upgrades });
  };

  render() {
    return (
      <React.Fragment>
        <Scoreboard currencyClicks={this.state.clicker.currencyClicks} />
        <ClickerZone onClickZone={this.handleClickZone} />
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
