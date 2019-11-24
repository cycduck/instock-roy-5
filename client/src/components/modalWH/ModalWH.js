import React from "react";
import Modal from "react-modal";
import Switch from "react-switch"; // Why is there a switch
import "./modalWH.scss";
import { throwStatement } from "@babel/types";

// Modal.setAppElement('#yourAppElement')

export default class ModalWH extends React.Component {
  // custom style is not necessary because it will be applied inline, and we will be doing it in SCSS
  // Modal state in app JS, move it to app
  // constructor() {
  //   super();

  //   this.state = {
  //     modalIsOpen: false
  //   };

  //   this.openModal = this.openModal.bind(this)
  //   this.closeModal = this.closeModal.bind(this);
  // }

  // openModal() {
  //   this.setState({modalIsOpen: true});
  // }
  // closeModal() {
  //   this.setState({modalIsOpen: false});
  // }

  render() {
    return (
      <Modal
        isOpen={this.props.isModalWH}
        contentLabel="what does this contentLabel show???"
        className="modalWH"
        overlayClassName="modalWH__overlay"
      >
        <form className="formWH">
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
              />
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
                  />
               </div>
              </div>
              <div className="formWH__right">
                <div className="formWH__label-input">
                  <label className="formWH__label" htmlFor="location">
                    Location
                  </label>
                  <select className="formWH__input" name="location">
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
                  />
                </div>
              </div>
            </div>
            <div className="formWH__label-input">
              <label className="formWH__label" htmlFor="categories">
                categories
              </label>
              <input
                className="formWH__input"
                type="textarea"
                name="categories"
                placeholder="Use commas to separate each category"
              />
            </div>
          </div>
          <div>
            {/* to do and make it cool cuz i am going to make it into a sepsarete component */}
            <button>Cancel</button>
            <button>Cancel</button>
          </div>
        </form>
      </Modal>
    );
  }
}
