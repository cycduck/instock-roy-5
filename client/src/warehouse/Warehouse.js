import React, {Component } from 'react';
import './warehouse.scss';
import dots from '../assets/Icons/SVG/Icon-kebab-default.svg';
import arrow from '../assets/Icons/SVG/Icon-back-arrow.svg';

let screenChecker = () => {
  let w = window.screen.width
  return w
}
let screenWidth = screenChecker()

export default class Warehouse extends React.Component {
  
  
  render() {
    
    const warehouseId = () => {
      // check if the keys have value, can't check if the props have stuff cuz empty array is truthy
      if(this.props.warehouseData.warehouse.name) {
        const {id, name: warehouseName, address: {street, suiteNum, city,province,postal}, contact: {name, title, phone, email},inventoryCategories} = this.props.warehouseData.warehouse;
        return (
          <div className="warehouse__wrapper">
            <div className="warehouse__back">
              <img src={arrow}/>
              <h1 className="warehouse__large-title">{warehouseName}</h1>
            </div>
            <div className ="warehouse__container">
              <div className="warehouse__address">
                <h3 className="warehouse__title">Address</h3>
                <div className="warehouse__title-div">
                  <p className="warehouse__detail">{street}</p>
                  <p className="warehouse__detail-subtitle">{suiteNum}</p>
                </div>
                <div className="warehouse__subtitle-div">
                  <p className="warehouse__detail-subtitle">{city+''+province}</p>
                  <p className="warehouse__detail-subtitle">{postal}</p>
                </div>
              </div>
              <div className="warehouse__contact">
                <h3 className="warehouse__title">Contact</h3>
                <div className="warehouse__title-div">
                  <p className="warehouse__detail">{name}</p>
                  <p className="warehouse__detail-subtitle">{title}</p>
                </div>
                <div className="warehouse__subtitle-div">
                  <p className="warehouse__detail-subtitle">{phone}</p>
                  <a className="warehouse__detail-subtitle" href="mailto:some-email">{email}</a>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }

    const inventById = (this.props.warehouseData.warehouseInvent || []).map(info => {
      const {categories, description, id, isInstock, lastOrdered, location, name, quantity, warehouseId} = info;
      
      const titleTrim = (info) => {
        if (screenWidth >= 768) {
          let x = info.substring(0, 55);
          return x + '...'
        } else {
          return info
        }
      }
      
      return (

        <div className="inventory__info">
          <div className="inventory__remove">
            <h3 className="inventory__category">Item</h3> 
            <img className="inventory__dot" src={dots} value="#"/>
          </div>         
            <div className="inventory__product-box">
              <h2 className="inventory__title">{name}</h2>
              <p className="inventory__detail">{titleTrim(description)}</p>
            </div>
          <div className="inventory__separation">
            <h3 className="inventory__category">Last Ordered</h3>
            <p className="inventory__detail">{lastOrdered}</p>
            <h3 className="inventory__category">Location</h3>
            <p className="inventory__detail">{location}</p>
            <h3 className="inventory__category">Quantity</h3>
            <p className="inventory__detail">{quantity}</p>
            <h3 className="inventory__category">Status</h3>
            <p className="inventory__detail">{isInstock ? 'In Stock' : 'Out of Stock'}</p>
          </div>
        </div>
      )
    })

    return(
      <section className="warehouse">
        {warehouseId()}
        <div className="inventory">
          <div className="inventory__warpper">
            <div className="inventory__top-category">
              <h3 className="inventory__category-title">Item</h3>
              <div className="inventory__separation">
                <h3 className="inventory__category-title">Last Ordered</h3>
                <h3 className="inventory__category-title">Location</h3>
                <h3 className="inventory__category-title">quantity</h3>
                <h3 className="inventory__category-title">status</h3>
              </div>
            </div>
            <li className="inventory__item">
                {inventById}
            </li>
          </div>
        </div>
      </section>
    )
  }
}