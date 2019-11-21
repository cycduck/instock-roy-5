import React from 'react';
import './Modal.scss';
import ReactModal from 'react-modal';
import Switch from "react-switch";
 

export default class Modal extends React.Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
      }
     
      handleChange(checked) {
        this.setState({ checked });
      }
    render () {
        console.log(this.state.checked)
      return (
          <ReactModal 
             isOpen={this.props.isModal}
             contentLabel="Minimal Modal Example"
             overlayClassName="modal-form__overlay"
             className="modal"
          >
              <form className="modal-form">
                <h1 className="modal-form__title">Create New</h1>
                <div className="modal-form__container">
                   <div className="modal-form__left">
                        <div className="modal-form__input-container">
                            <label className="modal-form__label" htmlFor="product">Product</label>
                            <input className="modal-form__input" type="text" name="name" placeholder="Item Name"/>
                        </div>
                        <div className="modal-form__input-container">
                            <label className="modal-form__label" htmlFor="city">City</label>
                            <input className="modal-form__input" type="text" name="city" placeholder="City"/>
                        </div>
                        <div className="modal-form__input-container">
                            <label className="modal-form__label" htmlFor="Quantity">Quantity</label>
                            <input className="modal-form__input" type="text" name="quantity" placeholder="0"/>
                        </div>
                   </div>
                   <div className="modal-form__right">
                    <div className="modal-form__input-container">
                            <label className="modal-form__label" htmlFor="Last Ordered">Last Ordered</label>
                            <input className="modal-form__input" type="text" name="date" placeholder="YYYY-MM-DD"/>
                        </div>
                        <div className="modal-form__input-container">
                            <label className="modal-form__label" htmlFor="Country">Country</label>
                            <input className="modal-form__input" type="text" name="country" placeholder="Canada"/>
                        </div>
                        <div className="modal-form__input-container">
                            <label className="modal-form__label" htmlFor="status">Status</label>
                            <div className="modal-form__status">
                                <label className="modal-form__label modal-form__label--status" htmlFor="status">In Stock</label>
                                <Switch onChange={this.handleChange} checked={this.state.checked} handleDiameter={24} uncheckedIcon={false} checkedIcon={false} width={48}/>
                            </div>
                        </div>
                   </div>
                </div>
                <div className="modal-form__input-container">
                    <label className="modal-form__label" htmlFor="product">Item Description</label>
                    <textarea className="modal-form__input modal-form__input--description" type="text" name="name" placeholder="Item Name"/>
                </div>
                
              </form>
          </ReactModal>
      );
    }
  }
  
  
