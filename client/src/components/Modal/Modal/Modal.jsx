import React from "react";
import "./modal.scss";
import ReactModal from "react-modal";
import Switch from "react-switch";
import Button from "../Button/Button";
import axios from "axios";

export default class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      form: {
        name: "",
        description: "",
        quantity: "",
        lastOrdered: "",
        location: "",
        country: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  onChange = e => {
    console.log(e.target.name, e.target.value);

    // // (1)
    // const newForm = this.state.form;
    // newForm[e.target.name] = e.target.value;
    // this.setState({
    //   form: newForm
    // })

    // (2)
    this.setState({ form: {
      ...this.state.form, // taking the old form object making sure the properties are there, then adding a new property
      [e.target.name ]: e.target.value
    } });
  };

  postInventory = e => {
    e.preventDefault();
    console.log(this.state.form);
    if (this.state.form) {
      let arrayOfEmptyFields = Object.keys(this.state.form).filter(info => {
        console.log(this.state.form[info]);
        return !this.state.form[info];
      });
      console.log(arrayOfEmptyFields);
      if (arrayOfEmptyFields.length === 0) {
        // only submit when there are no empty fields

        console.log("axios working");

        axios.post("http://localhost:8080/inventory", {
            name: e.target.name.value,
            description: e.target.description.value,
            quantity: e.target.quantity.value,
            lastOrdered: e.target.lastOrdered.value,
            location: e.target.location.value,
            country: e.target.country.value,
            isInstock: true,
            categories: "Footwear, Safety, Construction",
            warehouseId: "W3"
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        console.log(`Fields ${arrayOfEmptyFields} are still empty`);
      }
    }
  };

  handleChange(checked) {
    this.setState({ checked });
  }
  render() {
    console.log(this.state.checked);
    return (
      <ReactModal
        isOpen={this.props.isModal}
        contentLabel="Minimal Modal Example"
        overlayClassName="modal-form__overlay"
        className="modal"
      >
        <form className="modal-form" onSubmit={this.postInventory}>
          <h1 className="modal-form__title">Create New</h1>
          <div className="modal-form__container">
            <div className="modal-form__left">
              <div className="modal-form__input-container">
                <label className="modal-form__label" htmlFor="product">
                  Product
                </label>
                <input
                  className="modal-form__input"
                  type="text"
                  name="name"
                  placeholder="Item Name"
                  onChange={this.onChange}
                />
              </div>
              <div className="modal-form__input-container">
                <label className="modal-form__label" htmlFor="city">
                  City
                </label>
                <input
                  className="modal-form__input"
                  type="text"
                  name="location"
                  placeholder="City"
                  onChange={this.onChange}
                />
              </div>
              <div className="modal-form__input-container">
                <label className="modal-form__label" htmlFor="Quantity">
                  Quantity
                </label>
                <input
                  className="modal-form__input"
                  type="text"
                  name="quantity"
                  placeholder="0"
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="modal-form__right">
              <div className="modal-form__input-container">
                <label className="modal-form__label" htmlFor="Last Ordered">
                  Last Ordered
                </label>
                <input
                  className="modal-form__input"
                  type="text"
                  name="lastOrdered"
                  placeholder="YYYY-MM-DD"
                  onChange={this.onChange}
                />
              </div>
              <div className="modal-form__input-container">
                <label className="modal-form__label" htmlFor="Country">
                  Country
                </label>
                <input
                  className="modal-form__input"
                  type="text"
                  name="country"
                  placeholder="Canada"
                  onChange={this.onChange}
                />
              </div>
              <div className="modal-form__input-container">
                <label className="modal-form__label" htmlFor="status">
                  Status
                </label>
                <div className="modal-form__status">
                  <label
                    className="modal-form__label modal-form__label--status"
                    htmlFor="status"
                  >
                    In Stock
                  </label>
                  <Switch
                    onChange={this.handleChange}
                    checked={this.state.checked}
                    handleDiameter={24}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    width={48}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-form__input-container">
            <label className="modal-form__label" htmlFor="product">
              Item Description
            </label>
            <textarea
              className="modal-form__input modal-form__input--description"
              type="text"
              name="description"
              placeholder="Item Name"
              onChange={this.onChange}
            />
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
      </ReactModal>
    );
  }
}