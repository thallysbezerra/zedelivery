import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Search from './components/Search';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main containerScreenPos="containerMsLeft" tituloPagina={["Bebida gelada e entrega rápida,",<br />,"a preço de mercado!"]} >
          <Search />
        </Main>
        <Footer />
      </div>
    );
  }
}

export default Home;