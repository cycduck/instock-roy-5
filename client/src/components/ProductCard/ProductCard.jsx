import React from 'react'

import './ProductCard.scss';

import kebab from '../../assets/Icons/SVG/Icon-kebab-default.svg';

import axios from 'axios';

// import {Link} from 'react-router-dom';

export default class ProductCard extends React.Component{
    state = {
        isRemove : false
    }

    handleKebab = () => {
        console.log('this got handled')
        this.setState({
            isRemove : !this.state.isRemove
        })
    }
    handleWindow = () => {
            this.handleKebab();
            document.removeEventListener('click', this.handleWindow);
    }
    componentDidUpdate(){
        if(this.state.isRemove === true){
            document.addEventListener('click', this.handleWindow)
        }
    }
    render(){
        if(!this.props.product){return null}
        return(
            <React.Fragment>
            {/* <Link to={this.props.inventory.id}>  */}
                <div className="product" id={this.props.product.id}>
                        <img onClick={this.handleKebab} className="product__kebab" src={kebab} alt="kebab"/>
                        { this.state.isRemove ? <button className="product__remove-btn" onClick={()=>{this.props.handleDelete(this.props.product.id)}}>Remove</button> : null }         
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
                </div>
                <hr className="product__ruler"></hr>
            {/* </Link>  */}
            </React.Fragment>
        );
    }
}