import React from 'react'

import './Header.scss';

import instock from '../../assets/Logo/Logo-instock.svg';

export default class Header extends React.Component{
    render(){
        return(
            <header className="header">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <img src={instock} alt="instock logo"/>
                    </div>
                    <nav className="nav">
                        <p className="nav__item nav__item-active clickable-link-animation">Invetory</p>
                        <p className="nav__item clickable-link-animation">Locations</p>
                    </nav>
                </div>
            </header>
        );
    }
}