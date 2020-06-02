import React, { Component } from "react";
import cardVisa from "../../logo/visa.png";

class CardBack extends Component {
  render() {
    const {cvc} = this.props.card;
    return (
      <div className="card__back">
        <div className="card__black"></div>
        <div className="card__cvc">{cvc}</div>
        <div className="card__back__logo">
          <img className="visa" src={this.props.card.visa ? cardVisa : ''} width="140px" alt=""/>
        </div>
      </div>
    );
  }
}

export default CardBack;
