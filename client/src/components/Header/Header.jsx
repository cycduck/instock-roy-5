import React from 'react'
import {Link} from 'react-router-dom';
import './Header.scss';

import instock from '../../assets/Logo/Logo-instock.svg';

export default class Header extends React.Component{
    inventory = true
    location = false
    handleInventory = () => {
       this.inventory = false;
       this.location = true;
    }
    handleLocation = () => {
        this.inventory = true;
        this.location = true;
     }
    render(){
        return(
            <header className="header">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <Link to="/"><img src={instock} alt="instock logo"/></Link>
                    </div>
                    <nav className="nav">
                        <Link to="/" className='nav__item nav__item--active'>Inventory</Link>
                        <Link to="/warehouse" className='nav__item'>Locations</Link>
                    </nav>
                </div>
            </header>
        );
    }
}