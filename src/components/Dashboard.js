import React from "react";
import "./Dashboard.scss";
import Axios from "axios";
import PizzaDisplay from "./PizzaDisplay";
import CartItem from "./CartItem";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: [],
      cart: []
    };
  }

  componentDidMount() {
    Axios.get("https://pizza-app-dev.herokuapp.com/orders/AllItems").then(res =>
      this.setState({ pizzas: res.data })
    );
  }

  addItemToCart = propItem => {
    let cart = this.state.cart;
    let temp = {
      name: propItem.name,
      id: propItem._id,
      amount: propItem.amount
    };
    //check if the cart already contains the item;
    let index = cart.findIndex(item => item.id == propItem._id);
    if (index == -1) {
      temp.qty = 1;
      cart.push(temp);
    } else {
      temp.qty = cart[index].qty + 1;
      temp.amount = temp.amount * temp.qty;
      cart[index] = temp;
    }

    this.setState({ cart: cart });
  };

  placeOrder = () => {
    Axios.post("https://pizza-app-dev.herokuapp.com/orders/placeOrder", {
      cart: this.state.cart
    }).then(res => {
      console.log(res.data);
      alert("Oder placed sucessfuly and sms with Order Id will be sent to you");
      this.setState({ cart: [] });
    });
  };

  getTotal = () => {
    let total = 0;
    this.state.cart.map(item => {
      total += item.amount;
    });
    if (total > 0)
      return (
        <div>
          <div className="border-t-2  p-1 flex justify-between">
            <span className="text-xl font-bold">Your total : ₹{total}</span>
            <button
              onClick={e => {
                this.placeOrder();
              }}
              class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Place Order
            </button>
          </div>
        </div>
      );
  };

  render() {
    return (
      <div className="container">
        <div className="item-container">
          {this.state.pizzas.map(item => (
            <PizzaDisplay
              item={item}
              key={item._id}
              addItem={this.addItemToCart}
            />
          ))}
        </div>

        <div className="cart_container">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              class="w-full"
              src="/img/cart.svg"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Your cart</div>
              {this.state.cart.map((item, index) => (
                <CartItem item={item} key={index} />
              ))}
              {this.getTotal()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
