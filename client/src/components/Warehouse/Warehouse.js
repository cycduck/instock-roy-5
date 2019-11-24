import React from 'react';

// import required assets
import iconSearch from './Icon-search.svg';

// import styling 
import './warehouseTitle.scss';


export default class Warehouse extends React.Component {

    render() {
        return (  
            <>
            {/* <Header /> */}
            <div className='warehouse__title-container'>
                <h1 className='warehouse__title'>Locations</h1>
                    <div className='warehouse__search-bar'>
                        <img className = "warehouse__search-icon" src={iconSearch} alt="search icon" />
                        <p className = "warehouse__search-field">Search</p>
                    </div>
            </div>
            </>
        )}
    }