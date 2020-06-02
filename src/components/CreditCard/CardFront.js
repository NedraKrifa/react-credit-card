import React, { Component } from "react";
import cardLogo from "../../logo/logo.png";
import cardVisa from "../../logo/visa.png";

class CardFront extends Component {
  render() {
    const { number, name, expiry} = this.props.card;
    return (
      <div className="card__front">
        <div className="card__logo">
          <div className="card__logo__image">
            <img className="logo" src={cardLogo} alt="logo"/>
          </div>
          <div className="card__logo__title">
            <img className="visa" src={this.props.card.visa ? cardVisa : ''} width="140px" alt=""/>
          </div>
        </div>
        <div className="card__number">{number}</div>
        <div className="card__info">
          <div className="card__info__name">{name}</div>
          <div className="card__info__date">
            <div className="card__info__title">valid thru</div>
            <div className="card__info__expiry">{expiry}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardFront;
