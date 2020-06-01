import React, { Component } from "react";
import cardVisa from "../../logo/visa.png";

class CardBack extends Component {
  render() {
    return (
      <div className="card__back">
        <div className="card__black"></div>
        <div className="card__cvc">424</div>
        <div className="card__back__logo">
          <img className="visa" src={cardVisa} width="140px" />
        </div>
      </div>
    );
  }
}

export default CardBack;
