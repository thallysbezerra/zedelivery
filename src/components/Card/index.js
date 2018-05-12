import React, { Component } from 'react';
import './card.css';

class Card extends Component {

    constructor() {
        super()
        this.state = {
          price: "00,00",
          product: "Produto",
          amount: 0
        }
    }

    // Adiciona um item à lista de compras
    addOne = () => {
        const amount = this.state.amount
        this.setState({
            amount: amount + 1
        })
    }

    // Remove um item da lista de compras
    removeOne = () => {
        const amount = this.state.amount
        if(amount > 0) {
            this.setState({
                amount: amount - 1
            })
        }
    }

    render() {
        return (
            <div>
                <div className="responsiveGrid">
                    <div className="card">
                        <div className="card__price">R$ {this.state.price}</div>
                        <img src="https://fakeimg.pl/300x225/?text=Image" alt="Text" />
                        <div className="card__product">{this.state.product}</div>
                        <div className="card__footer">

                            <button
                                className="card__button card__button--remove"
                                disabled={ this.state.amount <= 0 ? true : false } // Ternário: Se quantidade de itens é menor ou igual a 0 , desativa o botão de remoção de item.
                                onClick={this.removeOne} >
                                -
                            </button>

                            <input
                                className="card__amount"
                                type="text"
                                value={this.state.amount} />

                            <button
                                className="card__button card__button--add"
                                onClick={this.addOne} >
                                +
                            </button>
                       
                        </div>
                    </div>
                </div>
                <div className="both"></div>
            </div>
        );
    }
}

export default Card;