import React, { Component } from "react";
import CreditCard from "./components/CreditCard/CreditCard";
import CreditCardForm from "./components/CreditCardForm/Form";
import "./App.css";

export class App extends Component {
  state = {
    logo: "",
    number: ".... .... .... ....",
    name: "YOUR NAME HERE",
    expiry: "../..",
    cvc: "",
    focus: false,
    visa: false,
  };
  setFocus = (Boolean) => {
    this.setState({
      focus: Boolean,
    });
  };
  onChangeNumber = (e) => {
    if (e.target.value === "") {
      this.setState({
        visa: false,
      });
    } else {
      this.setState({
        visa: true,
      });
    }
    if ([4, 9, 14].includes(e.target.value.length)) {
      e.target.value = e.target.value + " ";
    } else if ([5, 10, 15].includes(e.target.value.length)) {
      e.target.value = e.target.value.trim();
    }
    const size = 19 - e.target.value.length;
    let list = Array(size).fill(".");
    for (let i = list.length - 5; i >= 0; i = i - 5) {
      list[i] = " ";
    }
    this.setState({
      number: e.target.value + list.join(""),
    });
  };
  onChangeName = (e) => {
    if(e.target.value === ''){
      this.setState({
        name: "YOUR NAME HERE",
      });
    }else{
      this.setState({
        name: e.target.value,
      });
    }
  };
  onChangeExpiry = (e) => {
    if (e.target.value.length === 2) {
      e.target.value = e.target.value + "/";
    } else if (e.target.value.length === 3) {
      e.target.value = e.target.value.replace("/", "");
    }
    const size = 5 - e.target.value.length;
    let list = Array(size).fill(".");
    list[list.length - 3] = "/";
    this.setState({
      expiry: e.target.value + list.join(""),
    });
  };
  onChangeCVC = (e) => {
    this.setState({
      cvc: e.target.value,
    });
  };
  render() {
    console.log(this.state.visa);
    return (
      <div className="App">
        <h1 className="title__app">CreditCard</h1>
        <div className="card__app">
          <CreditCard card={this.state} />
          <CreditCardForm
            card={this.state}
            setFocus={this.setFocus}
            onChangeNumber={this.onChangeNumber}
            onChangeName={this.onChangeName}
            onChangeExpiry={this.onChangeExpiry}
            onChangeCVC={this.onChangeCVC}
          />
        </div>
      </div>
    );
  }
}

export default App;
