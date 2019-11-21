import React, { Component } from 'react'
import './inventory.scss';
import searchIcon from '../assets/Icons/SVG/Icon-search.svg'

export default class Inventory extends Component {
    render() {
        return (
            <section>
                {/* <Header /> */}
                <div className='inventory__container-for-title-search-bar'>
                    <h1 className='inventory__page-title'>Inventory</h1>
                    <div className="inventory__search-bar">
                        <img className = "inventory__search-icon" src={searchIcon} alt="search icon" />
                        <p className = "inventory__search-field">Search</p>
                    </div>
                </div>

            </section>
        )
    }
}
