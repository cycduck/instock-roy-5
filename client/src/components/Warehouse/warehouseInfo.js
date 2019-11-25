import React, { Component } from "react";
import iconDetailArrow from './Icon-arrow-right.svg';
import iconBackArrow from './Icon-back-arrow.svg';
import iconAdd from './Icon-add.svg';

import "./warehouseInfo.scss";

export default class WarehouseInfo extends Component {
render() {
    return (
    <div className="warehouseInfo__container">
        <div className="warehouseInfo__desktop-title-container-">
            <p className="warehouseInfo__desktop-title-location">WAREHOUSE</p>
            <p className="warehouseInfo__desktop-title-contact-name">CONTACT</p>
            <p className="warehouseInfo__desktop-title-contact-info">CONTACT INFORMATION</p>
            <p className="warehouseInfo__desktop-title-categories">CATEGORIES</p>
        </div>
            <div className='warehouseInfo__new-circle'>
                <img className='warehouseInfo__icon-add' src={iconAdd} alt=""/> 
            </div>
        {this.props.data.map(item => {
        return (
        <div key={item.id} className="warehouseInfo__sub-container">
            <div className="warehouseInfo__loc-container">
                <div className="warehouseInfo__loc-addr-container">
                    <p className="warehouseInfo__loc-label">WAREHOUSE NAME {item.id}</p>
                    <p className="warehouseInfo__loc-address-details">{item.address.street}, {item.address.suiteNum}, {item.address.city}, {item.address.province}</p>
                </div>
                <div className="warehouseInfo__loc-tablet-style">
                    <div className="warehouseInfo__loc-contact-container">
                        <p className = "warehouseInfo__loc-contact">{item.contact.name}</p>
                        <p className = "warehouseInfo__loc-contact-title">{item.contact.title}</p>
                    </div>
                    <div className="warehouseInfo__loc-contact-info-container">
                        <p className = "warehouseInfo__loc-contact-info">+1 {item.contact.phone}</p>
                        <p className = "warehouseInfo__loc-contact-info-email">{item.contact.email}</p>
                    </div>
                    <div className="warehouseInfo__loc-category-container">
                        <p className = "warehouseInfo__loc-category-info">{item.inventoryCategories}</p>
                    </div>
                <div className="warehouseInfo__details-arrow-btn warehouseInfo__details-arrow-style">
                    <img src={iconDetailArrow} alt="" />
                </div>    
                </div>
            </div>
        </div>
        )
        })}
    </div>
        )}}