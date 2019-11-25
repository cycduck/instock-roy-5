import React from 'react';
import './ProductPage.scss';
import {Link} from 'react-router-dom';

import backArrow from '../../assets/Icons/SVG/Icon-back-arrow.svg';

export default class ProductPage extends React.Component{
    
    render(){
        // console.log(this.props.match.params.inventoryId)
        console.log(this.props)
        // console.log(this.props.match.params.inventoryId)
        // console.log(this.props.product)
        if(!this.props.product){
            console.error('Failed to fetch inventory item');
            return null
        }
        return(
            <section className="product-page">
                <div className="product-page__top">
                    <div className="product-page__top-name">
                        <Link to='/'>
                        <img src={backArrow} alt="back arrow icon" className="product-page__back-arrow"/>
                        </Link>
                        <h1 className="product-page__name">{this.props.product.name}</h1>
                    </div>
                    <div className="product-page__stock">{!this.props.product.isInstock ? 'Out of Stock' : 'In Stock'}</div>
                </div>
                <hr className="product-page__ruler"></hr>

                <div className="product-page__content">
                    <div className="product-page__left">
                        <div className="product-page__item--full">
                            <p className="product-page__label">Item Description</p>
                            <p className="product-page__info">{this.props.product.description}</p>
                        </div>
                    </div>
                    <div className="product-page__right">
                        <div className="product-page__item">
                            <p className="product-page__label">Ordered by</p>
                            <p className="product-page__info">Mark Saunders</p>
                        </div>
                        <div className="product-page__item">
                            <p className="product-page__label">Reference Number</p>
                            <p className="product-page__info">JF2020FD7811201</p>
                        </div>
                        <div className="product-page__item">
                            <p className="product-page__label">Last Ordered</p>
                            <p className="product-page__info">{this.props.product.lastOrdered}</p>
                        </div>
                        <div className="product-page__item">
                            <p className="product-page__label">Location</p>
                            <p className="product-page__info">{this.props.product.location}</p>
                        </div>
                        <div className="product-page__item--quantity">
                            <p className="product-page__label">Quantity</p>
                            <p className="product-page__info">{this.props.product.quantity}</p>
                        </div>
                        <div className="product-page__item--full">
                            <p className="product-page__label">Categories</p>
                            <p className="product-page__info">{this.props.product.categories}</p>
                        </div>
                    </div>
                </div>
                <hr className="product-page__ruler"></hr>
                <button className="product-page__edit-btn">Edit</button>
            </section>
        );
    }
}