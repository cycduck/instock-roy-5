import React from 'react';
import WarehouseCard from '../WarehouseCard/WarehouseCard';
import './Location.scss';
import AddModalBtn from '../AddModalBtn/AddModalBtn';
import ModalWH from '../Modal/ModalWarehouse/ModalWH';


export default class Location extends React.Component{
    state={
        isOpen : true
    }

    locationList = (location) => {
        return location.map( item => {
            return <WarehouseCard key={item.id} warehouse={item}/>
        });
    }
    errorHandle = () => {
        console.error('Failed to fetch warehouse locations');
        return null
    }
    
    modalHandle = (event) => {
        console.log("event.target")
        // this.isOpen = !this.isOpen
        this.setState({
            isOpen : !this.state.isOpen
        })
    }

    render(){
        const warehouseList = (!this.props.location) ? this.errorHandle() : this.locationList(this.props.location)
        return(
            
            <>
                <section className="location">
                <ModalWH isOpen={this.state.isOpen} modalHandle={this.modalHandle}/>
                    <div className="location-top">
                        <h1 className="location-top__title">Location</h1>
                        <input className="location-top__search-bar" placeholder="Search"></input>
                    </div>
                    <article className="location-container">
                        <div className="location-container__top">
                            <p className="location-container__label">warehouse</p>
                            <p className="location-container__label">contact</p>
                            <p className="location-container__label">contact information</p>
                            <p className="location-container__label">categories</p>
                        </div>
                        <div className="location-container__product-container">
                            {warehouseList}
                        </div>
                    </article>
                    <AddModalBtn onClick={this.modalHandle}/>
                </section>
            </>
        );
    }
}