import React, { Component } from 'react';
import './total.css';

class Total extends Component {

    constructor() {
        super()
        this.state = {
            amount: 0,
            price: 10,
            product: "Produto"
        }
    }

    render() {
        return (
            <div class="content__total">
                <div>
                    <div>Total</div>
                    <div>R$ <span>{ this.props.price }</span></div>
                    {/* <div>R$ <span>{ this.props.price.toFixed(2).replace(".",",") }</span></div> */}
                </div>
                <button>Traz a conta</button>
            </div>
        )
    }

}

export default Total;