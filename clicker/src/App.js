import React, { Component } from "react";
import Scoreboard from "./components/Scoreboard";
import ClickerZone from "./components/ClickerZone";
import Shop from "./components/Shop";
import Autoclicker from "./components/Autoclicker";
import "./App.css";

class App extends Component {
  state = {
    clicker: {
      tierUnlocked: 0,
      clickPower: 1,
      currency: 100000000,
      totalCurrency: 0,
      autoInterval: 5000,
      income: 0
    },
    clickerUpgrades: [
      {
        id: 0,
        name: "Clicker Power",
        affects: "clickPower",
        currentRank: 0,
        increment: 1,
        maxRank: 10,
        cost: 10,
        selfIncrement: 15
      },
      {
        id: 0,
        name: "Auto Interval",
        affects: "autoInterval",
        currentRank: 0,
        increment: -500,
        maxRank: 10,
        cost: 100,
        selfIncrement: 1
      }
    ],
    agentUpgrades: [
      {
        id: 0,
        name: "Farmer",
        currentRank: 0,
        income: 5,
        modifer: 1,
        maxRank: 999,
        cost: 25,
        selfIncrement: 1.1
      },
      {
        id: 1,
        name: "Town Guard",
        currentRank: 0,
        income: 15,
        modifer: 1,
        maxRank: 999,
        cost: 100,
        selfIncrement: 1.5
      },
      {
        id: 2,
        name: "Innkeeper",
        currentRank: 0,
        income: 50,
        modifer: 1,
        maxRank: 999,
        cost: 1000,
        selfIncrement: 2
      },
      {
        id: 3,
        name: "Merchant",
        currentRank: 0,
        income: 100,
        modifer: 1,
        maxRank: 999,
        cost: 10000,
        selfIncrement: 2.5
      },
      {
        id: 4,
        name: "Master at Arms",
        currentRank: 0,
        income: 200,
        modifer: 1,
        maxRank: 999,
        cost: 20000,
        selfIncrement: 3
      },
      {
        id: 5,
        name: "Mayor",
        currentRank: 0,
        income: 500,
        modifer: 1,
        maxRank: 999,
        cost: 50000,
        selfIncrement: 5
      }
    ]
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
    const clickerUpgrades = [...this.state.clickerUpgrades];
    const index = clickerUpgrades.indexOf(upgrade);
    clickerUpgrades[index] = { ...upgrade };
    clickerUpgrades[index].currentRank++;
    clickerUpgrades[index].increment = Math.ceil(
      clickerUpgrades[index].increment * upgrade.selfIncrement
    );
    clickerUpgrades[index].cost = Math.ceil(
      clickerUpgrades[index].cost * upgrade.selfIncrement
    );
    this.setState({ clickerUpgrades });
  };

  handleAgentUpgrade = upgrade => {
    const agentUpgrades = [...this.state.agentUpgrades];
    const index = agentUpgrades.indexOf(upgrade);
    agentUpgrades[index] = { ...upgrade };
    agentUpgrades[index].currentRank++;
    agentUpgrades[index].increment = Math.ceil(
      agentUpgrades[index].increment * upgrade.selfIncrement
    );
    agentUpgrades[index].cost = Math.ceil(
      agentUpgrades[index].cost * upgrade.selfIncrement
    );

    this.updateIncome(agentUpgrades);

    this.setState({ agentUpgrades });
  };

  updateIncome = agentUpgrades => {
    const clicker = this.state.clicker;
    const income = agentUpgrades.reduce((accumulator, current) => {
      accumulator += current.income * current.currentRank * current.modifer;
      return accumulator;
    }, 0);
    clicker.income = income;
    this.setState({ clicker });
  };

  handleTick = () => {
    const clicker = this.state.clicker;
    clicker.currency += this.state.clicker.income;
    this.setState({ clicker });
  };

  render() {
    return (
      <React.Fragment>
        <Scoreboard clicker={this.state.clicker} />
        <ClickerZone onClickZone={this.handleClickZone} />
        <Autoclicker onTick={this.handleTick} clicker={this.state.clicker} />
        <Shop
          onCost={this.handleCost}
          currency={this.state.clicker.currency}
          clickerUpgrades={this.state.clickerUpgrades}
          agentUpgrades={this.state.agentUpgrades}
          onClickUpgrade={this.handleClickUpgrade}
          onAgentUpgrade={this.handleAgentUpgrade}
        />
      </React.Fragment>
    );
  }
}

export default App;
