import React, { Component } from "react";
import Scoreboard from "./components/Scoreboard";
import ClickerZone from "./components/ClickerZone";
import "./App.css";

class App extends Component {
  state = {
    clicker: {
      totalClicks: 0,
      currencyClicks: 0
    }
  };

  handleClickZone = e => {
    const clicker = this.state.clicker;
    clicker.totalClicks++;
    clicker.currencyClicks++;
    this.setState({ clicker });
  };

  render() {
    console.log("Here too");
    return (
      <React.Fragment>
        <Scoreboard currencyClicks={this.state.clicker.currencyClicks} />
        <ClickerZone onClickZone={this.handleClickZone} />
      </React.Fragment>
    );
  }
}

export default App;
