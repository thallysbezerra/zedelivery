import React, { Component } from 'react';
import Total from '../Total';
import './card.css';

class Card extends Component {

    constructor() {
        super()
        this.state = {
            amount: 0
        }
    }

    // Adiciona um item à lista de compras
    addOne = () => {
        const amount = this.state.amount
        const price = this.state.price
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

        const myApi = [
          {
            "id": "1",
            "title": "Skol 300ml | Apenas o Líquido.",
            "description": null,
            "imageUrl": "https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/583de5188c0e8.jpg",
            "price": 20.28
          },
          {
            "id": "2",
            "title": "Stella Artois 275ml - Unidade",
            "description": null,
            "imageUrl": "https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/592de3ed8977d.jpg",
            "price": 3.69
          },
          {
            "id": "3",
            "title": "Budweiser 343ml - Pack com 6 Unidades",
            "description": null,
            "imageUrl": "https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/56ebfc992623b.jpg",
            "price": 20.34
          },
          {
            "id": "4",
            "title": "Skol 350ml - Unidade",
            "description": null,
            "imageUrl": "https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/5662f9a0bfd2e.jpg",
            "price": 2.99
          },
          {
            "id": "5",
            "title": "Skol 350ml - Pack com 12 Unidades",
            "description": null,
            "imageUrl": "https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/591379909d61b.jpg",
            "price": 35.88
          },
          {
            "id": "6",
            "title": "Brahma 350ml - Unidade",
            "description": null,
            "imageUrl": "https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/566b52ef302cf.jpg",
            "price": 2.89
          },
          {
            "id": "7",
            "title": "Brahma 350ml - Pack com 12 Unidades",
            "description": null,
            "imageUrl": "https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/591379f7cd2e4.jpg",
            "price": 34.68
          },
          {
            "id": "8",
            "title": "Corona Extra 355ml - Unidade",
            "description": null,
            "imageUrl": "https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/5662fc6ebebe8.jpg",
            "price": 5.99
          },
          {
            "id": "9",
            "title": "Corona Extra 355ml - Pack com 6 unidades",
            "description": null,
            "imageUrl": "https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/5662fc93e5079.jpg",
            "price": 35.94
          },
          {
            "id": "10",
            "title": "Original 600ml | Vasilhame Incluso",
            "description": null,
            "imageUrl": "https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/5825b59ff3f3a.jpg",
            "price": 6.49
          },
          {
            "id": "11",
            "title": "Original 600ml | Vasilhame Incluso.",
            "description": null,
            "imageUrl": "https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/59137a5f5e251.jpg",
            "price": 77.88
          },
          {
            "id": "12",
            "title": "Skol Beats Senses 313ml - Pack com 6 Unidades",
            "description": null,
            "imageUrl": "https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/573349f08f942.jpg",
            "price": 29.94
          },
          {
            "id": "13",
            "title": "Skol 1L | Vasilhame Incluso",
            "description": null,
            "imageUrl": "https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/5825b75a5062e.jpg",
            "price": 71.88
          },
          {
            "id": "14",
            "title": "Skol 1L | Vasilhame Incluso.",
            "description": null,
            "imageUrl": "https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/58267e769faf2.jpg",
            "price": 70
          },
          {
            "id": "15",
            "title": "Original 600ml | Apenas o Líquido.",
            "description": null,
            "imageUrl": "https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/59137c2b383c1.jpg",
            "price": 65.88
          },
          {
            "id": "16",
            "title": "Skol 1L | Apenas o Líquido",
            "description": null,
            "imageUrl": "https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/59137c61c3538.jpg",
            "price": 70
          },
          {
            "id": "17",
            "title": "Brahma 1L | Apenas o Líquido.",
            "description": null,
            "imageUrl": "https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/583de5cc18df9.jpg",
            "price": 65.88
          },
          {
            "id": "18",
            "title": "Brahma 600ml | Apenas o Líquido.",
            "description": null,
            "imageUrl": "https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/583de5f8cdb0a.jpg",
            "price": 57.48
          },
          {
            "id": "19",
            "title": "Skol 600ml | Apenas o Líquido.",
            "description": null,
            "imageUrl": "https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/59137cad92603.jpg",
            "price": 63.48
          },
          {
            "id": "20",
            "title": "Brahma 300ml | Apenas o líquido.",
            "description": null,
            "imageUrl": "https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/583de68ed6271.jpg",
            "price": 20.28
          },
          {
            "id": "21",
            "title": "Serramalte 600ml | Apenas o Líquido.",
            "description": null,
            "imageUrl": "https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/583de6ca779d4.jpg",
            "price": 71.88
          },
          {
            "id": "22",
            "title": "Kit Variant Cerveja e Copo",
            "description": null,
            "imageUrl": "https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/583de5cc18df9.jpg",
            "price": 30
          }
        ]

        return (
            <div>
                <Total price="0" />   

                    {myApi.map(item =>

                      <div key={item.id} className="responsiveGrid">
                          <div className="card">
                              <div className="card__price">R$ {item.price}</div>
                              <img src={item.imageUrl} alt="Text" />
                              <div className="card__product">{item.title}</div>
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

                    )}

                <div className="both"></div>
            </div>
        );
    }
}

export default Card;