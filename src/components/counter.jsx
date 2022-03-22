import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <h1> ShopBasket</h1>

        <span className="badge badge-primary"> {this.formatCount()}</span>
        <button> Increment</button>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
