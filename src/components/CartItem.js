import React from "react";
import "./Dashboard.scss";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    return (
      <div class="text-sm p-1 flex">
        <div className="w-3/5">{item.name}</div>
        <div className="w-1/5">{item.qty}</div>
        <div className="w-1/5">₹{item.amount}</div>
      </div>
    );
  }
}

export default CartItem;
