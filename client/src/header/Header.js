import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from '../assets/logo/Logo-instock.svg';

export default class Header extends React.Component {
       
  render() { 
      return (
      <header className="header-container">
          <nav className="nav-title">
              <div className="nav-title-container">
                  <Link to path='/' className="nav-title__link"><img className="nav-title__image" src={logo} alt="InStock Logo" /></Link>
              </div>
              <ul className="nav-title__sides">    
                  <Link to path='/warehouse' className="nav-title__item1">Warehouse</Link>
                  <Link to path='/inventory' className="nav-title__item2">Inventory</Link>
              </ul>
          </nav>
      </header>
  )}}
