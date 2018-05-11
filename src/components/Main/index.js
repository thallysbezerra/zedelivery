import React, { Component } from 'react';
import './main.css';

class Main extends Component {
  render() {
    return (
        <main className="content">
          <h2 className={`content__tituloPagina  content__tituloPagina--${this.props.containerScreenPos}`}>
            { this.props.tituloPagina }
          </h2>
          {this.props.children}
        </main>
    );
  }
}

export default Main;