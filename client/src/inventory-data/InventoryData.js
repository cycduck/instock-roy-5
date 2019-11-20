import React, { Component } from "react";
import ellipsisKebabMenu from "../assets/Icons/SVG/Icon-kebab-default.svg";
import plusIcon from "../assets/Icons/SVG/Icon-add.svg"
import "./inventoryData.scss";

export default class InventoryData extends Component {
render() {
    return (
    <div className="inventoryData__container">
        <div className='inventoryData__blue-circle'>
            <img className='inventoryData__plus-icon' src={plusIcon} alt=""/> 
        </div>
        {this.props.data.map(item => {
        return (
            <div key={item.id} className="inventoryData__sub-container">
            <div className="inventoryData__item-container">
                {/* make this into a link */}
                <div className="inventoryData__ellipsisMenu-btn">
                <img src={ellipsisKebabMenu} alt="" />
                </div>
                <div className="inventoryData__item-title-container">
                <p className="inventoryData__label">ITEM</p>
                </div>
                <p className="inventoryData__product-name-label">{item.name}</p>
                <p>{item.description}</p>
            </div>
            <div className="inventoryData__last-ordered-container">
                <div className="inventoryData__last-ordered-title-container">
                <p className="inventoryData__label">LAST ORDERED</p>
                </div>
                <p>{item.lastOrdered}</p>
            </div>
            <div className="inventoryData__location-container">
                <div className="inventoryData__location-title-container">
                <p className="inventoryData__label">LOCATION</p>
                </div>
                <p>{item.location}</p>
            </div>
            <div className="inventoryData__quantity-container">
                <div className="inventoryData__quantity-title-container">
                <p className="inventoryData__label">LAST ORDERED</p>
                </div>
                <p>{item.quantity}</p>
            </div>
            <div className="inventoryData__status-container">
                <div className="inventoryData__status-title-container">
                <p className="inventoryData__label">STATUS</p>
                </div>
                <p>{item.isInstock ? "In Stock" : "Out Of Stock"}</p>
            </div>
            </div>
        );
        })}
    </div>
    );
}
}
