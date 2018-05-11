import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Card from './components/Card'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main tituloPagina="Escolha suas bebidas">
            <Card 
                price="00,00"
                product="Produto"
                amount="0"
            />
        </Main>
        <Footer />
      </div>
    );
  }
}

export default Home;