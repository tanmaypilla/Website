import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/400",
  };
  render() {
    return (
      <div>
        <h1> ShopBasket</h1>
        <img src={this.state.imageUrl} alt="" />
        <span> {this.formatCount()}</span>
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
