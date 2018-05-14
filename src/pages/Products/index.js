import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Card from '../../components/Card'

class Products extends Component {

  render() {
    return (
      <div>
        <Header />
        <Main tituloPagina="Escolha suas bebidas">
            <Card />
        </Main>
        <Footer />
      </div>
    );
  }
}

export default Products;