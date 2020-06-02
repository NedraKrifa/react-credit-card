import React, { Component } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

class CreditCard extends Component {

  getStyleBackground=()=>{
    return {
      position: 'relative',
      textAlign: 'center',
      width: '100%',
      height: '100%',
      padding: '25px',
      borderRadius: '15px',
      color: 'white',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
      transition: 'transform 0.6s',
      transformStyle: 'preserve-3d',
      background: this.props.card.visa ? 'linear-gradient(25deg, #0f509e, #1399cd)' : 'gray',
      transform: this.props.card.focus ? 'rotateY(180deg)' : 'rotateY(0deg)'
    }
  }
  render() {
    return (
      <div className="flip__card">
        <div className='flip__card__inner' style={this.getStyleBackground()}>
          <CardFront card={this.props.card}/>
          <CardBack card={this.props.card}/>
        </div>
      </div>
    );
  }
}

export default CreditCard;
