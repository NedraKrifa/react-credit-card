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
            required
            onFocus={()=>this.props.setFocus(false)}
            onChange={(e)=>this.props.onChangeNumber(e)}
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
            onFocus={()=>this.props.setFocus(false)}
            onChange={(e)=>this.props.onChangeName(e)}
          />
        </div>
        <div className="form__tel">
          <div>
            <input
              type="tel"
              name="expiry"
              className="form__input__tel"
              placeholder="Valid Thru"
              required
              onFocus={()=>this.props.setFocus(false)}
              onChange={(e)=>this.props.onChangeExpiry(e)}
            />
          </div>
          <div>
            <input
              type="tel"
              name="cvc"
              className="form__input__tel"
              placeholder="CVC"
              required
              onFocus={()=>this.props.setFocus(true)}
              onChange={(e)=>this.props.onChangeCVC(e)}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
