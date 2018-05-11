import React, { Component } from 'react';
import './card.css';

class Card extends Component {
  render() {
    return (
        <div>
            <div className="responsiveGrid">
                <div className="card">
                    <div className="card__price">R$ {this.props.price}</div>
                    <img src="https://fakeimg.pl/300x225/?text=Image" />
                    <div className="card__product">{this.props.product}</div>
                    <div className="card__footer">
                        <a href="" className="card__button card__button--remove">-</a>
                        <input className="card__amount" type="text" value={this.props.amount}/>
                        <a href="" className="card__button card__button--add">+</a>
                    </div>
                </div>
            </div>
            <div className="both"></div>
        </div>
    );
  }
}

export default Card;