import React from "react";
import Modal from "react-modal";
import "./modalWH.scss";
import { throwStatement } from "@babel/types";
import Button from "../button/Button";
import axios from "axios";

Modal.setAppElement("#root"); // aria
// https://css-tricks.com/considerations-styling-modal/

export default class ModalWH extends React.Component {
  // custom style is not necessary because it will be applied inline, and we will be doing it in SCSS
  // Modal state in app JS, move it to app

  // constructor () {
  //   super();

  //   this.state={
  //     warehouse:"",
  //     address:""
  //   }
  //   this.onChange =this.onChange.bind(this)
  //   // this method requires binding
  // }

  // onChange(e) {
  //   console.log(e.target.name, e.target.value)
  //   this.setState({[e.target.name]:e.target.value})
  // }

  // no need to setup initial state, this will do
  // https://medium.com/better-programming/handling-multiple-form-inputs-in-react-c5eb83755d15
  // https://medium.com/javascript-inside/better-understanding-forms-in-react-a85d889773ce
  onChange = e => {
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
    // on change seems to work cuz it's targetting one thing, not target.[name].value
  };

  postWarehouse = e => {
    e.preventDefault();
    // console.log(e.target.warehouse.type)
    // console.log(e.target.warehouse.value)
    // console.log(e.target.address.value)
    // console.log(e.target.contact.value)
    // console.log(e.target.phone.value)
    // console.log(e.target.location.value)
    // console.log(e.target.position.value)
    // console.log(e.target.email.value)
    // console.log(e.target.category.value)
    if (this.state) {
      // loop through the object and find a one without length is what it is doing atm
      // but i want it to go though the entire thing and find one that's empty
      let x = Object.keys(this.state).filter(info => !this.state[info])
      console.log(x)
      if ( x.length > 7) {
        console.log('axios working')
          axios.post("http://localhost:8080/warehouse", {
            name: e.target.warehouse.value,
            address: {
              street: e.target.address.value,
              suiteNum: "suite 201",
              city: "Toronto",
              province: "Ontario",
              postal: "M6N4B7"
            },
            contact: {
              name: e.target.contact.value,
              title: e.target.position.value,
              phone: e.target.phone.value,
              email: e.target.email.value
            },
            inventoryCategories: e.target.category.value
          }).catch(err => {
            console.log(err);
          });
        } else {
          console.log('fuck')
        }
      }
      
  
        // else {
        //   
    // if any of the values aren't empty, then submit
    // if it is show an error
  };



  render() {
    return (
      <Modal
        isOpen={this.props.isModalWH} // required prop
        onRequestClose={this.props.handleModalWH}
        contentLabel="whatisthis"
        className="modalWH"
        overlayClassName="modalWH__overlay"
      >
        <form className="formWH" onSubmit={this.postWarehouse}>
          <h1 className="formWH__title">Add New</h1>
          <div className="formWH__container-big">
            <div className="formWH__label-input">
              <label className="formWH__label" htmlFor="warehouse">
                Warehouse
              </label>
              <input
                className="formWH__input"
                type="text"
                name="warehouse"
                placeholder="Name & ID"
                onChange={this.onChange}
              />
              {/* {!this.state.warehouse || this.state.warehouse.length === 0 ? (
                <span>type something</span>
              ) : (
                false
              )} */}
            </div>
            <div className="formWH__container">
              <div className="formWH__left">
                <div className="formWH__label-input">
                  <label className="formWH__label" htmlFor="address">
                    Address
                  </label>
                  <input
                    className="formWH__input"
                    type="text"
                    name="address"
                    placeholder="Enter Address"
                    onChange={this.onChange}
                  />
                </div>
                <div className="formWH__label-input">
                  <label className="formWH__label" htmlFor="contact">
                    Contact Name
                  </label>
                  <input
                    className="formWH__input"
                    type="text"
                    name="contact"
                    placeholder="Enter Name"
                    onChange={this.onChange}
                  />
                </div>
                <div className="formWH__label-input">
                  <label className="formWH__label" htmlFor="phone">
                    Phone number
                  </label>
                  <input
                    className="formWH__input"
                    type="text"
                    name="phone"
                    placeholder="(000) - 000 - 0000"
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="formWH__right">
                <div className="formWH__label-input">
                  <label className="formWH__label" htmlFor="location">
                    Location
                  </label>
                  <select className="formWH__input" name="location" onChange={this.onChange}>
                    <option value="Toronto, Can">Toronto, Can</option>                    
                  </select>
                </div>
                <div className="formWH__label-input">
                  <label className="formWH__label" htmlFor="position">
                    Position
                  </label>
                  <input
                    className="formWH__input"
                    type="text"
                    name="position"
                    placeholder="Enter Position"
                    onChange={this.onChange}
                  />
                </div>
                <div className="formWH__label-input">
                  <label className="formWH__label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="formWH__input"
                    type="text"
                    name="email"
                    placeholder="email@instock.com"
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>
            <div className="formWH__label-input">
              <label className="formWH__label" htmlFor="category">
                categories
              </label>
              <input
                className="formWH__input"
                type="textarea"
                name="category"
                placeholder="Use commas to separate each category"
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="formWH__label-input">
            {/* classname name onclick */}
            <Button className="formWH__save" name="save" />
            <Button
              className="formWH__cancel"
              name="cancel"
              onClick={this.props.handleModalWH}
            />
          </div>
        </form>
      </Modal>
    );
  }
}