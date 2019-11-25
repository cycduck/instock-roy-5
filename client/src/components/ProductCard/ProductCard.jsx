import React from 'react'

import './ProductCard.scss';

import kebab from '../../assets/Icons/SVG/Icon-kebab-default.svg';


import {Link} from 'react-router-dom';

export default class ProductCard extends React.Component{
    state = {
        isRemove : false
    }

    handleKebab = () => {
        this.setState({
            isRemove : !this.state.isRemove
        })
    }
    render(){
        if(!this.props.product){return null}
        return(
            <>
                <div className="product" id={this.props.product.id}>
                        <img onClick={this.handleKebab} className="product__kebab" src={kebab} alt="kebab"/>
                        { this.state.isRemove ? <button className="product__remove-btn" onClick={()=>{this.props.handleDelete(this.props.product.id)}}>Remove</button> : null }         
                <Link to={`/inventory/${this.props.product.id}`} className='link'>    
                    <div className="product__item">
                        <p className="product__label">Item</p>
                        <p className="product__name">{this.props.product.name}</p>
                        <p className="product__info product__info--name">Here is a very brief description of the product in the inventory</p>
                    </div>
                    <div className="product__item">
                        <p className="product__label">Last Ordered</p>
                        <p className="product__info">{this.props.product.lastOrdered}</p>
                    </div>
                    <div className="product__item">
                        <p className="product__label">Location</p>
                        <p className="product__info">{this.props.product.location}</p>
                    </div>
                    <div className="product__item">
                        <p className="product__label">Quantity</p>
                        <p className="product__info">{this.props.product.quantity}</p>
                    </div>
                    <div className="product__item">
                        <p className="product__label">Status</p>
                        <p className="product__info">{!this.props.product.isInstock ? 'Out of Stock' : 'In Stock'}</p>
                    </div> 
                    </Link>
                </div>
                <hr className="product__ruler"></hr>
            </>
        );
    }
}