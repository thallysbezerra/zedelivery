import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import './search.css';

class Search extends React.Component {
    constructor(props) {
        super(props);  
        this.state = { address: '' }
    }

    handleChange = (address) => {
        this.setState({ address })
    }

    handleSelect = (address) => {
        geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => console.log('Success', latLng ))
        .catch(error => console.error('Error', error))
    }

    render() {
        return (
            <div className="search">
                <label className="label" for="addressInput">Digite o endereço para receber as bebidas</label>
                <PlacesAutocomplete
                    value={this.state.address}
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                >
                    {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                    <form action="/products">
                        <div>

                            <input
                            {...getInputProps({
                                className: 'location-search-input search__address',
                                id: 'addressInput',
                                placeholder: 'Ex: Rua Costa Carvalho, 523',
                            })}
                            />

                            <button 
                                id="searchButton"
                                className="search__button"
                                disabled={ this.state.address != "" ? false : true }>
                                Ver bebidas
                            </button>
                            
                            <div className="autocomplete-dropdown-container">
                            {suggestions.map(suggestion => {
                                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                            ? { backgroundColor: '#fcd500', cursor: 'pointer', padding: '20px' }
                                            : { backgroundColor: '#eee', cursor: 'pointer', padding: '20px' };
                                return (
                                <div {...getSuggestionItemProps(suggestion, { className, style })}>
                                    <span>{suggestion.description}</span>
                                </div>
                                )
                            })}
                            </div>
                        </div>
                    </form>
                    )}
                </PlacesAutocomplete>
            </div>
        );
    }
}

export default Search;