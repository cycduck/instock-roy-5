import React from 'react';
import {Link} from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import './WarehouseInfo.scss';
import backArrow from '../../assets/Icons/SVG/Icon-back-arrow.svg';

export default class WarehouseInfo extends React.Component{
    filterProduct = (inventory) => {
        return inventory.filter( item => item.warehouseId === this.props.warehouse.id);
    }
    productList = (inventory) => {
        return inventory.map( item => {
            return <ProductCard key={item.id} product={item}/>
        });
    }
    errorHandle = () => {
        console.error('Failed to fetch warehouse and inventory');
        return null;
    }
    
    render(){
        console.log(this.props)
        if(!this.props.warehouse){
            this.errorHandle();
            return null;
        }

        const warehouseProduct = (!this.props.inventory) ? this.errorHandle() : this.filterProduct(this.props.inventory)
        const productList = (!this.props.inventory) ? this.errorHandle() : this.productList(warehouseProduct)

        return(
            <section className="warehouse-info"> 
                <div className="warehouse-info__top">
                    <Link to="/warehouse"><img src={backArrow} alt="back arrow" className="warehouse-info__back-arrow"/></Link>
                    <h1 className="warehouse-info__name">{this.props.warehouse.name}</h1>
                </div>
                <hr className="warehouse-info__ruler"></hr>
                <div className="warehouse-info__content">
                    <div className="warehouse-info__content-left">
                        <p className="warehouse-info__label">Address</p>
                        <p className="warehouse-info__info">{this.props.warehouse.address.street}</p>
                        <p className="warehouse-info__info">{this.props.warehouse.address.suiteNum}</p>
                        <p className="warehouse-info__info">{`${this.props.warehouse.address.city}, ${this.props.warehouse.address.province}`}</p>
                        <p className="warehouse-info__info">{this.props.warehouse.address.postal}</p>
                    </div>
                    <div className="warehouse-info__content-right">
                        <p className="warehouse-info__label">COntact</p>
                        <p className="warehouse-info__info">{this.props.warehouse.contact.name}</p>
                        <p className="warehouse-info__info">{this.props.warehouse.contact.title}</p>
                        <p className="warehouse-info__info">{this.props.warehouse.contact.phone}</p>
                        <p className="warehouse-info__info">{this.props.warehouse.contact.email}</p>
                    </div>
                </div>
                <div className="warehouse-info__product-wrapper">
                    <div className="warehouse-info__product-container">
                        {productList}
                    </div>
                </div>
            </section>
        );
    }
}