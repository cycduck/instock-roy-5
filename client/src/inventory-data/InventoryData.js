import React, { Component } from "react";
import ellipsisKebabMenu from "../assets/Icons/SVG/Icon-kebab-default.svg";
import plusIcon from "../assets/Icons/SVG/Icon-add.svg"
import "./inventoryData.scss";
import Removebtn from "../remove-btn/Removebtn";

export default class InventoryData extends Component {

state = {
    toggle: false
}

handleToggle =(event) =>{
    event.preventDefault();
    this.setState({
        toggle: true
    })

    }
render() {
    console.log(this.state)
    return (
    <div className="inventoryData__container">
        <div className="inventoryData__label-container-tablet">
            <p className="inventoryData__label-tablet-item">ITEM</p>
            <div className='inventoryData__label-container-tablet-plus'> 
                <p className="inventoryData__label-tablet-last-ordered">LAST ORDERED</p>
                <p className="inventoryData__label-tablet-location">LOCATION</p>
                <p className="inventoryData__label-tablet-quantity">QUANTITY</p>
                <p className="inventoryData__label-tablet-status">STATUS</p>
            </div>
        </div>
            <div className='inventoryData__blue-circle'>
                <img className='inventoryData__plus-icon' src={plusIcon} alt=""/> 
            </div>
        {this.props.data.map(item => {
        return (
            <div key={item.id} className="inventoryData__sub-container">
            <div className="inventoryData__item-container">
                <div className="inventoryData__ellipsisMenu-btn">
                <img src={ellipsisKebabMenu} alt="" onClick={this.handleToggle}/>
                {this.state.toggle ? <Removebtn /> : null}
                </div>
                <div className="inventoryData__item-title-container">
                <p className="inventoryData__label">ITEM</p>
                </div>
                <p className="inventoryData__product-name-label">{item.name}</p>
                <p className="inventoryData__item-descript">{item.description}</p>
            </div>
            <div className="inventoryData__last-ordered-container">
                <div className="inventoryData__last-ordered-title-container">
                <p className="inventoryData__label">LAST ORDERED</p>
                </div>
                <p className = "inventoryData__lastOrdered">{item.lastOrdered}</p>
            </div>
            <div className="inventoryData__location-container">
                <div className="inventoryData__location-title-container">
                <p className="inventoryData__label">LOCATION</p>
                </div>
                <p>{item.location}</p>
            </div>
            <div className="inventoryData__quantity-container">
                <div className="inventoryData__quantity-title-container">
                <p className="inventoryData__label">QUANTITY</p>
                </div>
                <p>{item.quantity}</p>
            </div>
            <div className="inventoryData__status-container">
                <div className="inventoryData__status-title-container">
                <p className="inventoryData__label">STATUS</p>
                </div>
                <p className="inventoryData__status-txt">{item.isInstock ? "In Stock" : "Out Of Stock"}</p>
                <div className="inventoryData__ellipsisMenu-btn inventoryData__ellipsis-tablet-style">
                <img src={ellipsisKebabMenu} alt="" />
                </div>
            </div>
            </div>
        );
        })}
    </div>
    );
}
}
