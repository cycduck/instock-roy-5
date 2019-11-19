import react from 'react';
import react-router from 'react-router-dom';
import node-sass from 'node-sass';
import './header.scss';

import logo from '../images/Logo-instock.svg';

export default class Header extends React.Component {

    render() {
    return ( 
        <header className="header-container">
            <nav className="nav-title">
                <div className="nav-title-container">
                    <a className="nav-title__link" href="index.html"><img className="nav-title__image" src={logo} alt="Instock logo" /></a>
                </div>
                <ul className="nav-title__sides">    
                    <li className="nav-title__item1"><a className="nav-title__links"  href="index.html">Biography</a></li>
                    <li className="nav-title__item2"><a className="nav-title__links"  href="index-shows.html">Shows</a></li>
                </ul>
            </nav>
        </header>
    
    )}}
