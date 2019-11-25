import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './WarehouseInfo.scss';
import backArrow from '../../assets/Icons/SVG/Icon-back-arrow.svg';

export default class WarehouseInfo extends React.Component{
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
        if(!this.props.warehouse){
            this.errorHandle();
            return null;
        }
        const productList = (!this.props.inventory) ? this.errorHandle() : this.productList(this.props.inventory)
        return(
            <section className="warehouse-info"> 
                <div className="warehouse-info__top">
                    <img src={backArrow} alt="back arrow" className="warehouse-info__back-arrow"/>
                    <h1 className="warehouse-info__name">{this.props.warehouse.name}</h1>
                </div>
                <hr className="warehouse-info__ruler"></hr>
                <div className="warehouse-info__content">
                    <div className="warehouse-info__content-left">
                        <p className="warehouse-info__label">Address</p>
                        <p className="warehouse-info__info">123 Main Street W</p>
                        <p className="warehouse-info__info">Suite 201</p>
                        <p className="warehouse-info__info">Toronto, ON</p>
                        <p className="warehouse-info__info">M65GB7 CA</p>
                    </div>
                    <div className="warehouse-info__content-right">
                        <p className="warehouse-info__label">COntact</p>
                        <p className="warehouse-info__info">Mara Weinberg</p>
                        <p className="warehouse-info__info">Warehouse Manager</p>
                        <p className="warehouse-info__info">+1 416 678 2345</p>
                        <p className="warehouse-info__info">weinberg@instock.com</p>
                    </div>
                </div>
                <div className="warehouse-info__product-wrapper">
                    <div className="warehouse-info__product-container">
                        <ProductCard product={this.object}/>
                        <ProductCard product={this.object}/>
                        <ProductCard product={this.object}/>
                        <ProductCard product={this.object}/>
                        <ProductCard product={this.object}/>
                        <ProductCard product={this.object}/>

                    </div>
                </div>
            </section>
        );
    }
}