import React, { Component } from 'react';
import './header.css';
import logo from './white-logo-horizontal.png'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__logo">
                    <a href="/"><img src={logo} alt="Zé Delivery de bebidas" /></a>
                </div>
            </header>
        )
    }
}

export default Header;