import React, {Component } from 'react';
import './warehouse.scss';
import dots from '../assets/Icons/SVG/Icon-kebab-default.svg';
import axios from 'axios';

export default class Warehouse extends React.Component {
  state = {
    warehouseInvent: [],
  }
  warehouseInvent = (warehouseId) => {
    axios.get(`http://localhost:8080/warehouse/${warehouseId}/inventory`)
    .then(response => {
      console.log('receive inventory data by warehouse', response.data)
      this.setState({
        warehouseInvent: response.data
      })
    })
  }
  
  render() {
    
    
    return(
      <section className="warehouse">
        <div className="warehouse__wrapper">
          <h1 className="warehouse__large-title">warehouse Name</h1>
          <div className ="warehouse__container">
            <div className="warehouse__address">
              <h3 className="warehouse__title">Address</h3>
              <div className="warehouse__title-div">
                <p className="warehouse__detail">street</p>
                <p className="warehouse__detail-subtitle">unit</p>
              </div>
              <div className="warehouse__subtitle-div">
                <p className="warehouse__detail-subtitle">city</p>
                <p className="warehouse__detail-subtitle">postal code</p>
              </div>
            </div>
            <div className="warehouse__contact">
              <h3 className="warehouse__title">Contact</h3>
              <div className="warehouse__title-div">
                <p className="warehouse__detail">Name</p>
                <p className="warehouse__detail-subtitle">title</p>
              </div>
              <div className="warehouse__subtitle-div">
                <p className="warehouse__detail-subtitle">phone</p>
                <a className="warehouse__detail-subtitle" href="mailto:some-email">email</a>
              </div>
            </div>
          </div>
        </div>
        <div className="inventory">
          <div className="inventory__warpper">
            <div className="inventory__top-category">
      {/* {this.warehouseInvent('W0')} */}
              <h3 className="inventory__category-title">Item</h3>
              <div className="inventory__separation">
                <h3 className="inventory__category-title">Last Ordered</h3>
                <h3 className="inventory__category-title">Location</h3>
                <h3 className="inventory__category-title">quantity</h3>
                <h3 className="inventory__category-title">status</h3>
              </div>
            </div>
            <li className="inventory__item">
                <div className="inventory__info">
                  <div className="inventory__remove">
                    <h3 className="inventory__category">Item</h3> 
                    <img className="inventory__dot" src={dots} value="#"/>
                  </div>         
                    <div className="inventory__product-box">
                      <h2 className="inventory__title">Product name</h2>
                      <p className="inventory__detail">sdfasdfasfsadfasfsadfasfsafsfdasdfasf</p>
                    </div>
                  <div className="inventory__separation">
                    <h3 className="inventory__category">Last Ordered</h3>
                    <p className="inventory__detail">a lot of words</p>
                    <h3 className="inventory__category">Location</h3>
                    <p className="inventory__detail">San Franciso, CA</p>
                    <h3 className="inventory__category">Quantity</h3>
                    <p className="inventory__detail">999</p>
                    <h3 className="inventory__category">Status</h3>
                    <p className="inventory__detail">instock</p>
                  </div>
                </div>
            </li>
          </div>
        </div>
      </section>
    )
  }
}