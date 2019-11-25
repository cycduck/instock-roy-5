import React from 'react'
import AddModalBtn from '../AddModalBtn/AddModalBtn';
import nextArrow from '../../assets/Icons/SVG/Icon-arrow-right.svg';
import './WarehouseCard.scss';


export default class WarehouseCard extends React.Component{
    state = {
        isNext : false
    }
    render(){
        if(!this.props.warehouse){return null}
        return(
            <React.Fragment>
                <div className="warehouse">  
                    <img className="warehouse__next-arrow" src={nextArrow} alt="next arrow icon"/>
                    <div className="warehouse__item warehouse__item--full">
                        <p className="warehouse__info warehouse__info--head">{this.props.warehouse.name}</p>
                        <p className="warehouse__info">{this.props.warehouse.address.street}</p>
                    </div>
                    <div className="warehouse__item">
                        <p className="warehouse__info">{this.props.warehouse.contact.name}</p>
                        <p className="warehouse__info">{this.props.warehouse.contact.title}</p>
                    </div>
                    <div className="warehouse__item">
                        <p className="warehouse__info">{this.props.warehouse.contact.phone}</p>
                        <p className="warehouse__info">{this.props.warehouse.contact.email}</p>
                    </div>
                    <div className="warehouse__item">
                        <p className="warehouse__info">{this.props.warehouse.inventoryCategories}</p>
                    </div>
                </div>
                <hr className="warehouse__ruler"></hr>
            </React.Fragment>
        );
    }
}