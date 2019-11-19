import React from 'react';
import { Link } from 'react-router';
// import react-router from 'react-router-dom';
import node-sass from 'node-sass';
// import images
import logo from '../images/Logo-instock.svg';
// import applications components
import './header.scss';

export default class Header extends React.Component {

    render() {
    return ( 
        <section className="header-container">
            <nav className="nav-title">
                <div className="nav-title-container">
                    <Link to='/'><img className="nav-title__image" src={logo} alt="Instock logo" /></Link>
                </div>
                <ul className="nav-title__sides">    
                    <li className="nav-title__item1"><a className="nav-title__links"  href="index.html">Biography</a></li>
                    <li className="nav-title__item2"><a className="nav-title__links"  href="index-shows.html">Shows</a></li>
                </ul>
            </nav>
        </section>
    
    )}}
