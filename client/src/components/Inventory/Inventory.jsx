import React from 'react'
import './Inventory.scss';

import ProductCard from '../ProductCard/ProductCard';
import AddModalBtn from '../AddModalBtn/AddModalBtn';
import InventoryModal from '../InventoryModal/InventoryModal';

export default class Inventory extends React.Component{
    state={
        isOpen : false
    }
    
    productList = (inventory) => {
        return inventory.map( item => {
            return <ProductCard key={item.id} product={item}/>
        });
    }
    errorHandle = () => {
        console.error('Failed to fetch inventory');
        return null
    }

    modalHandle = (event) => {
        this.setState({
            isOpen : !this.state.isOpen
        })
    }

    render(){
        const productList = (!this.props.inventory) ? this.errorHandle() : this.productList(this.props.inventory)
        return(
            <section className="inventory">
                <div className="inventory-top">
                    <h1 className="inventory-top__title">Inventory</h1>
                    <input className="inventory-top__search-bar" placeholder="Search"></input>
                </div>
                <article className="inventory-container">
                    <div className="inventory-container__top">
                        <p className="inventory-container__label">Item</p>
                        <p className="inventory-container__label">Last Ordered</p>
                        <p className="inventory-container__label">Location</p>
                        <p className="inventory-container__label">Quantity</p>
                        <p className="inventory-container__label">Status</p>
                    </div>
                    <div className="inventory-container__product-container">
                        {productList}
                    </div>
                </article>
                <AddModalBtn onClick={this.modalHandle}/>
            </section>
        );
    }
}