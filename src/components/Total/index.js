import React, { Component } from 'react';
import './total.css';

class Total extends Component {

    render() {
        return (
            <div class="content__total">
                <div>
                    <div>Total</div>
                    <div>R$ <span>00</span>,00</div>
                </div>
                <button>Traz a conta</button>
            </div>
        )
    }

}

export default Total;