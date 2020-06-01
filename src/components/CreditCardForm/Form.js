import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form>
        <div className="form__group">
          <input
            type="tel"
            name="number"
            className="form__input"
            placeholder="Card Number"
            pattern="[\d| ]{16,22}"
            required
          />
          <small>E.g.: 49..., 51..., 36..., 37...</small>
        </div>
        <div>
          <input
            type="text"
            name="name"
            className="form__input"
            placeholder="Name"
            required
          />
        </div>
        <div className="form__tel">
          <div>
            <input
              type="tel"
              name="expiry"
              className="form__input__tel"
              placeholder="Valid Thru"
              pattern="\d\d/\d\d"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              name="cvc"
              className="form__input__tel"
              placeholder="CVC"
              pattern="\d{3,4}"
              required
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
