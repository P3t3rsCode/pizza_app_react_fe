import React from "react";
import "./Home.scss";
import Axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = async () => {
    localStorage.setItem("ph_no", this.state.number);
    await Axios.post("https://pizza-app-dev.herokuapp.com/users/sendOTP", {
      ph_no: this.state.number
    });
    this.props.history.push("/verify/otp");
  };

  render() {
    return (
      <div className="App bg-blue-800">
        <div className="lg:flex h-auto">
          <div
            className="border-l sm:border-r border-t border-b bg-img h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            title="Woman holding a mug"
          ></div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="w-full mb-10">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Phone Number
              </label>
              <input
                onChange={e => this.handleChange(e)}
                name="number"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Enter your phone number"
              />
            </div>
            <button
              onClick={this.handleClick}
              className="mb-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Send OTP
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
