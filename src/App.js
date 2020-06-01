import React, { Component } from "react";
import CreditCard from "./components/CreditCard/CreditCard";
import CreditCardForm from "./components/CreditCardForm/Form";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title__app">CreditCard</h1>
        <div className="card__app">
          <CreditCard />
          <CreditCardForm />
        </div>
      </div>
    );
  }
}

export default App;
