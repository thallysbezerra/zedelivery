import React, { Component } from 'react';
import './search.css';

class Search extends Component {
    render() {
        return (
            <div className="search">
                <label className="label" for="adress">Digite o endereço para receber as bebidas</label>
                <div>
                    <input className="search__adress" id="adress" placeholder="Ex: Rua Costa Carvalho, 523" type="text" />
                    <button className="search__button">Ver bebidas</button>
                </div>
            </div>
        )
    }
}

export default Search;