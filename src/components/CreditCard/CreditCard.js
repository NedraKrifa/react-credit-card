import React, { Component } from "react";
import cardLogo from "../../logo/logo.png";
import cardVisa from "../../logo/visa.png";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

class CreditCard extends Component {
  render() {
    return (
      <div className="flip__card">
        <div className='flip__card__inner'>
          <CardFront />
          <CardBack />
        </div>
      </div>
    );
  }
}

export default CreditCard;
