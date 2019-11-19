import React, {Component } from 'react';
import './warehouse.scss';

export default class Warehouse extends Component {
  
  
  render() {


    return(
      <section className="warehouse">
        <div className="warehouse__info">
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
          <div className="inventory__top-category">
            <h3>Item</h3>
            <h3>Last Ordered</h3>
            <h3>Location</h3>
            <h3>quantity</h3>
            <h3>status</h3>
          </div>
          <li class="inventory__item">
              <h3 class="inventory__category">Item</h3>
              <h2 class="inventory__title">Product name</h2>
              <p class="inventory__info">desc</p>
              <h3 class="inventory__category">Last Ordered</h3>
              <p class="inventory__info">date</p>
              <h3 class="inventory__category">Location</h3>
              <p class="inventory__info">San Franciso, CA</p>
              <h3 class="inventory__category">Quantity</h3>
              <p class="inventory__info">999</p>
              <h3 class="inventory__category">Status</h3>
              <p class="inventory__info">instock</p>
          </li>
        </div>
      </section>
    )
  }
}