import React, { Component } from "react";

export default class ClickerZone extends Component {
  render() {
    console.log(this.props);
    return (
      <aside>
        <button className="ClickZone" onClick={this.props.onClickZone} />
      </aside>
    );
  }
}
