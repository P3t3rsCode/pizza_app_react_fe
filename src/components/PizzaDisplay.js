import React from "react";
import "./Dashboard.scss";
import Axios from "axios";

class PizzaDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    return (
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-5 cursor-pointer w-30">
        <div>
          <img class="w-full" src={item.src} alt="Sunset in the mountains" />
          <div className="text-right py-2">
            <button
              onClick={e => {
                this.props.addItem(item);
              }}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              +
            </button>
          </div>
        </div>
        <div class="px-6">
          <div class="font-bold text-xl mb-2 text-center">{item.name}</div>
          <p class="text-gray-700 text-base text-center"> ₹{item.amount} </p>
        </div>
      </div>
    );
  }
}

export default PizzaDisplay;
