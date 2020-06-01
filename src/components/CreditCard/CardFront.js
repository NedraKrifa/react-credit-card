import React, { Component } from "react";
import cardLogo from "../../logo/logo.png";
import cardVisa from "../../logo/visa.png";

class CardFront extends Component {
  render() {
    return (
      <div className="card__front">
        <div className="card__logo">
          <div className="card__logo__image">
            <img className="logo" src={cardLogo} />
          </div>
          <div className="card__logo__title">
            <img className="visa" src={cardVisa} width="140px" />
          </div>
        </div>
        <div className="card__number">.... .... .... ....</div>
        <div className="card__info">
          <div className="card__info__name">YOUR NAME HERE</div>
          <div className="card__info__date">
            <div className="card__info__title">valid thru</div>
            <div className="card__info__expiry">../..</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardFront;
